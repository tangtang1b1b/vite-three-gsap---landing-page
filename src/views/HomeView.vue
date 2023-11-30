<script setup>
import { ref, onMounted } from 'vue';
import ModelDesk from '../components/ModelDesk.vue';
import BannerContainer from '../components/BannerContainer.vue';
import ProductContainer from '../components/ProductContainer.vue';
import Navbar from '../components/Navbar.vue';

const productContainerRef = ref(null);
const handleSendProductRef = (ref) => {
  productContainerRef.value = ref;
};

onMounted(() => {

})
</script>

<template>
  <Navbar />
  <ModelDesk :productRef="productContainerRef"/>
  <div class="container">
    <BannerContainer />
    <ProductContainer @sendProductRef="handleSendProductRef" />
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
}
</style>
