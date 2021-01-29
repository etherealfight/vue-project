<template>
  <div class="learnDetail">
    <div class="learnDetailt"><span> 学习平台</span></div>
    <i class="el-icon-back" @click="back"></i>
    <div class="learnDetailTitle">
      <img :src="userimg" class="learnDetailUserImg" />
      <div class="nameBox">
        <div class="learnDetailName">{{ username }}</div>
        <div class="learnDetailDate">{{ date }}</div>
      </div>
    </div>
    <div class="learnDetailMain">
      <swiper :options="swiperOption" class="czp">
        <swiper-slide v-for="imgurl in fileaddress" :key="imgurl"
          ><img :src="imgurl"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <video-player
        class="video-player"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
      <v-touch @swiperight="swiperright" class="wrapper" ref="wrapper">
        <div class="learnDetailContext">
          {{ contentText }}
        </div>
      </v-touch>
    </div>
    <div class="learnDetailFooter">
      <div class="learnDetailmessage">
        <img src="../../../assets/lt_un.png" />
        <span>留言</span>
      </div>
      <el-button>接</el-button>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import 'video.js/dist/video-js.css'

export default {
  components: {
    swiper,
    swiperSlide,
  },
  mounted() {
    let mainHight = document.querySelector(".learnDetailMain").offsetHeight;
    let swiperHight = document.querySelector(".swiper-container").offsetHeight;
    let footerHight = document.querySelector(".learnDetailFooter").offsetHeight;
    let waperHight = mainHight - swiperHight - footerHight - 20;
    let wrapper = document.getElementsByClassName("wrapper");
    console.log(wrapper);
    console.log(waperHight);
    wrapper[0].style.height = waperHight + "px";
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
      playerOptions: {
        height: 400,
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: require("@/assets/test.mp4") // url地址
          }
        ],
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
      fileaddress: [
        "https://picsum.photos/460/360?random=1",
        "https://picsum.photos/460/360?random=2",
        "https://picsum.photos/460/360?random=3",
      ],
      contentText:
        "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
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
</script>

<style scoped>
video {
  width: 100vw;
  height: 50vh;
}
html {
  width: 100vw;
  height: 100vh;
}
.learnDetailMain .wrapper {
  width: 100vw;
  touch-action: pan-y !important;
}
.learnDetailMain .video-player{
    width: 100vw;
    padding: 2rem;
    box-sizing: border-box;
}
.vjs-big-play-button{
    height: 20rem !important;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 2%;
}
.learnDetail {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.learnDetailt {
  font-size: 2rem;
  position: absolute;
  width: 100vw;
  border-bottom: 1px solid rgb(244, 244, 244);
  top: 2%;
  padding-bottom: 1rem;
  box-sizing: border-box;
}
.learnDetailt span {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.learnDetail .learnDetailTitle {
  display: flex;
  padding: 6rem 0 1.5rem 1.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(244, 244, 244);
}
.learnDetail .learnDetailTitle .learnDetailUserImg {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}
.learnDetail .learnDetailTitle .nameBox {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.5rem;
  padding-left: 2rem;
  box-sizing: border-box;
}
.learnDetail .learnDetailMain {
  width: 100vw;
  height: 100%;
  padding: 1rem 0 6rem 0;
  overflow: scroll;
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
.learnDetailContext {
  padding: 2rem;
  display: -webkit-box;
  word-break: break-all;
}
.learnDetailFooter {
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
.learnDetailmessage img {
  width: 4rem;
  height: 4rem;
}
.learnDetailFooter .learnDetailmessage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.learnDetailFooter .el-button {
  height: 4rem;
}
</style>