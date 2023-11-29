<script setup >
import { ref, onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import gsap from 'gsap';
let ctx;

const productRef = ref(null);
const emits = defineEmits();

onMounted(() => {
  emits('sendProductRef', productRef);
})
</script>

<template>
  <div class="products" ref="productRef"></div>
</template>

<style lang="scss" scoped>
.products {
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
}
</style>