<template>
  <div class="chatbox">
    <div class="title"><span>消息</span></div>
    <div class="chatwrapper">
      <chatList></chatList>
    </div>
    <my-tabbar class="tabbar" activeIndex="3"></my-tabbar>
  </div>
</template>

<script>
import my_tabbar from "../home/my_tabbar";
import chatList from "./chatList";
import BScroll from "better-scroll";
export default {
  components: {
    "my-tabbar": my_tabbar,
    chatList,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$nextTick(() => {
        const wrapper = document.querySelector(".chatwrapper");
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
  },
};
</script>

<style scoped>
.chatbox {
  height: 100vh;
  width: 100vw;
}
.chatbox .title {
  position: absolute;
  top: 0;
  width: 100vw;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(240, 240, 240);
  z-index: 200;
}
.chatbox .title span {
  width: 5rem;
  padding: 1rem;
  margin: 0 auto;
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
}
.chatbox .chatwrapper {
  margin-top: 5rem;
  height: 85vh;
  z-index: 20;
}
.tabbar {
  position: fixed;
  bottom: 0;
}
</style>