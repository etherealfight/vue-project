<template>
  <div class="chatDetailBox">
    <div class="header">
      <i class="el-icon-back" @click="back"></i><span>{{ objectname }}</span>
    </div>
    <div class="main">
      <div
        class="content"
        :class="item.person"
        v-for="item in dialog"
        :key="item.id"
      >
        <div class="right" v-if="item.person === 'user'">
          <span class="cneter">{{ item.time }}</span>
          <div class="context contextRight">{{ item.context }}</div>
          <div class="image">
            <img :src="userImg" />
          </div>
        </div>
        <div class="left" v-if="item.person === 'object'">
          <span class="cneter">{{ item.time }}</span>
          <div class="image">
            <img :src="objectImg" />
          </div>
          <div class="context contextLeft">{{ item.context }}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <el-input v-model="input"></el-input
      ><el-button type="info" round class="inputButton">发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$store.state.userName,
      objectname: "quan",
      userImg: this.$store.state.userImage,
      objectImg: this.$store.state.userImage,
      dialog: [
        { id: 1, person: "user", context: "hhhhhhhh" },
        { id: 2, person: "object", context: "66666666" },
        { id: 3, person: "user", context: "eeeeeehhhhhhhh" },
        { id: 4, person: "object", context: "66666666666" },
        { id: 5, person: "object", context: "66666666" },
      ],
      input: "",
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    updated() {
      //滚动条置底
      let height = document.querySelector(".content").scrollHeight;
      document.querySelector(".content").scrollTop = height;
    },
  },
};
</script>

<style scoped>
.chatDetailBox {
  width: 100vw;
  height: 100vh;
  background: rgb(240, 240, 240);
}
.chatDetailBox .header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
}
.chatDetailBox .header span {
  font-size: 1.5rem;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 2%;
}
.content {
  width: calc(100% - 40px);
  padding: 20px;
  overflow-y: scroll;
  flex: 1;
}
.content:hover::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}
.context {
  max-width: 400px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  color: #000;
  word-wrap: break-word;
  word-break: normal;
}
.left .context {
  margin-left: 15px;
  background-color: #fff;
}
.left .context:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-top: 10px solid transparent;
  border-right: 10px solid #fff;
  border-bottom: 10px solid transparent;
  left: -20px;
}
.right .context {
  margin-right: 15px;
  background-color: #9eea6a;
}
.right .context:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid #9eea6a;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
  right: -20px;
}
.left {
  margin-top: 15px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
}
.right {
  margin-top: 15px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.item.item-center {
  justify-content: center;
}
.item.item-center span {
  font-size: 12px;
  padding: 2px 4px;
  color: #fff;
  background-color: #dadada;
  border-radius: 3px;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}

.image img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.footer {
  width: 100vw;
  padding: 1rem;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}
.footer .el-input >>> .el-input__inner {
  width: 70vw;
  height: 4rem;
  border-radius: 3rem;
}
.footer >>> .el-button {
  width: 20vw;
  height: 4rem;
  border-radius: 3rem;
}
.footer >>> .el-button span {
  font-size: 1rem;
}
</style>