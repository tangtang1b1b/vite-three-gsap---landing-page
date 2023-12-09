<script setup>
import { ref, watch } from 'vue';

const navContainerRef = ref(null);
const closeClass = ref(null);
const isClick = ref(false);

watch(navContainerRef, () => {
  window.addEventListener('scroll', function (e) {
    closeClass.value = window.scrollY > 0;
  });
});
</script>

<template>
  <nav class="navContainer" :class="{ 'close': closeClass }" ref="navContainerRef">
    <div class="logoWrap">DeSK<span>-</span>-</div>
    <div class="hamberWrap" @click="isClick = !isClick" :class="{ 'padMode': isClick }"><span
        class="material-symbols-outlined">more_down</span></div>
    <div class="tagWrap">
      <ul class="tagLists" :class="{ 'padMode': isClick }">
        <li class="tagList" :class="{ 'padMode': isClick }">
          <p>ABOUT</p>
        </li>
        <li class="tagList" :class="{ 'padMode': isClick }">
          <p>COLLECTIONS</p>
        </li>
        <li class="tagList" :class="{ 'padMode': isClick }">
          <p>PROCESS</p>
        </li>
        <li class="tagList" :class="{ 'padMode': isClick }">
          <p>CONTACT</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

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
.navContainer {
  position: fixed;
  width: 100%;
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  background-color: #fbfbfb;
  z-index: 99;
  top: 0;
  transition: 0.3s;

  .hamberWrap.padMode {
    background-color: #E59A58;
    box-shadow: 0px 0px 5px rgba(229, 154, 88, 0.5);
    color: #fff;
    transform: rotate(0deg);
  }

  .hamberWrap {
    display: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    border-radius: 100%;
    padding: 10px;
    color: #000;
    transition: 0.3s;
    transform: rotate(-45deg);
    margin-right: 20px;

    @include padMode {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    span {
      font-size: 36px;

      @include phoneMode {
        font-size: 18px;
      }
    }
  }

  .logoWrap {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 50%;
    height: 100%;
    padding: 0 0 0 40px;
    font-size: 36px;
    font-weight: bold;

    @include phoneMode {
      font-size: 24px;
      padding: 0 0 0 20px;
    }

    span {
      font-weight: bold;
      color: #E59A58;
    }
  }

  .tagWrap {
    display: flex;
    align-self: start;
    width: 50%;

    @include padMode {
      position: absolute;
      top: 100%;
      width: 100%;
    }

    .tagLists.padMode {
      height: 100%;
    }

    .tagLists {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-evenly;
      align-items: center;
      list-style: none;
      padding: 0;
      box-sizing: border-box;

      @include padMode {
        flex-direction: column;
        align-items: flex-end;
        height: 100%;
      }

      .tagList {
        cursor: pointer;
        padding: 20px;

        @include padMode {
          text-align: right;
          background-color: #E59A58;
          width: 0;
          padding: 0;
        }

        p {
          position: relative;
          font-size: 18px;
          font-weight: bold;
          transition: 0.3s;
          user-select: none;

          @include padMode {
            font-size: 24px;
            color: #fff;
          }

          &::after {
            content: '';
            width: 0%;
            height: 1.5px;
            background-color: #E59A58;
            position: absolute;
            left: 50%;
            bottom: 10%;
            transition: 0.3s;
          }
        }

        &:hover p::after {
          width: 100%;
          left: 0%;
        }

        &:hover {
          color: #E59A58;
        }

      }

      $tagListCount: 4;

      @for $i from 1 through $tagListCount {
        .tagList:nth-child(#{$i}) {
          @include padMode {
            transition: 0.3s #{$i*0.1}s;
            text-align: center;
          }
        }

        .tagList.padMode:nth-child(#{$i}) {
          @include padMode {
            width: calc(#{$i} * 20vw + 10vw);
            padding: 40px 0px;
          }
        }
      }
    }
  }
}

.navContainer.close {
  transform: translateY(-100%);
}
</style>