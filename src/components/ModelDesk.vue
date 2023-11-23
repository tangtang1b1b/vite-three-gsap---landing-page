<script setup>
import * as THREE from 'three';
import gsap from 'gsap';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { onMounted, ref } from 'vue';
const threeBox = ref();

//------建場景跟渲染器------
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true });

//------透視、正式相機------
const frustumSize = 2;
const aspect = window.innerWidth / window.innerHeight;
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 0.1, 100 );

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
});

// camera.position.x = -1;
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

const mouseMove = (mesh) => {
  const rotateX = window.innerWidth / 2;
  const rotateY = window.innerHeight / 2;
  window.addEventListener('mousemove', (e) => {
    mesh.rotation.x = ((e.clientY - rotateY) * 0.0003);
    mesh.rotation.y = ((e.clientX - rotateX) * 0.0003);
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
  outline: solid 1px #000;
  top: 0;
  pointer-events: none;
}
</style>
