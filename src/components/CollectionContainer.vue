<script setup >
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const collectionRef = ref(null);
const emits = defineEmits();

onMounted(() => {
  emits('sendCollectionRef', collectionRef);
  
})
</script>

<template>
  <div class="collection" ref="collectionRef">
    <div class="imgWrap">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collection {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  // background-color: transparent;

  .imgWrap {
    filter: drop-shadow(-15px 10px 0px rgba(173, 202, 136, 0.7));
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
      cursor: pointer;
      clip-path: polygon(0% 0, 100% 0, 100% 100%, 15% 100%, 0 85%, 0 20%);
      height: 100%;
      transition: 0.2s;
    }
  }
}
</style>