<script setup >
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const productRef = ref(null);
const contentRef = ref(null);
const deskImg = ref(null);
const show = ref(false);
const emits = defineEmits();
let ctx;

const mousePosition = ref({ pagex: '', pagey: '' });
const mouseSet = (e) => {
  mousePosition.value.pagex = e.screenX;
  mousePosition.value.pagey = e.screenY;
}
const mouseControlIn = (e) => {
  show.value = true;
  window.addEventListener('mousemove', mouseSet)
}
const mouseControlOut = (e) => {
  show.value = false;
  window.removeEventListener('mousemove', mouseSet)
}

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

onUnmounted(() => {
  ctx.revert();
});
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
      <div class="titleMouse"
        :style="{ transition: 'opacity 0.1s', opacity: show ? 1 : 0, top: `${mousePosition.pagey}px`, left: `${mousePosition.pagex}px`, transform: 'translate(50%,-50%)' }">
        ABOUT</div>
      <img src="../assets/images/desk1.jpg" alt="desk" @mousemove="mouseControlIn" @mouseleave="mouseControlOut"
        ref="deskImg">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin padMode {
  @media (max-width: 1024px) {
    @content
  }
}
@mixin phoneMode {
  @media (max-width: 768px) {
    @content
  }
}
.products {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;

  .titleMouse {
    position: absolute;
    z-index: 100;
    color: #fff;
    font-size: 54px;
    font-weight: bold;
    pointer-events: none;
    text-shadow: 0 0 5px rgba(173, 202, 136, 1), 0 0 10px rgba(173, 202, 136, 1), 0 0 15px rgba(173, 202, 136, 1), 0 0 40px #ff00de, 0 0 70px #ff00de;
  }

  .title {
    position: absolute;
    width: 25%;
    z-index: 5;
    right: 0;
    transform: translate(-5%, 50%);
    overflow: hidden;
    pointer-events: none;

    p {
      color: #fff;
      font-size: 48px;
      font-weight: bold;

      @include padMode {
        font-size: 36px;
      }
    }
  }

  .title:nth-child(1) {
    left: 50%;

    @include padMode {
      width: 50%;
    }
    @include phoneMode {
      width: 80%;
      transform: translate(-50%, 5%);
    }

    p {
      @include phoneMode {
        display: flex;
        justify-content: center;
      }
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
    pointer-events: none;

    @include phoneMode {
      display: flex;
      justify-content: center;
      width: 80%;
      left: 50%;
      transform: translate(-50%, -5%);
    }

    p {
      color: #fff;
      font-size: 16px;

      @include phoneMode {
        display: flex;
        justify-content: center;
        font-size: 14px;
      }
    }
  }

  .imgWrap {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    @include padMode {
      height: unset;
      justify-content: center;
    }

    img {
      cursor: pointer;
      clip-path: polygon(0% 0, 100% 0, 100% 100%, 15% 100%, 0 85%, 0 20%);
      height: 95%;

      @include padMode {
        clip-path: none;
        height: 100vh;
      }
    }
  }
}
</style>