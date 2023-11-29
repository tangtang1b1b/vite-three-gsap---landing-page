<script setup>
import ModelDesk from '../components/ModelDesk.vue';
import BannerContainer from '../components/BannerContainer.vue';
import Navbar from '../components/Navbar.vue';

</script>

<template>
  <Navbar />
  <ModelDesk />
  <div class="container">
    <BannerContainer />
    <div class="products" ref="productRef"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .products {
    width: 100%;
    height: 100vh;
    background-color: #fbfbfb;
  }
}
</style>
