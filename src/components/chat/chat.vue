<template>
  <div class="chatbox">
    <span>chat</span>
    <chatList></chatList>
    <my-tabbar class="tabbar" activeIndex="3"></my-tabbar>
  </div>
</template>

<script>
import my_tabbar from "../home/my_tabbar";
import chatList from "./chatList";
export default {
  components: {
    "my-tabbar": my_tabbar,
    chatList,
  },
};
</script>

<style scoped>
.chatbox {
  height: 100vh;
  width: 100vw;
}
.tabbar {
  position: fixed;
  bottom: 0;
}
</style>