<script setup>
import { ref, onMounted } from 'vue';
import Lenis from '@studio-freight/lenis'
import ModelDesk from '../components/ModelDesk.vue';
import BannerContainer from '../components/BannerContainer.vue';
import ProductContainer from '../components/ProductContainer.vue';
import CollectionContainer from '../components/CollectionContainer.vue';
import ProcessContainer from '../components/ProcessContainer.vue';
import Navbar from '../components/Navbar.vue';
import footerArea from '../components/footerArea.vue';
import LoadingMask from '../components/LoadingMask.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const productContainerRef = ref(null);
const collectionContainerRef = ref(null);
const pinSpaceRef = ref(null);
const titleMouseRef = ref(null);

const handleSendProductRef = (ref) => {
  productContainerRef.value = ref;
};
const handleSendCollectionRef = (ref) => {
  collectionContainerRef.value = ref;
};
const initialiseLenisScroll = () => {
  const lenis = new Lenis({
    smoothWheel: true,
    duration: 1.3
  });

  lenis.on('scroll', ScrollTrigger.update);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
onMounted(() => {
  initialiseLenisScroll();
})
</script>

<template>
  <LoadingMask/>
  <Navbar />
  <ModelDesk :productRef="productContainerRef" :collectionRef="collectionContainerRef" :pinSpaceRef="pinSpaceRef" />
  <div class="titleMouse" ref="titleMouseRef"></div>
  <div class="container">
    <BannerContainer />
    <ProductContainer @sendProductRef="handleSendProductRef" />
    <div class="pinSpace"></div>
    <div class="pinSpace" ref="pinSpaceRef"></div>
    <CollectionContainer @sendCollectionRef="handleSendCollectionRef" />
    <ProcessContainer />
  </div>
  <footerArea />
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: auto;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .pinSpace {
    width: 100%;
    height: 100vh;
    background-color: transparent;
  }
}
</style>
