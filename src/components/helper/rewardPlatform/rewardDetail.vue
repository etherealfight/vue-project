<template>
  <v-touch
    @swipeleft="swiperleft"
    @swiperight="swiperright"
    @touchstart="start"
    class="wrapper"
  >
    <div class="rewardDetail">
      <i class="el-icon-back" @click="back"></i>
      <div class="rewardTitle"></div>
      <div class="rewardMain"></div></div
  ></v-touch>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back(-1);
    },
    swiperleft() {
      console.log("l");
      this.$router.back(1);
    },
    swiperright() {
      console.log("r");
      this.$router.back(-1);
    },
    start() {
      console.log("s");
    },
  },
};
</script>

<style>
html {
  width: 100vw;
  height: 100vh;
}
.wrapper{
  height: 100vh;
  width: 100vw;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 3%;
}
</style>