<template>
  <div class="chatBox">
    <div class="left"><img :src="userimg" alt="" /></div>
    <div class="center">
      <div class="name">{{ username }}</div>
      <div class="context">{{ contentText }}</div>
    </div>
    <div class="right">
      <div class="time">
        {{date}}
      </div>
      <div class="icon">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //最新内容
    contentText: {
      type: String,
      default: "",
    },
    //发布时间
    date: {
      type: String,
      default: "",
    },
    //id
    id: {
      type: Number,
      default: 0,
    },
    //用户名
    username: {
      type: String,
      default: "",
    },
    //头像
    userimg: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>