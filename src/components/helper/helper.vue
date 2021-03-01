<template>
  <div class="helperbox">
    <helperbar class="helperbar" :activeIndex="activeIndex"></helperbar>
    <div class="helperwrapper">
      <div class="content">
        <router-view class="router"></router-view>
      </div>
    </div>
    <mytabbar class="mytabbar" activeIndex="2"></mytabbar>
  </div>
</template>

<script>
import helperbar from "./helperbar";
import mytabbar from "../home/my_tabbar";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      activeIndex: "1",
      startx: 0,
      starty: 0,
    };
  },

  mounted() {
    this.loadData();
    console.log(this.$route.path);
    window.addEventListener("touchstart", this.startTouch);
    window.addEventListener("touchend", this.endTouch);
    if (this.$route.path === "/helper/learningList") {
      this.activeIndex="2";
    } else {
      this.activeIndex="1";
    }
  },
  components: { helperbar: helperbar, mytabbar: mytabbar },
  methods: {
    loadData() {
      this.$nextTick(() => {
        const wrapper = document.querySelector(".helperwrapper");
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
    startTouch(e) {
      this.debounce(this.handletouchs(e), 250);
    },
    endTouch(e) {
      this.debounce(this.handletouche(e), 250);
    },
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
      console.log(this.startx);
    },
    handletouche(e) {
      let endx, endy;
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;
      console.log(endx);
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
    debounce(func, wait, immediate) {
      let timeout;
      return function () {
        let context = this,
          args = arguments;
        let later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
  },
  destroyed() {
    window.removeEventListener("touchstart", this.startTouch);
    window.removeEventListener("touchend", this.endTouch);
  },
};
</script>

<style>
.helperwrapper {
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  margin: 0 auto;
  overflow: hidden;
}
.helperbox {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background: rgb(244, 244, 244);
}
.helperbox .helperbar {
  position: fixed;
  z-index: 5;
  top: 0;
}
.router {
  padding: 4.6rem 0 4.2rem 0;
}
.helperbox .mytabbar {
  position: fixed;
  bottom: 0;
}
</style>