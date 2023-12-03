<script setup >
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const productRef = ref(null);
const contentRef = ref(null);
const emits = defineEmits();
let ctx;

onMounted(() => {
  emits('sendProductRef', productRef);
  const titles = document.querySelectorAll('.title p');

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: productRef.value,
        start: 'top top',
        end: `+=300% bottom`,
        // markers: true,
        scrub: 1.5,
        pin: true,
      },
    })
    tl.set(titles, { yPercent: 100, opacity: 0, })
    tl.to(titles[0], {
      yPercent: 0,
      opacity: 1,
    });
    tl.to(titles[1], {
      yPercent: 0,
      opacity: 1,
    }, '>');
    tl.to(productRef.value, {
      xPercent: 50,
      opacity: 0,
    }, '>');
  });
})
</script>

<template>
  <div class="products" ref="productRef">
    <div class="title">
      <p ref="contentRef">Why did the lifting desk emerge</p>
    </div>
    <div class="title">
      <p>Originally designed to address the adverse effects of extended periods of sitting on physical well-being, the
        standing desk provides a solution for office workers to effortlessly transition between sitting and standing
        positions. Studies have linked prolonged sitting to various health issues, including back pain, neck tension, and
        obesity, making the height-adjustable desk a valuable addition to the modern workspace.</p>
    </div>
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

  .title {
    position: absolute;
    width: 25%;
    z-index: 5;
    right: 0;
    transform: translate(-5%, 50%);
    overflow: hidden;

    p {
      color: #fbfbfb;
      font-size: 48px;
      font-weight: bold;
    }
  }

  .title:nth-child(2) {
    position: absolute;
    width: 25%;
    z-index: 5;
    right: 0;
    bottom: 0;
    transform: translate(-5%, -50%);
    overflow: hidden;

    p {
      color: #fbfbfb;
      font-size: 16px;
    }
  }

  .imgWrap {
    filter: blur(2px);
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;

    img {
      cursor: pointer;
      clip-path: polygon(0% 0, 100% 0, 100% 100%, 15% 100%, 0 85%, 0 20%);
      height: 95%;
    }
  }
}
</style>