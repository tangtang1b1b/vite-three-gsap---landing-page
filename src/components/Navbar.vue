<script setup>

</script>

<template>
  <nav class="navContainer">
    <div class="logoWrap">LOGO</div>
    <div class="tagWrap">
      <ul class="tagLists">
        <li class="tagList"><p>ABOUT</p></li>
        <li class="tagList"><p>COLLECTIONS</p></li>
        <li class="tagList"><p>PROCESS</p></li>
        <li class="tagList"><p>CONTACT</p></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navContainer {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fbfbfb;
  // background-color: transparent;
  z-index: 99;

  .logoWrap {
    cursor: pointer;
    width: 50%;
    height: 100%;
    padding: 0 40px;
    font-size: 36px;
    font-weight: bold;
  }

  .tagWrap {
    width: 50%;
    .tagLists {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-evenly;
      align-items: center;
      list-style: none;
      padding: 0;
      box-sizing: border-box;

      .tagList {
        cursor: pointer;
        padding: 20px 20px;
        p{
          position: relative;
          font-size: 18px;
          font-weight: bold;
          transition: 0.3s;
          user-select: none;
          &::after {
            content: '';
            width: 0%;
            height: 1.5px;
            background-color: rgba(173, 202, 136, 0.7);
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
          color: #a1c276;
        }

      }
    }
  }
}</style>