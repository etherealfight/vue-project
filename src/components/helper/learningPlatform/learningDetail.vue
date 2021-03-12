<template>
  <div class="bswrapper">
    <div class="content">
      <div class="learnDetail">
        <div class="learnDetailt">
          <i class="el-icon-back" @click="back"></i><span> 学习平台</span>
        </div>
        <div class="learnDetailTitle" @click="toPersonalPage">
          <img :src="userimg" class="learnDetailUserImg" />
          <div class="nameBox">
            <div class="learnDetailName">{{ username }}</div>
            <div class="learnDetailDate">{{ currentData }}</div>
          </div>
        </div>
        <div class="learnDetailMain">
          <swiper :options="swiperOption" class="czp">
            <swiper-slide v-for="imgurl in fileaddress" :key="imgurl">
              <img :src="imgurl" preview preview-text="学习资源"
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
                  v-for="(item, index) in videoList"
                  :key="index"
                  @click="toVideoPage(item.id, index)"
                >
                  <div class="itembox">
                    <span>{{ videoName[index] }}</span>
                  </div>
                </li>
              </ol>
            </div>
            <div class="fileList">
              <h2 class="fileTitle">课程资源</h2>
              <ol>
                <li
                  v-for="(item, index) in fileList"
                  :key="index"
                  @click="dowmloadFile"
                >
                  <div class="itembox">
                    <span>{{ fileName[index] }}</span>
                    <a :href="fileList[index]"
                      ><i class="el-icon-download"></i
                    ></a>
                  </div>
                </li>
              </ol>
            </div>
            <div class="commentBox">
              <div class="commentTitle">
                <span>评论</span>
              </div>
              <div class="commentMain">
                <commentList :comments="comments"></commentList>
              </div>
            </div>
          </v-touch>
        </div>
      </div>
    </div>
    <div class="newComment">
      <textarea
        id="newComment"
        cols="30"
        rows="1"
        placeholder="说些啥吧"
        v-model="commentText"
      ></textarea>
      <el-button type="info" round class="inputButton" @click="sendComment"
        >发表</el-button
      >
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "video.js/dist/video-js.css";
import commentList from "./commentList";
import BScroll from "better-scroll";
import { toStudyDetail, findComment, updatereply } from "../../../api";
import dayjs from "dayjs";

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
    this.id = res.studyplatid;
    this.userid = res.userid;
    this.clicks = res.studyhits;
    this.videoList = res.videos;
    this.fileList = res.files;
    this.videoName = res.videoname;
    this.fileName = res.filename;
    this.videoPath = res.videopath;
    this.contentText = res.studyinfo;
    this.date = res.studytime;
    const res2 = await findComment(this.id, this.pageNum);
    console.log(res2);
    this.comments = res2.detail;
    this.totalNum = res2.pageNumber;
    this.pageNum = 2;
  },
  components: {
    swiper,
    swiperSlide,
    commentList,
  },
  mounted() {
    this.loadData();
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
      videoList: [], //视频资源地址
      fileList: [], //文件资源地址
      videoName: [], //视频名
      fileName: [], //文件名
      videoPath: "", //视频地址
      end: "? filename=",
      title: "test", //学习资源标题
      fileaddress: [], //学习资源预览图
      contentText: "cccccccccccccccccccccccccccccccccc", //发表正文内容
      date: "2021-01-25", //发表时间
      id: 0, //学习资源id
      username: "aaa", //用户昵称
      userid: "", //用户id
      userimg:
        "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg", //用户头像
      clicks: 0, //点击量
      comments: [],
      commentText: "", //发表评论内容
      initState: true, //判断是否为评论初始页面
      pageNum: 1, //当前展示到的页面
      totalNum: 1, //总共查询到满足条件的页面
      showLoading: false, //是否在加载中标识
    };
  },
  computed: {
    currentData() {
      return dayjs(this.date).format("YYYY年MM月DD日 HH:mm:ss");
    },
  },
  methods: {
    toPersonalPage() {
      if (this.$store.state.userId === this.userid) {
        this.$router.push({
          name: "mypersonalPage",
        });
      } else {
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
    /**
     * 根据查询条件获取文章信息
     */
    async getData() {
      try {
        console.log("startget");
        let res = {};
        res = await findComment(this.id, this.pageNum);
        this.comments = [...this.comments, ...res.detail];
        console.log(res);
        console.log("chushihua");

        this.pageNum++;
        console.log(this.pageNum);
      } catch (error) {
        //this.$message.warning(error.message);
      }
    },
    /**
     * 下拉加载数据
     */
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
        this.scroll.on("pullingUp", async () => {
          if (this.pageNum > this.totalNum) {
            this.$message.info("到底啦别拉了");
            this.showLoading = false;
            return;
          } else {
            this.showLoading = true;
            console.log("获取中");
            await this.getData();
            console.log("获取完");
          }
          this.scroll.finishPullUp();
        });
      });
    },
    /**
     * 跳转到视频播放详情页
     */
    toVideoPage(id, index) {
      this.$router.push({
        name: "videoPlayerPage",
        query: {
          id: id,
          index: index,
          title: this.title,
          videoName: this.videoName,
          videoList: JSON.stringify(this.videoList),
        },
      });
      console.log(JSON.stringify(this.videoList));
    },
    dowmloadFile() {},
    download() {
      console.log("下载");
    },
    /**
     * 下载
     */
    downloadVideo(videourl, viedeopath) {
      let link = videourl;
      let fileName = '"' + viedeopath + '"';
      var x = new XMLHttpRequest();
      x.open("GET", link, true);
      x.responseType = "blob";
      x.onload = (e) => {
        var url = window.URL.createObjectURL(x.response);
        var a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
      };
      x.send();
    },
    /**
     * 发表评论
     */
    async sendComment() {
      const res = await updatereply(
        this.$store.state.userId,
        this.$store.state.userName,
        this.commentText,
        this.id,
        this.$store.state.userImage
      );
      console.log(res);
      this.commentText = "";
      this.pageNum = 1;
      const res2 = await findComment(this.id, this.pageNum);
      console.log(res2);
      this.comments = res2.detail;
      this.totalNum = res2.pageNumber;
      this.pageNum++;
    },
  },
  updated() {
    //重新计算高度
    this.scroll.refresh();
    //当数据加载完毕以后通知better-scroll
    this.scroll.finishPullUp();
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
}
.learnDetail {
  display: flex;
  flex-direction: column;
}
.learnDetailt {
  font-size: 2rem;
  position: absolute;
  height: 5rem;
  width: 100vw;
  border-bottom: 1px solid rgb(244, 244, 244);
  padding: 1rem 0;
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
  border-bottom: 1px solid rgb(244, 244, 244);
  box-sizing: border-box;
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
  font-size: 1.75rem;
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
.swiper-slide {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.swiper-slide img {
  max-height: 100%;
  max-width: 100%;
}
.learnDetailContext {
  padding: 2rem;
  display: -webkit-box;
  word-break: break-all;
  box-sizing: border-box;
  font-size: 1.5rem;
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
  box-sizing: border-box;
}
.videoList ol li,
.fileList ol li {
  margin-left: -0.5rem;
  padding: 0.5rem 1.5rem;
  box-sizing: border-box;
  font-size: 1.5rem;
}
.el-icon-download{
  color: black;
}
.itembox {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.newComment {
  position: fixed;
  bottom: 0rem;
  width: 100vw;
  z-index: 15;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0.5rem 2rem;
  box-sizing: border-box;
  background: white;
  border-top: 1px solid rgb(244, 244, 244);
  border-bottom: 1px solid rgb(244, 244, 244);
}
.newComment #newComment {
  width: 60vw;
  height: rem;
  padding: 1rem;
  font-size: 1.5rem;
  outline: none;
  background: rgb(244, 244, 244);
  border-radius: 2rem;
  box-sizing: border-box;
}
.newComment >>> .el-button {
  height: 4rem;
  border-radius: 3rem;
}
.newComment >>> .el-button span {
  font-size: 1.5rem;
}
.commentBox {
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  box-sizing: border-box;
}
.commentBox .commentTitle {
  padding: 1rem 2rem 1rem 2rem;
  border-top: 1rem solid rgb(244, 244, 244);
}
.commentBox .commentTitle span {
  font-size: 1.5rem;
}
</style>