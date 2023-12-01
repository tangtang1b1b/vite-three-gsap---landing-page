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
  <div class="products" ref="productRef">
    <div class="imgWrap">
      <img src="../assets/images/desk1.jpg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  opacity: 0;
  // transform: translateY(200px);
  .imgWrap{
    filter: drop-shadow(-15px 10px 0px rgba(173, 202, 136, 0.7));
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    img{
      cursor: pointer;
      clip-path: polygon(0% 0, 100% 0, 100% 100%, 15% 100%, 0 85%, 0 20%);
      height: 100%;
      transition: 0.2s;
    }
  }
}
</style>