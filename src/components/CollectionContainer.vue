<script setup >
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAnimeStore } from '../stores/counter';
const useAnime = useAnimeStore();
gsap.registerPlugin(ScrollTrigger);



const images = ref([
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
]);

const collectionRef = ref(null);

const emits = defineEmits();

let ctx;

onMounted(() => {
  const padMode = window.innerWidth > 768 ? true : false;
  emits('sendCollectionRef', collectionRef);
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: collectionRef.value,
      start: 'top top',
      end: `bottom bottom`,
      // markers: true,
      scrub: 1.5,
      pin: true,
      ease: 'Power1.inOut',
    },
  });
  ctx = gsap.context(() => {
    if (useAnime.isGsap) {
      t1.fromTo('.titleText',
        {
          opacity: 0,
          transform: 'scale(70%)',
        },
        {
          transform: 'scale(200%)',
          opacity: 1,
        }, 0
      )
      t1.fromTo('.contentText',
        {
          opacity: 0,
          transform: 'scale(70%)',
        },
        {
          transform: 'scale(150%)',
          opacity: 1,
        }, 0
      )
    } else if (padMode) {
      t1.fromTo('.titleText',
        {
          opacity: 0,
          transform: 'scale(70%)',
        },
        {
          transform: 'scale(200%)',
          opacity: 1,
        }, 0
      )
      t1.fromTo('.contentText',
        {
          opacity: 0,
          transform: 'scale(70%)',
        },
        {
          transform: 'scale(150%)',
          opacity: 1,
        }, 0
      )
    } else {
      t1.fromTo('.titleText',
        {
          opacity: 0,
          transform: 'scale(70%)',
        },
        {
          transform: 'scale(200%)',
          opacity: 1,
        }, 0
      )
      t1.fromTo('.contentText',
        {
          opacity: 0,
          transform: 'scale(70%)',
        },
        {
          transform: 'scale(100%)',
          opacity: 1,
        }, 0
      )
    }
    t1.fromTo('.imgBox',
      {
        opacity: 0,
        duration: 0.1,
      },
      {
        duration: 0.1,
        opacity: 1,
      }, 0
    )
    t1.fromTo('.imgBox',
      {
        transform: 'translate3d(-50%, -50%, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(-45deg)',
      },
      {
        transform: 'translate3d(-50%, -50%, 0) scale3d(3, 3, 1) rotateX(0) rotateY(0) rotateZ(155deg)',
      }, 0
    )
  });
})

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="collection" ref="collectionRef">
    <div class="collectTextArea">
      <p class="titleText">COLLECTION</p>
      <p class="contentText">Elevate Your Work, Elevate Your Health with Lift Desks !
        <span>Elevating work efficiency and fostering a more vibrant office environment have facilitated team
          collaboration and the fluidity of creativity.</span>
      </p>
    </div>
    <div class="imgBox">
      <div class="imgSet" v-for="image in images" :key="image"><img :src="image" alt="3dmodel"></div>
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

.collection {
  position: relative;
  width: 100%;
  height: 250vh;
  background-color: transparent;
  overflow: hidden;

  .collectTextArea {
    position: absolute;
    width: 40vw;
    height: 40vw;
    top: 50vh;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);

    @include phoneMode {
      width: 100vw;
    }

    .titleText {
      width: 100%;
      margin-bottom: 50px;
      text-align: center;
      font-size: 48px;
      font-weight: bold;
      color: #fbfbfb;
      opacity: 0;

      @include phoneMode {
        font-size: 24px;
      }
    }

    .contentText {
      width: 100%;
      text-align: center;
      left: 50%;
      display: flex;
      flex-direction: column;
      font-size: 28px;
      color: #fbfbfb8b;
      opacity: 0;

      @include phoneMode {
        font-size: 14px;
      }

      span {
        font-size: 16px;

        @include phoneMode {
          font-size: 12px;
        }
      }
    }
  }

  .imgBox {
    position: absolute;
    top: 50vh;
    left: 50%;
    width: 70vw;
    height: 70vw;
    transform-style: preserve-3d;
    will-change: transform, opacity;
    transform: translate3d(-50%, -50%, 0) scale(80%) rotateX(0) rotateY(0) rotateZ(-45deg);

    @include padMode {
      width: 100vw;
      height: 100vw;
    }

    .imgSet {
      position: absolute;
      width: 40%;
      height: 40%;
      border-radius: 20px;
      overflow: hidden;

      img {
        height: 100%;
      }
    }

    .imgSet:nth-child(1) {
      margin: 0 auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: auto;
      transform: translate3d(0, 0, 1000px) perspective(1000px) rotateX(-60deg) rotateY(0) rotateZ(-90deg);
    }

    .imgSet:nth-child(2) {
      margin: auto 0;
      top: 0;
      left: auto;
      right: 0;
      bottom: 0;
      transform: translate3d(0, 0, 1000px) perspective(1000px) rotateX(0) rotateY(-60deg) rotateZ(0);
    }

    .imgSet:nth-child(3) {
      margin: 0 auto;
      top: auto;
      left: 0;
      right: 0;
      bottom: 0;
      transform: translate3d(0, 0, 1000px) perspective(1000px) rotateX(60deg) rotateY(0) rotateZ(-90deg);
    }

    .imgSet:nth-child(4) {
      margin: auto 0;
      top: 0;
      left: 0;
      right: auto;
      bottom: 0;
      transform: translate3d(0, 0, 1000px) perspective(1000px) rotateX(0) rotateY(60deg) rotateZ(0);
    }
  }
}
</style>