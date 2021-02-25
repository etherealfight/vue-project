<template>
  <div class="chatDetailBox">
    <div class="header">
      <i class="el-icon-back" @click="back"></i><span>{{ objectname }}</span>
    </div>
    <div class="main"></div>
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
      objectImg:
        "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
      dialog: [
        { person: 0, context: "hhhhhhhh" },
        { person: 1, context: "66666666" },
      ],
      input: "",
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
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
.footer >>> .el-button span{
  font-size: 1rem;
}
</style>