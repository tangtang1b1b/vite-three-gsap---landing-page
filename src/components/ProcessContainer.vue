<script setup >
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const processImages = ref([
  'photos/1-1.jpg',
  'photos/1-2.jpg',
  'photos/1-3.jpg',
  'photos/1-4.jpg',
  'photos/1-5.jpg',
  'photos/1-6.jpg',
])
const processRef = ref(null);
const emits = defineEmits();
let ctx;

onMounted(() => {
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: processRef.value,
      start: 'top top',
      end: `bottom bottom`,
      // markers: true,
      scrub: true,
      pin: true,
    },
  });
  ctx = gsap.context(() => {
    t1.to('.lists', {
      x: `-65%`,
    })
  });
})

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="process" ref="processRef">
    <div class="titleWrap">
      <p>PROCESS</p>
    </div>
    <div class="imageWrap">
      <ul class="lists">
        <li class="list" v-for="(processImage,index) in processImages"><img :src="processImage" :alt="`process-${index}`"></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.process {
  position: relative;
  width: 100%;
  height: 400vw;
  background-color: #000;
  overflow: hidden;

  .titleWrap {
    width: 100%;
    height: 20vh;
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    align-items: center;

    p {
      font-size: 48px;
      color: #fff;
      font-weight: bold;
    }
  }

  .imageWrap {
    height: 80vh;
    width: 100%;
    margin: 0 auto;
    max-width: 1440px;
    padding: 20px 0;

    .lists {
      padding: 0;
      width: 300%;
      height: 100%;
      display: flex;
      list-style: none;

      .list {
        width: 50%;
        margin: 0 20px;
        border-radius: 30px;
        overflow: hidden;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>