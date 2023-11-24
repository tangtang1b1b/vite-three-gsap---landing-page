<script setup>
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { defineProps, onMounted, ref, watchEffect, toRefs, watch } from 'vue';

const props = defineProps({
  bannerRef: Object,
  productRef: Object,
});

const threeBox = ref(null);
const isReady = ref(false);
const boxRef = ref(null);
const { bannerRef, productRef } = toRefs(props);

let ctx;

//------建場景跟渲染器------
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true });

//------透視、正式相機------
const frustumSize = 2;
const aspect = window.innerWidth / window.innerHeight;
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 0.1, 100);

//------幫模型打光------
const directionalLight = new THREE.DirectionalLight(0xffffff, 9);
directionalLight.position.set(1, 1, 2).normalize();
scene.add(directionalLight);

//------load 模型進來，先設定好路徑------
const loader = new GLTFLoader();
let desk;
loader.load('3Dmodel/desk.gltf', function (gltf) {
  desk = gltf.scene;
  scene.add(desk);
  mouseMove(desk); // loader 是異步所以直接這邊 call 避免time issue
  animate();
  isReady.value = true;
});

camera.position.y = 0.4;
camera.position.z = 2;

const angle = ref(0);
const animate = () => {
  requestAnimationFrame(animate);

  angle.value += 0.03;
  const offsetY = Math.sin(angle.value) * 0.01;
  desk.position.y = offsetY;

  renderer.render(scene, camera);
}

const mouseMove = (mesh, currentRotation = { x: 0, y: 0 }) => {
  const rotateX = window.innerWidth / 2;
  const rotateY = window.innerHeight / 2;
  window.addEventListener('mousemove', (e) => {
    mesh.rotation.x = currentRotation.x + ((e.clientY - rotateY) * 0.0003);
    mesh.rotation.y = currentRotation.y + ((e.clientX - rotateX) * 0.0003);
  });
}

const onResize = () => {
  const aspectResize = window.innerWidth / window.innerHeight;
  camera.left = frustumSize * aspectResize / - 2;
  camera.right = frustumSize * aspectResize / 2;
  camera.top = frustumSize / 2;
  camera.bottom = - frustumSize / 2;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

onMounted(() => {
  threeBox.value.appendChild(renderer.domElement);
  renderer.setSize(window.innerWidth, window.innerHeight);
  window.addEventListener('resize', onResize, false);
  watchEffect(() => {
    if (isReady.value) {
      ctx = gsap.context(() => {
        gsap.set(desk.position, {x: 1, y: 0, z: 0});
        gsap.fromTo('canvas',
          {
            xPercent: 100,
            opacity: 0,
            ease: 'power1.inOut'
          }, {
          duration: 1,
          xPercent: 0,
          opacity: 1,
          ease: 'power1.inOut'
        });
        
        gsap.to(desk.position, {
          scrollTrigger: {
            trigger: bannerRef.value,
            start: 'top',
            end: `+=${bannerRef.value.offsetHeight}`,
            markers: true,
            scrub: 1.5,
          },
          x: -1,
          ease: 'none',
        });
      }, threeBox.value);
    }
  })
});

</script>

<template>
  <div id="threeBox" ref="threeBox"></div>
</template>

<style lang="scss" scoped>
#threeBox {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  pointer-events: none;
}

.box {
  width: 100%;
  height: 200vh;
}
</style>
