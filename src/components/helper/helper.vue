<template>
  <div class="helperbox">
    <transition name="fade">
      <div class="searchbox" v-show="isShow">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input"
          @keyup.enter.native="search"
        ></el-input></div
    ></transition>
    <helperbar :class="show" :activeIndex="activeIndex"></helperbar>
    <div class="content">
      <router-view class="router" :input="input" :searchTarget="searchTarget"></router-view>
    </div>
    <mytabbar class="mytabbar" activeIndex="2"></mytabbar>
  </div>
</template>

<script>
import helperbar from "./helperbar";
import mytabbar from "../home/my_tabbar";

export default {
  data() {
    return {
      input: "",
      searchTarget:"",
      activeIndex: "1",
      startx: 0,
      starty: 0,
      isShow: true,
      show: "default",
    };
  },
  async created() {
    // const res = await searchData(this.pageNum);
    // this.datas = res.detail;
    // this.totalNum = res.pageNumber;
    // this.pageNum++;
  },
  mounted() {
    // this.loadData();
    console.log(this.$route.path);
    window.addEventListener("touchstart", this.throttle1());
    window.addEventListener("touchmove", this.throttle2());
    window.addEventListener("touchend", this.throttle3());
    if (this.$route.path === "/helper/learningList") {
      this.activeIndex = "2";
    } else {
      this.activeIndex = "1";
    }
  },
  components: { helperbar: helperbar, mytabbar: mytabbar },
  methods: {
    search() {
      if (this.$route.path === "/helper/rewardList") {
        this.searchTarget="rewardList";
        console.log("searchrew:");
        
      } else if (this.$route.path === "/helper/learningList") {
        this.searchTarget="learningList";
        console.log("searchlear:");

      }
    },

    // loadData() {
    //   this.$nextTick(() => {
    //     const wrapper = document.querySelector(".helperwrapper");
    //     this.scroll = new BScroll(wrapper, {
    //       pullUpLoad: true,
    //       click: true,
    //       tap: true,
    //       pullUpLoad: {
    //         threshold: -30, // 当上拉距离超过30px时触发 pullingUp 事件
    //       },
    //     });
    //     console.log(this.scroll);
    //     this.scroll.on("pullingUp", () => {
    //       console.log("jz");
    //       this.scroll.finishPullUp();
    //     });
    //   });
    // },
    getDirection(startx, starty, endx, endy) {
      let angx = endx - startx;
      let angy = endy - starty;
      let result = 0;
      if (Math.abs(angx) < 60) {
        return result;
      }
      let angle = this.getAngle(angx, angy);
      if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 1;
      } else if (angle >= -45 && angle <= 45) {
        result = 2;
      }
      return result;
    },
    getAngle(angx, angy) {
      return (Math.atan2(angy, angx) * 180) / Math.PI;
    },
    handletouchs(e) {
      this.startx = e.touches[0].pageX;
      this.starty = e.touches[0].pageY;
      console.log("sy:", this.starty);
    },
    handletouchm(e) {
      let movey = e.touches[0].pageY;
      console.log("my", movey);
      let dir = movey - this.starty;
      console.log("dir:", dir);
      if (dir > 5) {
        this.isShow = true;
        this.show = "down";
        console.log("move+:", movey - this.starty, "true");
      } else if (dir < -5) {
        this.isShow = false;
        this.show = "up";
        console.log("move-:", movey - this.starty, "flase");
      }
    },
    handletouche(e) {
      let endx, endy;
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;
      // console.log(endx);
      let direction = this.getDirection(this.startx, this.starty, endx, endy);
      switch (direction) {
        case 0:
          break;
        case 1:
          if (this.activeIndex === "1") {
            this.$router.push({ path: "/helper/learningList" });
            this.activeIndex = "2";
          }
          break;
        case 2:
          if (this.activeIndex === "2") {
            this.$router.push({ path: "/helper/rewardList" });
            this.activeIndex = "1";
          }
          break;
        default:
      }
    },
    throttle1() {
      let func = this.handletouchs;
      let timer = null;
      return function () {
        let context = this;
        let args = arguments;
        if (timer) {
          return;
        } else {
          timer = true;
          let t = setTimeout(function () {
            func.apply(context, args);
            timer = null;
          }, 250);
          // console.log("timer:", t);
        }
      };
    },
    throttle2() {
      setTimeout(() => {
        console.log("wait...");
      }, 150);
      let func = this.handletouchm;
      let timer = null;
      return function () {
        let context = this;
        let args = arguments;
        if (timer) {
          return;
        } else {
          timer = true;
          let t = setTimeout(function () {
            func.apply(context, args);
            timer = null;
          }, 250);
          // console.log("timer:", t);
        }
      };
    },
    throttle3() {
      let func = this.handletouche;
      let timer = null;
      return function () {
        let context = this;
        let args = arguments;
        if (timer) {
          return;
        } else {
          timer = true;
          let t = setTimeout(function () {
            func.apply(context, args);
            timer = null;
          }, 250);
          // console.log("timer:", t);
        }
      };
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log("up");
    this.input = "";
    next();
  },
  destroyed() {
    console.log("leave");
    window.removeEventListener("touchstart", this.throttle1);
    window.removeEventListener("touchmove", this.throttle2);
    window.removeEventListener("touchend", this.throttle3);
  },
};
</script>

<style scoped>
.helperbox {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background: rgb(244, 244, 244);
}
.fade-enter-active {
  transition: all 0.25s linear;
}
.fade-leave-active {
  transition: all 0.25s linear;
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-4rem);
}
.helperbox .searchbox {
  position: fixed;
  z-index: 15;
  top: 0;
  height: 5rem;
  width: 100vw;
  background: rgb(244, 244, 244);
  display: flex;
  justify-content: center;
  align-items: center;
}
.helperbox .searchbox .el-input {
  width: 80vw;
}
.helperbox .searchbox .el-input >>> .el-input__inner {
  margin-top: 1.5rem;
  background: rgb(235, 235, 235);
  border-radius: 5rem;
  border: none;
}
.helperbox .searchbox .el-input >>> .el-input__inner::-webkit-input-placeholder,
.helperbox .searchbox .el-input >>> .el-input__prefix {
  color: gray;
  margin-top: 1rem;
}
.helperbox .helperbar {
  position: fixed;
  z-index: 5;
}
.helperbox .default {
  margin-top: 4rem;
}
.helperbox .down {
  margin-top: 4rem;
  animation: bounce-in 0.25s linear reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-4rem);
  }
}
.helperbox .up {
  margin-top: 0;
  animation: bounce-on 0.25s linear;
}
@keyframes bounce-on {
  0% {
    transform: translateY(4rem);
  }
  100% {
    transform: translateY(0);
  }
}
.helperbox .helperbar >>> .el-menu {
  background: rgb(244, 244, 244);
}
.helperbox .mytabbar {
  position: fixed;
  bottom: 0;
}
</style>