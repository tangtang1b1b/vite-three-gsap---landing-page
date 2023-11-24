<script setup>
import { ref } from 'vue';
import ModelDesk from '../components/ModelDesk.vue';
import Navbar from '../components/Navbar.vue';
const bannerRef = ref(null);
const productRef = ref(null);
</script>

<template>
  <Navbar/>
  <ModelDesk :bannerRef="bannerRef" :productRef="productRef" />
  <div class="container">
    <div class="banner" ref="bannerRef"></div>
    <div class="products" ref="productRef"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .banner {
    text-align: center;
    width: 100%;
    height: 100vh;
    background-color: #fbfbfb;
  }

  .products {
    width: 100%;
    height: 100vh;
  }
}
</style>
