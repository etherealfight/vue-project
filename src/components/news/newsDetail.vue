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
      <swiper :options="swiperOption" class="czp">
        <swiper-slide v-for="imgurl in imgUrls" :key="imgurl"
          ><img :src="imgurl"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <v-touch @swiperight="swiperright" class="wrapper" ref="wrapper">
        <div class="newsContext">
          {{ context }}
        </div>
      </v-touch>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { toNewsDetail } from "../../api";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  async created() {
    const res = await toNewsDetail(this.$route.query.id);
    console.log(res);
    this.id = res.newsid;
    this.title = res.newstitle;
    this.author = res.author;
    this.context = res.newsinfo;
    this.imgUrls = res.newsimages;
    this.date = res.newstime;
  },
  mounted() {
    let mainHeight = document.querySelector(".newsDetailMain").offsetHeight;
    let swiperHeight = document.querySelector(".swiper-container").offsetHeight;
    let wrapperHeight = mainHeight - swiperHeight;
    let wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].style.height = wrapperHeight + "px";
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }, // 可选选项，自动滑动
      },
      id: 0,
      title: "这是一个大新闻",
      author: "cccc",
      date: "2021-01-16",
      imgUrls: [
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