<template>
  <div class="rewardDetail">
    <div class="rewardDetailt"><span> 悬赏详情</span></div>
    <i class="el-icon-back" @click="back"></i>
    <div class="rewardDetailTitle">
      <img :src="userimg" class="rewardDetailUserImg" />
      <div class="nameBox">
        <div class="rewardDetailName">{{ username }}</div>
        <div class="rewardDetailDate">{{ date }}</div>
      </div>
    </div>
    <div class="rewardDetailMain">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="imgurl" v-for="imgurl in fileaddress">
            <img :src="imgurl" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <v-touch @swiperight="swiperright" class="wrapper">
        <div class="rewardDetailContext">
          {{ contentText }}
        </div>
      </v-touch>
    </div>
    <div class="rewardDetailFooter">
      <div class="rewardDetailmessage">
        <img src="../../../assets/lt_un.png" />
        <span>留言</span>
      </div>
      <el-button>接</el-button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
function set() {
  let mainHight = document.querySelector(".rewardDetailMain");
  let swiperHight = document.querySelector(".swiper-container");
  console.log(window.getComputedStyle(mainHight).height);
  console.log(window.getComputedStyle(swiperHight).height);
  let waperHight =
    window.getComputedStyle(mainHight).height -
    getComputedStyle(swiperHight).height;
  let wrapper = document.getElementsByClassName("wrapper");
  console.log(wrapper);
}
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  mounted() {
    this.mySwiper.slideTo(3, 1000, false);
    set();
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        // ...
      },
      fileaddress: [
        "https://picsum.photos/360/460?random=1",
        "https://picsum.photos/360/460?random=2",
        "https://picsum.photos/360/460?random=3",
      ],
      contentText: "ccccccccccccccc",
      date: "2021-01-25",
      id: 0,
      username: "aaa",
      userimg:
        "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
      clicks: 0,
    };
  },

  methods: {
    back() {
      this.$router.back(-1);
    },
    swiperright() {
      this.$router.back(-1);
    },
  },
};
function setWaper() {
  let mainHght = document.querySelector(".rewardDetailMain");
  console.log(mainHght);
}
</script>

<style scoped>
html {
  width: 100vw;
  height: 100vh;
}
.wrapper {
  width: 100vw;
  touch-action: pan-y !important;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 2%;
}
.rewardDetail {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.rewardDetailt {
  font-size: 2rem;
  position: absolute;
  width: 100vw;
  border-bottom: 1px solid rgb(244, 244, 244);
  top: 2%;
  padding-bottom: 1rem;
  box-sizing: border-box;
}
.rewardDetailt span {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.rewardDetail .rewardDetailTitle {
  display: flex;
  padding: 6rem 0 1.5rem 1.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(244, 244, 244);
}
.rewardDetail .rewardDetailTitle .rewardDetailUserImg {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
}
.rewardDetail .rewardDetailTitle .nameBox {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.5rem;
  padding-left: 2rem;
  box-sizing: border-box;
}
.rewardDetail .rewardDetailMain {
  width: 100vw;
  height: 100%;
  padding: 1rem 0 6rem 0;
  overflow: scroll;
}
.swiper-container {
  width: 30rem;
  height: 15rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
}
.swiper-slide img {
  width: 30rem;
  height: 15rem;
}
.rewardDetailContext {
  padding: 2rem;
  display: -webkit-box;
  word-break: break-all;
}
.rewardDetailFooter {
  width: 100vw;
  padding: 0 2rem 0 2rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-top: 1px solid rgb(244, 244, 244);
  bottom: 0%;
  box-sizing: border-box;
}
.rewardDetailmessage img {
  width: 4rem;
  height: 4rem;
}
.rewardDetailFooter .rewardDetailmessage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rewardDetailFooter .el-button {
  height: 4rem;
}
</style>