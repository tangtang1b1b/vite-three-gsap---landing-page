<script setup>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { onMounted, ref } from 'vue';
const threeBox = ref();
// const desk = ref();

//------建場景跟渲染器------
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true });

//------透視、正式相機------
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera = new THREE.OrthographicCamera(-window.innerWidth / window.innerHeight, window.innerWidth / window.innerHeight, 1, -1, 0.1, 1000);

//------幫模型打光------
const directionalLight = new THREE.DirectionalLight(0xffffff, 9);
directionalLight.position.set(1, 1, 2).normalize();
scene.add(directionalLight);

//------load 模型進來，先設定好路徑------
const loader = new GLTFLoader().setPath('src/assets/3Dmodel/');
let desk;
loader.load('desk.gltf', function (gltf) {
  desk = gltf.scene;
  desk.position.x = 1;
  scene.add(desk);
  mouseMove(desk); // loader 是異步所以直接在這邊 call
  animate();
});

camera.position.z = 2;

const angle = ref(0);
const animate = () => {
  requestAnimationFrame(animate);

  angle.value += 0.02;
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

onMounted(() => {
  threeBox.value.appendChild(renderer.domElement);
  renderer.setSize(window.innerWidth, window.innerHeight);
});
</script>

<template>
  <div class="container">
    <div class="banner"></div>
    <div class="products"></div>
  </div>
  <div id="threeBox" ref="threeBox"></div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .banner {
    text-align: center;
    width: 100%;
    height: 100vh;
    background-color: #ddd;
  }
  .products{
    width: 100%;
    height: 100vh;
  }
}

#threeBox {
  position: fixed;
  outline: solid 1px #000;
  top: 0;
  pointer-events: none;
}
</style>
