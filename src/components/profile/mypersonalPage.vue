<template>
  <div id="mypersonalMain">
    <publishReward
      class="publishReward"
      v-show="isMaskReward"
      @child-ok="childok1"
      @child-back="childback1"
    >
    </publishReward>
    <publishLearn
      class="publishReward"
      v-show="isMaskLearn"
      @child-ok="childok2"
      @child-back="childback2"
    >
    </publishLearn>
    <el-button
      round
      icon="el-icon-plus"
      class="add"
      @click="publish"
      v-show="isShow"
    ></el-button>
    <div class="mypersonaltop" v-show="isShow">
      <i class="el-icon-back" @click="back"></i>
      <div class="mypersonalMiddle">
        <div class="mypersonalIntroduction">
          <div class="mypersonalImg">
            <img :src="userImage" class="mypersonalImg" />
          </div>
          <div class="mypersonalText">
            <span style="font-size: 1.75rem">{{ username }}</span>
            <span class="mypersonalWords">个性签名：{{ sign }}</span>
            <span class="mypersonalWords">个人简介：{{ introduction }}</span>
          </div>
        </div>
        <div class="mypersonalContents">
          <el-button
            :loading="true"
            class="mainMore"
            v-if="showLoading"
          ></el-button>
        </div>
      </div>
      <div class="mypersonalpageBar">
        <personalpageBar :activeIndex="activeIndex"></personalpageBar>
      </div>
    </div>
    <div class="mypersonalwrapper" v-show="isShow">
      <div class="mypersonalpageMain">
        <v-touch
          @swiperight="swiperright"
          @swipeleft="swiperleft"
          class="wrapper"
          ref="wrapper"
        >
          <div class="list">
            <router-view class="router" :id="this.$store.state.userId"></router-view>
          </div>
        </v-touch>
      </div>
    </div>
  </div>
</template>

<script>
import personalpageBar from "./personalpageBar";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BScroll from "better-scroll";
import publishReward from "./publishReward";
import publishLearn from "./publishLearn";

export default {
  components: {
    personalpageBar,
    swiper,
    swiperSlide,
    publishReward,
    publishLearn,
  },
  data() {
    return {
      isMaskReward: false,
      isMaskLearn: false,
      datas: [],
      scroll: true, //
      pageNum: 1, //当前展示到的页面
      totalNum: 1, //总共查询到满足条件的页面
      showLoading: false, //是否在加载中标识
      username: this.$store.state.userName,
      userImage: this.$store.state.userImage,
      sign: this.$store.state.sign,
      introduction: this.$store.state.introduction,
      activeIndex: "1",
    };
  },
  mounted() {
    this.loadData();
    let mypersonalMiddle = document.querySelector(".mypersonalMiddle")
      .offsetHeight;
    let mypersonalpageBarHeight = document.querySelector(".mypersonalpageBar")
      .offsetHeight;
    let mypersonaltop = document.querySelector(".mypersonaltop").offsetHeight;
    let mypersonalwrapper = document.querySelector(".mypersonalwrapper")
      .offsetHeight;
    mypersonalwrapper =
      mypersonalwrapper +
      mypersonaltop -
      mypersonalMiddle -
      mypersonalpageBarHeight;
    let wrapper = document.getElementsByClassName("mypersonalwrapper");
    wrapper[0].style.height = mypersonalwrapper + "px";
    if (this.$route.path === "/mypersonalPage/learningList") {
      this.activeIndex = "2";
    } else {
      this.activeIndex = "1";
    }
  },
  methods: {
    mypersonalChange() {
      this.$router.push("/profile");
    },
    back() {
      this.$router.push("/helper");
    },
    swiperright() {
      console.log("r");
      if (this.activeIndex === "2") {
        this.$router.push({ path: "/mypersonalPage/rewardList" });
        this.activeIndex = "1";
        console.log("r2");
      }
    },
    swiperleft() {
      console.log("l");
      console.log(this.activeIndex);
      if (this.activeIndex === "1") {
        this.$router.push({ path: "/mypersonalPage/learningList" });
        this.activeIndex = "2";
        console.log("l2");
      }
    },
    loadData() {
      this.$nextTick(() => {
        const wrapper = document.querySelector(".mypersonalwrapper");
        this.scroll = new BScroll(wrapper, {
          pullUpLoad: true,
          scrollX: true,
          click: true,
          tap: true,
          pullUpLoad: {
            threshold: -30, // 当上拉距离超过30px时触发 pullingUp 事件
          },
        });
        //console.log(this.scroll);
        this.scroll.on("pullingUp", () => {
          console.log("jz");
          this.scroll.finishPullUp();
        });
      });
    },
    /**
     * 发布按钮显示
     */
    publish() {
      if (this.$route.path === "/mypersonalPage/rewardList") {
        this.isMaskReward = true;
      } else if (this.$route.path === "/mypersonalPage/learningList") {
        this.isMaskLearn = true;
      }
    },
    /**
     * 发布悬赏成功隐藏
     */
    childok1() {
      this.$message.info("ok");
      this.isMaskReward = false;
    },
    /**
     * 点击返回隐藏
     */
    childback1() {
      this.isMaskReward = false;
    },
    /**
     * 发布学习资源成功隐藏
     */
    childok2() {
      this.$message.info("ok");
      this.isMaskLearn = false;
    },
    /**
     * 点击返回隐藏
     */
    childback2() {
      this.isMaskLearn = false;
    },
  },
  computed: {
    showChange() {
      //console.log(this.username);
      //console.log(this.$store.state.userName);
      return this.username === this.$store.state.userName;
    },
    isShow() {
      return !(this.isMaskReward || this.isMaskLearn);
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
.add {
  height: 70px !important;
  width: 70px !important;
  border-radius: 50% !important;
  padding: 0 !important;
  font-size: 40px !important;
  color: lightgray;
  position: fixed;
  bottom: 10%;
  right: 10%;
  z-index: 10;
}
.mypersonaltop {
  height: 30vh;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 2%;
}
.mypersonalMiddle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mypersonalIntroduction {
  height: 20vh;
  width: 100vw;
  padding-top: 2rem;
  background: url("http://www.shuoshuodaitupian.com/css/userpage_back.jpg")
    no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
}
.mypersonalImg {
  margin: 0 2rem 0 1rem;
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
}
.mypersonalText {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 1rem;
}

.mypersonalWords {
  padding-top: 0.25rem;
  word-break: break-all;
}
.mypersonalpageBar {
  box-sizing: border-box;
  background: rgb(240, 240, 240);
}
.mypersonalpageMain {
  background: rgb(240, 240, 240);
}
.router {
  padding: 0 0 2rem 0;
}
.rerwardwrapper >>> .rewardList ,
.learningwrapper >>> .learningList{
  padding: 0;
  padding-bottom: 30vh;
  box-sizing: border-box;
  background: rgb(240, 240, 240);
}
.mypersonalwrapper {
  position: absolute;
  height: 70vh;
  width: 100vw;
  left: 0;
  bottom: 0;
  margin: 0 auto;
  overflow: hidden;
}
.publishReward {
  height: 100%;
  overflow: scroll;
}
</style>