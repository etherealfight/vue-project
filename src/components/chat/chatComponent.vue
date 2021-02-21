<template>
  <div class="chatBox" @click="toDetail">
    <div class="left"><img :src="userimg" alt="" /></div>
    <div class="center">
      <div class="name">{{ username }}</div>
      <div class="context">{{ contentText }}</div>
    </div>
    <div class="right">
      <div class="time">
        {{ date }}
      </div>
      <div class="icon" v-show="!isRead"><i class="el-icon-warning"></i></div>
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
    //已读标识
    isRead: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toDetail() {
      this.$router.push({
        path: "/chatDetail",
        query: { username: this.username },
      });
    },
  },
};
</script>

<style scoped>
.chatBox {
  display: flex;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.chatBox .left {
  width: 20vw;
  padding: 2rem;
  box-sizing: border-box;
}
.chatBox .left img {
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}
.chatBox .center {
  width: 60vw;
  padding: 2rem;
  box-sizing: border-box;
}
.chatBox .center .name {
  font-size: 1.5rem;
}
.chatBox .center .context {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  padding-top: 1rem;
}
.chatBox .right {
  width: 20%;
  padding: 2rem 2rem 2rem 0;
  box-sizing: border-box;
}
.chatBox .right i {
  color: red;
}
</style>