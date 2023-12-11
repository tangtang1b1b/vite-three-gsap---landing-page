<script setup >
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAnimeStore } from '../stores/counter';
const useAnime = useAnimeStore();
gsap.registerPlugin(ScrollTrigger);

const processImages = ref([
  'photos/1-1.jpg',
  'photos/1-2.jpg',
  'photos/1-3.jpg',
  'photos/1-4.jpg',
  'photos/1-5.jpg',
  'photos/1-6.jpg',
])
// const isGsap = window.innerWidth > 1024 ? true : false;
const processRef = ref(null);
const emits = defineEmits();
let ctx;
const padMode = window.innerWidth > 768 ? true : false;
onMounted(() => {
  if (padMode) {
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
        x: padMode ? `-${100 - 100 / 6}%` : `-${100 - 100 / 3}%`,
      })
    });
  }
})

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="process" ref="processRef"
    :style="{ height: useAnime.isGsap ? `${(processImages.length - 2) * 100}vw` : `calc(${processImages.length * 100}vw + 20vh)` }">
    <div class="titleWrap">
      <p>PROCESS</p>
    </div>
    <div class="imageWrap">
      <ul class="lists"
        :style="{ width: useAnime.isGsap ? `${50 * processImages.length}%` : padMode ? `${100 * processImages.length}%` : '100%' }">
        <li class="list" v-for="(processImage, index) in processImages"><img :src="processImage"
            :alt="`process-${index}`">
        </li>
      </ul>
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

.process {
  position: relative;
  width: 100%;
  height: 400vw;
  background-color: #000;
  overflow: hidden;

  @include phoneMode {
    height: 100%;
  }

  .titleWrap {
    width: 100%;
    height: 20vh;
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    align-items: center;

    @include padMode {
      padding-left: 20px;
    }

    @include phoneMode {
      padding-left: 20px;
    }

    p {
      font-size: 48px;
      color: #fff;
      font-weight: bold;

      @include phoneMode {
        font-size: 36px;
      }
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
      height: 100%;
      display: flex;
      list-style: none;

      @include phoneMode {
        width: 100%;
        display: block;
        height: unset;
      }

      .list {
        width: 50%;
        margin: 0 20px;
        border-radius: 30px;
        overflow: hidden;

        @include padMode {
          width: 100%;
        }

        @include phoneMode {
          padding: 20px;
          box-sizing: border-box;
          width: 100%;
          height: 100vw;
          margin: 0;
          border-radius: 0px;
        }

        img {
          width: 100%;
          @include padMode {
            border-radius: 30px;
          }
          @include phoneMode {
            border-radius: 30px;
          }
        }
      }
    }
  }
}</style>