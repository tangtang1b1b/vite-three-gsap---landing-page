<script setup >
import { ref, onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import gsap from 'gsap';
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
      gsap.to(wrapBox, {
        opacity: '0',
        scrollTrigger: {
          trigger: wrapBox,
          start: 'bottom center',
          end: `top 20%`,
          scrub: 1.3,
          ease: 'none',
          // markers: true,
        },
      });
    });
  });
})
</script>

<template>
  <div class="banner">
    <div class="sloganWrap">
      <div class="wrapBox">
        <p>Lift Desks<br>Elevate Your <span>Work</span> and <span>Health</span> !</p>
      </div>
      <div class="wrapBox">
        <p>Elevating work efficiency and fostering a more vibrant office environment <br>have facilitated team
          collaboration and the fluidity of creativity.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  text-align: center;
  width: 100%;
  max-width: 1440px;
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
      p{
        span{
          color: #a1c276;
          font-weight: bold;
        }
      }
    }

    .wrapBox:nth-child(1) {
      color: #333;

      p {
        font-weight: bold;
        font-size: 48px;
        transform: translateY(100%);
      }
    }

    .wrapBox:nth-child(2) {
      color: #333;

      p {
        font-size: 18px;
        transform: translateY(100%);
      }
    }
  }
}
</style>