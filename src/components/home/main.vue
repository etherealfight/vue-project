<template>
  <div class="mainPage">
    <my-navbar></my-navbar>
    <div class="block">
     <swiper :options="swiperOption" class="czp">
        <swiper-slide v-for="item in 4" :key="item"
          ><newsimg></newsimg></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <newslist class="newslist" :newsData="newsData"></newslist>
    <div class="mainFooter">
      <my-tabbar class="tabbar" activeIndex="1"></my-tabbar>
    </div>
  </div>
</template>

<script>
import my_navbar from "./my_navbar";
import my_tabbar from "./my_tabbar";
import newsImg from "../news/newsImg";
import newsList from "../news/newsList";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    "my-navbar": my_navbar,
    "my-tabbar": my_tabbar,
    newsimg: newsImg,
    newslist: newsList,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      // newsData:{}
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }, // 可选选项，自动滑动
      },
    };
  },
  methods: {
    move() {
      window.open("https://www.baidu.com", "_blank");
    },
    swiperright() {
      console.log("r");
      prev();
    },
    swiperleft() {
      console.log("l");
      next();
    },
  },
};
</script>

<style scoped>
.mainPage {
  width: 100vw;
  height: 100vh;
}
.block {
  padding: 2rem;
}
.swiper-container {
  border-radius: 0.5rem;
}
.newslist {
  padding-bottom: 4rem;
}
.tabbar {
  position: fixed;
  bottom: 0;
}
</style>