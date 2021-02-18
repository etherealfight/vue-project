<template>
  <div class="chatbox">
    <div class="title">消息</div>
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
.chatbox .title{
  width: 5rem;  
  margin: 0 auto;
  font-size: 2rem;
}
.tabbar {
  position: fixed;
  bottom: 0;
}
</style>