<script setup>
import ModelDesk from '../components/ModelDesk.vue';
</script>

<template>
  <ModelDesk/>
  <div class="container">
    <div class="banner"></div>
    <div class="products"></div>
  </div>
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
</style>
