<template>
  <div class="newsdetail">
    <i class="el-icon-back" @click="back"></i>
    <div class="newsdetailheader">
      <h2 class="newsdetailtitle">{{ title }}</h2>
    </div>
    <div class="newsDetailMiddle">
      <div class="newsdetailAuthor">{{ author }}</div>
      <div class="newsdetailDate">{{ date }}</div>
    </div>
    <div class="newsDetailMain">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="imgurl" v-for="imgurl in imgUrls">
            <img :src="imgurl" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <v-touch @swiperight="swiperright" class="wrapper" ref="wrapper">
        <div class="newsContext">
          {{ context }}
        </div>
      </v-touch>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
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
    let mainHeight=document.querySelector(".newsDetailMain").offsetHeight;
    let swiperHeight=document.querySelector(".swiper-container").offsetHeight;
    let wrapperHeight=mainHeight-swiperHeight;
    let wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].style.height = wrapperHeight + "px";
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        // ...
      },
      title: "这是一个大新闻",
      author: "cccc",
      date: "2021-01-16",
      imgUrls: [
        "https://picsum.photos/460/360?random=1",
        "https://picsum.photos/460/360?random=2",
        "https://picsum.photos/460/360?random=3",
      ],
      context:
        "ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
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
</script>

<style scoped>
html {
  width: 100vw;
  height: 100vh;
}
.newsdetailtitle {
  font-size: 2rem;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 3%;
}
.newsdetail {
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
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
.newsDetailMiddle {
  padding: 2rem 0 2rem 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  border-bottom: lightgrey 1px solid;
  font-size: 1.5rem;
  box-sizing: border-box;
}
.newsDetailMain {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
  box-sizing: border-box;
}
.newsContext {
  width: 100vw;
  padding: 2rem;
  box-sizing: border-box;
  word-wrap: break-word;
}
</style>