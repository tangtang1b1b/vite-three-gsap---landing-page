<script setup>
import { ref, onMounted } from 'vue';
import ModelDesk from '../components/ModelDesk.vue';
import BannerContainer from '../components/BannerContainer.vue';
import ProductContainer from '../components/ProductContainer.vue';
import CollectionContainer from '../components/CollectionContainer.vue';
import Navbar from '../components/Navbar.vue';

const productContainerRef = ref(null);
const collectionContainerRef = ref(null);
const pinSpaceRef = ref(null);

const handleSendProductRef = (ref) => {
  productContainerRef.value = ref;
};
const handleSendCollectionRef = (ref) => {
  collectionContainerRef.value = ref;
};

onMounted(() => {

})
</script>

<template>
  <Navbar />
  <ModelDesk :productRef="productContainerRef" :collectionRef="collectionContainerRef" :pinSpaceRef="pinSpaceRef" />
  <div class="container">
    <BannerContainer />
    <ProductContainer @sendProductRef="handleSendProductRef" />
    <div class="pinSpace"></div>
    <div class="pinSpace" ref="pinSpaceRef"></div>
    <CollectionContainer @sendCollectionRef="handleSendCollectionRef" />
  </div>
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
  .pinSpace{
    width: 100%;
    height: 100vh;
    background-color: transparent;
  }
}
</style>
