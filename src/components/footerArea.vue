<script setup >

</script>

<template>
  <footer class="footerWrap">
    <div class="mainWrap">
      <div class="slogan">
        <p>Elevate Your Work, <br>Elevate Your Health <br>with <br>Lift Desks ! </p>
      </div>
      <div class="tagArea">
        <div class="subscribe">
          <p>subscribe to mine products</p>
          <div class="typeArea">
            <input type="email" placeholder="name@mail.com" class="mail">
            <div class="send">subscribe</div>
          </div>
        </div>
        <ul class="tags">
          <li>ABOUT</li>
          <li>COLLECTIONS</li>
          <li>PROCESS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
    <div class="contectWrap">
      <ul>
        <li><p>0912858721</p></li>
        <li><a href="https://github.com/tangtang1b1b" target="_blank">github</a></li>
        <li><a href="https://www.linkedin.com/in/tsai-chun-kao-734690242/" target="_blank">linkedin</a></li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footerWrap {
  width: 100%;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
  .mainWrap{
    width: 100%;
    height: 90%;
    display: flex;
    padding: 50px;
    box-sizing: border-box;
    .slogan{
      padding: 50px;
      width: 50%;
      p{
        padding: 50px;
        font-size: 48px;
        color: #fff;
      }
    }
    .tagArea{
      padding: 50px;
      width: 50%;
      .subscribe{
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        p{
          font-size: 24px;
          color: #fff;
        }
        .typeArea{
          width: 50%;
          display: flex;
          .mail{
            width: 50%;
            padding-left: 10px;
            background-color: #333;
            border: none;
            color: #fff;
            &:focus-visible{
              outline: none;
            }
          }
          .send{
            cursor: pointer;
            width: 50%;
            background-color: #f7f7f7;
            padding: 10px 0px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
      .tags{
        width: 100%;
        height: 70%;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        li{
          cursor: pointer;
          font-size: 24px;
          color: #aaa;
          transition: 0.3s;
          &:hover{
            color: #fff;
          }
        }
      }
    }
  }
  .contectWrap{
    width: 100%;
    height: 10%;
    ul{
      list-style: none;
      padding: 0px 50px;
      display: flex;
      justify-content: space-evenly;
      li{
        color: #aaa;
        font-size: 16px;
        font-weight: bold;
        a{
          color: #aaa;
          text-decoration: none;
        }
      }
    }
  }
}
</style>