<script setup >
import { ref, onMounted, onUnmounted } from 'vue';
import { useAnimeStore } from '../stores/counter';
const useAnime = useAnimeStore();

const handleTouch = (e) => { 
  e.preventDefault();
}
</script>

<template>
  <div class="mask" v-if="!useAnime.isReady" @touchstart="handleTouch">
    <p>模型載入中</p>
    <div class="svgWrap">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: transparent; display: block; shape-rendering: auto;" width="222px" height="222px"
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="84" cy="50" r="10" fill="#d8dddf">
          <animate attributeName="r" repeatCount="indefinite" dur="0.4464285714285714s" calcMode="spline" keyTimes="0;1"
            values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
          <animate attributeName="fill" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1" values="#d8dddf;#b8babd;#d8dddf;#b8babd;#d8dddf" begin="0s"></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#d8dddf">
          <animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
          <animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
        </circle>
        <circle cx="50" cy="50" r="10" fill="#b8babd">
          <animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.4464285714285714s"></animate>
          <animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.4464285714285714s"></animate>
        </circle>
        <circle cx="84" cy="50" r="10" fill="#d8dddf">
          <animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8928571428571428s"></animate>
          <animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8928571428571428s"></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#b8babd">
          <animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.3392857142857142s"></animate>
          <animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.3392857142857142s"></animate>
        </circle>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 100;

  p {
    width: 50%;
    font-size: 36px;
    display: flex;
    justify-content: center;
  }

  .svgWrap {
    display: flex;
    justify-content: center;
    width: 50%;

    svg {
      margin: 0;
    }
  }
}
</style>