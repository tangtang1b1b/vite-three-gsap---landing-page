<script setup>
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAnimeStore } from '../stores/counter';
const useAnime = useAnimeStore();
gsap.registerPlugin(ScrollTrigger);
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { onMounted, onUnmounted, ref, watchEffect, watch } from 'vue';

const props = defineProps({
  productRef: Object,
  collectionRef: Object,
  pinSpaceRef: Object,
})

const threeBox = ref(null);
const isReady = ref(false);
const isRotate = ref(false);
const scrollY = ref(null);
const touchX = ref(null);
const touchY = ref(null);
// const isGsap = window.innerWidth > 1024 ? true : false;

let ctx;

//------建場景跟渲染器------
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true });

//------透視、正式相機------
// const frustumSize = 2;
// const aspect = window.innerWidth / window.innerHeight;
// const camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 0.1, 100);
const aspectMode = useAnime.isGsap ? window.innerWidth / window.innerHeight : window.innerWidth / (window.innerHeight / 2);
const camera = new THREE.PerspectiveCamera(25, aspectMode, 1, 1000);

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
const windowSize = (w) => {
  if (w > 600 && w < 1200) {
    return 2.8
  } else if (w < 600) {
    return 3.5
  }
}
camera.position.y = 0.4;
camera.position.z = useAnime.isGsap ? 4.5 : windowSize(window.innerWidth);

const angle = ref(0);
const offsetX = ref((window.innerWidth / window.innerHeight) / 2);
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
  const handleMouseMove = (e) => {
    mesh.rotation.x = currentRotation.x + ((e.clientY - rotateY) * 0.0003);
    mesh.rotation.y = currentRotation.y + ((e.clientX - rotateX) * 0.0003);
  };
  const handleTouchStart = (e) => {
    e.preventDefault();
    touchX.value = e.touches[0].clientX;
    touchY.value = e.touches[0].clientY;
  };
  const handleTouchMove = (e) => {
    let moveX = e.touches[0].clientX - touchX.value;
    let moveY = e.touches[0].clientY - touchY.value;
    touchX.value = e.touches[0].clientX;
    touchY.value = e.touches[0].clientY;
    mesh.rotation.y += moveX * 0.003;
    mesh.rotation.x += moveY * 0.003;
  }
  if (useAnime.isGsap) {
    window.addEventListener('mousemove', handleMouseMove);
    watch(scrollY, (newValue) => {
      if (newValue > 0) {
        if (mesh.rotation.x !== 0 && mesh.rotation.y !== 0 && isRotate.value !== true) {
          mesh.rotation.x = 0;
          mesh.rotation.y = 0;
          isRotate.value = true;
        }
        window.removeEventListener('mousemove', handleMouseMove);
      } else {
        setTimeout(() => {
          if (newValue > 0) return
          isRotate.value = false;
          window.addEventListener('mousemove', handleMouseMove);
        }, 33);
      }
    });
  } else {
    threeBox.value.addEventListener('touchstart', handleTouchStart);
    threeBox.value.addEventListener('touchmove', handleTouchMove);
  }
}

const onResize = () => {
  // const aspectResize = window.innerWidth / window.innerHeight;
  // camera.aspect = aspectResize;
  // camera.left = frustumSize * aspectResize / - 2;
  // camera.right = frustumSize * aspectResize / 2;
  // camera.top = frustumSize / 2;
  // camera.bottom = - frustumSize / 2;
  // camera.updateProjectionMatrix();
  // renderer.setSize(window.innerWidth, window.innerHeight);
}

const three = onMounted(() => {
  // const isGsap = window.innerWidth > 1024 ? true : false;
  const heightMode = useAnime.isGsap ? window.innerHeight : window.innerHeight / 2;
  const angle = Math.PI / 180;
  let delay = 0;
  let delay2 = 0;
  let delay3 = 0;
  let setDuration = 1;
  threeBox.value.appendChild(renderer.domElement);
  renderer.setSize(window.innerWidth, heightMode);
  // window.addEventListener('resize', onResize, false);
  watchEffect(() => {
    if (isReady.value) {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: threeBox.value,
          start: 'top',
          end: `+=${threeBox.value.offsetHeight}`,
          // markers: true,
          scrub: 1.5,
        },
      });
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: props.pinSpaceRef,
          start: 'top 70%',
          end: `center 70%`,
          // markers: true,
          scrub: 1.5,
        },
      });
      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: props.collectionRef.value,
          start: 'top bottom',
          end: `top top`,
          // markers: true,
          scrub: 1.5,
        },
      });
      ctx = gsap.context(() => {
        if (useAnime.isGsap) {
          gsap.set(desk.position, { x: offsetX.value, y: 0, z: 0 });
          t1.to(desk.position, {
            x: 0,
            duration: setDuration,
          }, delay);
          t1.to(desk.scale, {
            x: 1.5,
            y: 1.5,
            z: 1.5,
            duration: setDuration,
          }, delay)
          t1.to(desk.rotation, {
            x: angle * 30,
            y: angle * 140,
            duration: setDuration,
          }, delay);

          delay += setDuration;

          t1.to(desk.position, {
            x: -1,
            duration: setDuration,
          }, delay);
          t1.to(desk.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: setDuration,
          }, delay)
          t1.to(desk.rotation, {
            x: angle * 3,
            y: angle * 240,
            duration: setDuration,
          }, delay);

          t2.to(desk.position, {
            x: 1,
            duration: setDuration,
          }, delay2);
          t2.to(desk.rotation, {
            x: angle * 0,
            y: angle * -10,
            duration: setDuration,
          }, delay2);
        }
        gsap.set(props.productRef.value, { opacity: 0 });
        gsap.fromTo('canvas',
          {
            xPercent: 100,
            opacity: 0,
          },
          {
            duration: 1,
            xPercent: 0,
            opacity: 1,
          });

        gsap.to(props.productRef.value,
          {
            opacity: 1,
            duration: setDuration,
            scrollTrigger: {
              trigger: props.productRef.value,
              start: 'top 40%',
              end: `top top`,
              // markers: true,
              scrub: 1.5,
            },
          }
        );
        t3.to('.container', {
          backgroundColor: '#000',
          duration: setDuration,
        }, delay3);
        t3.to(props.productRef.value, {
          backgroundColor: '#000',
          duration: setDuration,
        }, delay3);
        t3.to(threeBox.value, {
          zIndex: -1,
        }, delay3);
      });
    }
  })
});

const scrollCheck = onMounted(() => {
  const handleScroll = () => {
    scrollY.value = window.scrollY;
  }
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  ctx.revert();
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div id="threeBox" ref="threeBox" :style="{ position: useAnime.isGsap ? 'fixed' : 'static' }"></div>
</template>

<style lang="scss" scoped>
@mixin padMode {
  @media (max-width: 1024px) {
    @content
  }
}

#threeBox {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 55;
  pointer-events: none;
  overflow: hidden;

  @include padMode {
    padding-top: 70px;
    height: 50%;
    pointer-events: auto;
  }
}
</style>
