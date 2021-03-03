<template>
  <div class="helperbox">
    <div class="searchbox">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input"
        @keyup.enter.native="search"
      ></el-input>
    </div>
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
      input: "",
      activeIndex: "1",
      startx: 0,
      starty: 0,
    };
  },
  mounted() {
    this.loadData();
    console.log(this.$route.path);
    window.addEventListener("touchstart", this.start);
    window.addEventListener("touchmove", this.move);
    window.addEventListener("touchend", this.end);
    if (this.$route.path === "/helper/learningList") {
      this.activeIndex = "2";
    } else {
      this.activeIndex = "1";
    }
  },
  components: { helperbar: helperbar, mytabbar: mytabbar },
  methods: {
    search() {
      console.log("search");
    },
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
    test() {
      // 防抖: 一个函数 在设置的时间后执行 如果在设置的时间间隔期间再次触发 那么本次就无效 重新计算
      // 触发高频时间后n秒内只会执行一次 如果n秒高频时间内再次触发 则会重新计算时间
      // 原理 debounce 触发后 首先清除掉timeout（释放 指向空） 然后返回节流数组 利用闭包保存timeout变量
      const debounce = (fn, time) => {
        // 利用闭包避免全局污染
        let timeout = null;
        return function () {
          if (timeout) {
            // 在定时期间，那么清除原来计时器 重新计时(核心)
            clearTimeout(timeout);
          }
          // 设置定时器
          timeout = setTimeout(() => {
            // 执行函数
            fn.apply(this, arguments);
          }, time);
        };
      };
      function clickButton(type) {
        console.log(type);
      }
      //注意要绑定的事件一定是经过debouce处理过的事件，另外不能直接绑定debouce(clickButton,1000)('防抖') 因为这样绑定的函数都是重新在堆里开辟的新函数，每个都会创建新的timeout（不再是闭包中被保护的timeout）
      const bindClick = debounce(clickButton, 1000);
    },
    start(e) {
      console.log("e");
      this.startTouch = this.throttle(this.startTouch(e), 500);
    },
    move(e) {
      this.moveTouch = this.throttle(this.moveTouch(e), 500);
    },
    end(e) {
      this.endTouch = this.throttle(this.endTouch(e), 500);
    },
    startTouch(e) {
      this.handletouchs(e);
    },
    moveTouch(e) {
      this.handletouchm(e);
    },
    endTouch(e) {
      this.handletouche(e);
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
    handletouchm(e) {
      let movey = e.touches[0].pageY;
      console.log(movey);
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
    throttle(func, wait) {
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
          }, wait);
          console.log("timer:", t);
        }
      };
    },
  },
  destroyed() {
    console.log("leave");
    window.removeEventListener("touchstart", this.start);
    window.removeEventListener("touchmove", this.move);
    window.removeEventListener("touchend", this.end);
  },
};
</script>

<style scoped>
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
.helperbox .searchbox {
  position: fixed;
  z-index: 15;
  top: 0;
  height: 4rem;
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
  margin-top: 4rem;
}
.helperbox .helperbar >>> .el-menu {
  background: rgb(244, 244, 244);
}
.router {
  padding: 8.6rem 0 4.2rem 0;
}
.helperbox .mytabbar {
  position: fixed;
  bottom: 0;
}
</style>