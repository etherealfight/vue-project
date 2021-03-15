<!--
* @FileDescription:学习资源视频播放页面
-->
<template>
  <div class="videoBox">
    <div class="video">
      <i class="el-icon-back" @click="back"></i>
      <video-player
        class="video-player"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </div>
    <div class="videoList">
      <span class="title">{{ $route.query.title }}</span>
      <ol>
        <li
          v-for="(item, index) in videoList"
          :key="item.id"
          @click="toVideoPage(index)"
        >
          <div class="itembox">
            <span>{{ videoName[index] }}</span>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
export default {
  data() {
    return {
      videoName: this.$route.query.videoName,
      videoList: JSON.parse(this.$route.query.videoList),
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
            type: "video/mp4",
            src: "",
          },
        ],
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, // 全屏按钮
        },
      },
    };
  },
  mounted() {
    console.log(this.videoList);
    let myPlayer = this.$refs.videoPlayer.player;
    myPlayer.src(this.videoList[this.$route.query.index]);
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    toVideoPage(index) {
      let myPlayer = this.$refs.videoPlayer.player;
      myPlayer.src(this.videoList[index]);
    },
    download() {},
  },
};
</script>

<style scoped>
.video {
  display: flex;
  flex-direction: column;
}
.el-icon-back {
  color: white;
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 2%;
  z-index: 5;
}
.video-player {
  width: 100vw;
}
.videoList .title {
  font-size: 2rem;
}
.videoList {
  padding: 1rem 2rem 1rem 2rem;
  box-sizing: border-box;
}
.videoList ol {
  padding: 1rem 2rem;
  margin-left: 1.5rem;
}
.videoList ol li {
  margin-left: -0.5rem;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
}
.itembox {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>