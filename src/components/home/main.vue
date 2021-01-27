<template>
  <div class="wrapper">
    <div class="content">
      <div class="mainPage">
        <my-navbar></my-navbar>

        <div class="block">
          <swiper :options="swiperOption" class="czp">
            <swiper-slide v-for="item in 4" :key="item"
              ><newsimg :num="item"></newsimg
            ></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <newslist class="newslist" :newsData="newsData"></newslist>
      </div>
    </div>
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
import BScroll from "better-scroll";

export default {
  components: {
    "my-navbar": my_navbar,
    "my-tabbar": my_tabbar,
    newsimg: newsImg,
    newslist: newsList,
    swiper,
    swiperSlide,
  },
  mounted() {
    this.loadData();
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
    swiperright() {
      console.log("r");
      prev();
    },
    swiperleft() {
      console.log("l");
      next();
    },
    loadData() {
      this.$nextTick(() => {
        const wrapper = document.querySelector(".wrapper");
        this.scroll = new BScroll(wrapper, {
          pullUpLoad: true,
          pullUpLoad: {
            threshold: -30, // 当上拉距离超过30px时触发 pullingUp 事件
          },
        });
        console.log(this.scroll);
        this.scroll.on("pullingUp", () => {
          console.log("jz");
          this.scroll.finishPullUp();
        });
      });
    },
  },
};
</script>

<style scoped>
.mainPage {
  width: 100vw;
}
.wrapper {
  position: absolute;
  height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
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