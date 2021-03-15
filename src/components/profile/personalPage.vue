<!--
* @FileDescription:用户主页组件，用于展示对应用户发布的悬赏以及学习资源信息
-->
<template>
  <div id="personalMain">
    <div class="personaltop">
      <i class="el-icon-back" @click="back"></i>
      <div class="personalMiddle">
        <div class="personalIntroduction">
          <div class="personalImg">
            <img :src="userImage" class="personalImg" />
          </div>
          <div class="personalText">
            <span style="font-size: 1.75rem">{{ username }}{{ gender }}</span>
            <span class="personalWords">个性签名：{{ sign }}</span>
            <span class="personalWords">个人简介：{{ introduction }}</span>
          </div>
        </div>
        <div class="personalContents">
          <el-button
            :loading="true"
            class="mainMore"
            v-if="showLoading"
          ></el-button>
        </div>
      </div>
      <div class="personalpageBar">
        <personalpageBar :activeIndex="activeIndex"></personalpageBar>
      </div>
    </div>
    <div class="personalwrapper">
      <div class="personalpageMain">
        <v-touch
          @swiperight="swiperright"
          @swipeleft="swiperleft"
          class="wrapper"
          ref="wrapper"
        >
          <div class="list">
            <router-view class="router" :userid="userid"></router-view>
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

export default {
  components: {
    personalpageBar,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      datas: [],
      scroll: true, //
      pageNum: 1, //当前展示到的页面
      totalNum: 1, //总共查询到满足条件的页面
      showLoading: false, //是否在加载中标识
      userid: sessionStorage.getItem("tempUserId"), //从浏览器本地存储获取用户id
      username: sessionStorage.getItem("tempUserName"), //用户名
      userImage: sessionStorage.getItem("tempUserImg"), //用户头像
      sign: sessionStorage.getItem("tempUserSign"), //用户签名
      introduction: sessionStorage.getItem("tempUserIntroduction"), //用户简介
      sex: sessionStorage.getItem("gender"), //用户性别
      activeIndex: "1", //导航栏选中索引
    };
  },
  computed: {
    //展示相应性别
    gender() {
      if (this.sex === "1") {
        return " ♂";
      } else if (this.sex === "2") {
        return " ♀";
      } else {
        return "";
      }
    },
  },
  mounted() {
    this.loadData();
    //计算右滑返回区域高度
    let personalMiddle = document.querySelector(".personalMiddle").offsetHeight;
    let personalpageBarHeight = document.querySelector(".personalpageBar")
      .offsetHeight;
    let personaltop = document.querySelector(".personaltop").offsetHeight;
    let personalwrapper = document.querySelector(".personalwrapper")
      .offsetHeight;
    personalwrapper =
      personalwrapper + personaltop - personalMiddle - personalpageBarHeight;
    let wrapper = document.getElementsByClassName("personalwrapper");
    wrapper[0].style.height = personalwrapper + "px";
    //根据当前路由判断navbar哪一栏处于选中状态
    if (this.$route.path === "/personalPage/learningList") {
      this.activeIndex = "2";
    } else {
      this.activeIndex = "1";
    }
  },
  updated() {
    if (this.$route.path === "/personalPage/learningList") {
      this.activeIndex = "2";
    } else {
      this.activeIndex = "1";
    }
    //重新计算高度
    this.scroll.refresh();
    //当数据加载完毕以后通知better-scroll
    this.scroll.finishPullUp();
  },
  methods: {
    /**
     * 点击返回按钮返回小帮手页面
     */
    back() {
      this.$router.push("/helper");
    },
    /**
     * 监听右滑切换子组件
     */
    swiperright() {
      console.log("r");
      if (this.activeIndex === "2") {
        this.$router.push({ path: "/personalPage/rewardList" });
        this.activeIndex = "1";
        console.log("r2");
      }
    },
    /**
     * 监听左滑切换子组件
     */
    swiperleft() {
      console.log("l");
      console.log(this.activeIndex);
      if (this.activeIndex === "1") {
        this.$router.push({ path: "/personalPage/learningList" });
        this.activeIndex = "2";
        console.log("l2");
      }
    },
    /**
     * 下拉加载数据
     */
    loadData() {
      this.$nextTick(() => {
        const wrapper = document.querySelector(".personalwrapper");
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
  },
};
</script>

<style scoped>
.personaltop {
  height: 30vh;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 2%;
}
.personalMiddle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.personalIntroduction {
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
.personalImg {
  margin: 0 2rem 0 1rem;
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
}
.personalText {
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 1rem;
}

.personalWords {
  padding: 0.25rem;
  word-break: break-all;
}
.personalChange {
  margin-left: -6.5rem;
  margin-top: -4rem;
  padding: 0.5rem;
}
.personalpageBar {
  box-sizing: border-box;
  background: rgb(240, 240, 240);
}
.personalpageMain {
  background: rgb(240, 240, 240);
}
.personalpageMain .wrapper .router {
  padding: 0 0 2rem 0;
}
.router {
  padding: 0 0 2rem 0;
  background: rgb(240, 240, 240);
}
.rerwardwrapper >>> .rewardList,
.learningwrapper >>> .learningList {
  padding: 0;
  padding-bottom: 30vh;
  box-sizing: border-box;
  background: rgb(240, 240, 240);
}
.personalwrapper {
  position: absolute;
  height: 70vh;
  width: 100vw;
  left: 0;
  bottom: 0;
  margin: 0 auto;
  overflow: hidden;
}
</style>