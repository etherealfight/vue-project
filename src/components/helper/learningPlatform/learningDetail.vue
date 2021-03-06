<template>
  <div class="bswrapper">
    <div class="content">
      <div class="learnDetail">
        <div class="learnDetailt"><span> 学习平台</span></div>
        <i class="el-icon-back" @click="back"></i>
        <div class="learnDetailTitle" @click="toPersonalPage">
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
          <!-- <video-player
            class="video-player"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player> -->
          <v-touch @swiperight="swiperright" class="wrapper" ref="wrapper">
            <div class="learnDetailContext">
              {{ contentText }}
            </div>
            <div class="videoList">
              <h2 class="videoTitle">课程视频</h2>
              <ol>
                <li
                  v-for="item in videoList"
                  :key="item.id"
                  @click="toVideoPage(item.id)"
                >
                  <div class="itembox">
                    <span>{{ item.videoName }}</span>
                    <i class="el-icon-download" @click="download"></i>
                  </div>
                </li>
              </ol>
            </div>
            <div class="fileList">
              <h2 class="fileTitle">课程资源</h2>
              <ol>
                <li
                  v-for="item in fileList"
                  :key="item.id"
                  @click="dowmloadFile"
                >
                  <div class="itembox">
                    <span> {{ item.fileName }}</span>
                    <i class="el-icon-download" @click="download"></i>
                  </div>
                </li>
              </ol>
            </div>
            <div class="commentBox">
              <div class="commentTitle">
                <span>评论</span>
              </div>
              <div class="commentMain">
                <commentList></commentList>
              </div>
              <div class="newComment">
                <textarea
                  id="newComment"
                  cols="30"
                  rows="1"
                  placeholder="说些啥吧"
                ></textarea>
                <el-button>发表</el-button>
              </div>
            </div>
          </v-touch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "video.js/dist/video-js.css";
import commentList from "./commentList";
import BScroll from "better-scroll";
import { toStudyDetail } from "../../../api";

export default {
  async created() {
    console.log("id:", this.$route.query.learningid);
    console.log("hits", this.$route.query.hits);
    const res = await toStudyDetail(
      this.$route.query.learningid,
      this.$route.query.hits
    );
    console.log("init:", res);
    this.fileaddress = res.images;
    this.username = res.username;
    this.userimg = res.headportrait;
    this.id = res.commentid;
    this.userid = res.userid;
    this.clicks = res.rewardhits;
  },
  components: {
    swiper,
    swiperSlide,
    commentList,
  },
  mounted() {
    this.loadData();
    let mainHight = document.querySelector(".learnDetailMain").offsetHeight;
    let swiperHight = document.querySelector(".swiper-container").offsetHeight;
    let waperHight = mainHight - swiperHight - 20;
    let wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].style.height = waperHight + "px";

    let bodyHeight = document.documentElement.scrollHeight;
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
      videoList: [
        {
          id: 1,
          address: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
          videoName: "111111",
        },
        {
          id: 2,
          address: "http://vjs.zencdn.net/v/oceans.mp4",
          videoName: "222222",
        },
        {
          id: 3,
          address: "https://media.w3.org/2010/05/sintel/trailer.mp4",
          videoName: "333333",
        },
      ],
      fileList: [
        { id: 1, address: "../../../assets/test.mp4", fileName: "111111" },
        { id: 2, address: "../../../assets/test.mp4", fileName: "222222" },
        { id: 3, address: "../../../assets/test.mp4", fileName: "333333" },
      ],
      // playerOptions: {
      //   height: 400,
      //   playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
      //   autoplay: false, // 如果true,浏览器准备好时开始回放。
      //   muted: false, // 默认情况下将会消除任何音频。
      //   loop: false, // 导致视频一结束就重新开始。
      //   preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
      //   language: "zh-CN",
      //   aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
      //   fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
      //   sources: [
      //     {
      //       type: "video/mp4",
      //       src: require("@/assets/test.mp4"),
      //     },
      //   ],
      //   // width: document.documentElement.clientWidth, //播放器宽度
      //   notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      //   controlBar: {
      //     timeDivider: true,
      //     durationDisplay: true,
      //     remainingTimeDisplay: false,
      //     fullscreenToggle: true, // 全屏按钮
      //   },
      // },
      title: "test",
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
      userid: 0,
      userimg:
        "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
      clicks: 0,
    };
  },

  methods: {
    toPersonalPage() {
      if (this.$store.state.userName === this.username) {
        this.$store.commit("changeId", { currenrId: this.userId });
        this.$router.push({
          name: "mypersonalPage",
        });
      } else {
        this.$store.commit("changeId", { currenrId: this.userId });
        this.$router.push({
          name: "personalPage",
        });
      }
    },
    back() {
      this.$router.back(-1);
    },
    swiperright() {
      this.$router.back(-1);
    },
    loadData() {
      this.$nextTick(() => {
        const wrapper = document.querySelector(".bswrapper");
        this.scroll = new BScroll(wrapper, {
          pullUpLoad: true,
          click: true,
          tap: true,
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
    toVideoPage(id) {
      this.$router.push({
        name: "videoPlayerPage",
        query: {
          id: id,
          title: this.title,
          videoList: JSON.stringify(this.videoList),
        },
      });
      console.log(JSON.stringify(this.videoList));
    },
    dowmloadFile() {},
    download() {
      console.log("下载");
    },
  },
};
</script>

<style scoped>
.bswrapper {
  position: absolute;
  height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
}
/* video {
  width: 100vw;
  height: 50vh;
} */
.learnDetailMain .wrapper {
  width: 100vw;
  touch-action: pan-y !important;
}
/* .learnDetailMain .video-player {
  width: 100vw;
  padding: 2rem;
  box-sizing: border-box;
}
.vjs-big-play-button {
  height: 20rem !important;
} */
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 2%;
}
.learnDetail {
  display: flex;
  flex-direction: column;
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
  padding: 1rem 0 0 0;
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
.videoList,
.fileList {
  padding: 1rem 2rem 1rem 2rem;
  box-sizing: border-box;
}
.videoList ol,
.fileList ol {
  padding: 1rem 2rem;
  margin-left: 1.5rem;
}
.videoList ol li,
.fileList ol li {
  margin-left: -0.5rem;
  padding: 0.5rem 1.5rem;
}
.itembox {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.newComment {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 2rem;
  box-sizing: border-box;
  border-top: 1px solid rgb(244, 244, 244);
  border-bottom: 1px solid rgb(244, 244, 244);
}
.newComment #newComment {
  padding: 1rem;
  outline: none;
  background: rgb(244, 244, 244);
  border-radius: 2rem;
}
.commentBox {
  display: flex;
  flex-direction: column;
}
.commentBox .commentTitle {
  padding: 1rem 2rem 1rem 2rem;
  border-top: 1rem solid rgb(244, 244, 244);
}
.commentBox .commentTitle span {
  font-size: 1.5rem;
}
</style>