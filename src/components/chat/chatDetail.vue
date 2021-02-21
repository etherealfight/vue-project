<template>
  <div class="chatDetailBox">
    <div class="header"><i class="el-icon-back" @click="back"></i><span>{{objectname}}</span></div>
    <div class="main"></div>
    <div class="footer"></div>
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
.chatDetailBox .header{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
}
.chatDetailBox .header span{
    font-size: 1.5rem;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 2%;
}
</style>