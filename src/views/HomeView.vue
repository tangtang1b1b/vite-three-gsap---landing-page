<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ModelDesk from '../components/ModelDesk.vue';
import Navbar from '../components/Navbar.vue';
const bannerRef = ref(null);
const productRef = ref(null);
let ctx;

onMounted(() => {

  ctx = gsap.context(() => {
    const wrapBoxs = document.querySelectorAll('.wrapBox p');
    wrapBoxs.forEach((wrapBox, index) => {
      gsap.to(wrapBox, {
        duration: 0.5,
        delay: index * 0.3,
        y: 0,
      });
    });
  });
})
</script>

<template>
  <Navbar />
  <ModelDesk :bannerRef="bannerRef" :productRef="productRef" />
  <div class="container">
    <div class="banner" ref="bannerRef">
      <div class="sloganWrap">
        <div class="wrapBox">
          <p>Lift Desks<br>Elevate Your Work and Health !</p>
        </div>
        <div class="wrapBox">
          <p>Elevating work efficiency and fostering a more vibrant office environment <br>have facilitated team
            collaboration and the fluidity of creativity.</p>
        </div>
      </div>
    </div>
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

  .banner {
    text-align: center;
    width: 100%;
    height: 100vh;
    background-color: #fbfbfb;

    .sloganWrap {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      padding: 50px 40px;

      .wrapBox {
        width: fit-content;
        overflow: hidden;
      }

      .wrapBox:nth-child(1) {

        // background-color: #ebcc9e;
        // color: #fbfbfb;
        color: #333;

        p {
          font-weight: bold;
          font-size: 48px;
          transform: translateY(100%);
        }
      }

      .wrapBox:nth-child(2) {

        // background-color: #ebcc9e;
        // width: fit-content;
        // color: #fbfbfb;
        color: #333;

        p {
          font-size: 18px;
          transform: translateY(100%);
        }
      }
    }
  }

  .products {
    width: 100%;
    height: 100vh;
  }
}
</style>
