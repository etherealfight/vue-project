<!--
* @FileDescription:发布组件，用于用户发表新文章
-->
<template>
  <div class="publishRewardBox">
    <div class="publishRewardMain">
      <i class="el-icon-back" @click="back"></i>
      <textarea
        name="发布"
        id="publishReward"
        v-model="publishRewardText"
        cols="50"
        rows="15"
        placeholder="请输入发布内容"
      ></textarea>
      <el-button round id="publishRewardButton" @click="publishReward"
        >发布</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publishRewardText: "",
    };
  },
  props: {
    //   接受父组件传的值
    propsItem: {
      type: Object,
    },
  },
  methods: {
    /**
     * 发布文章
     */
    async publishReward() {
      let that = this;
      if (this.$store.state.userName == "") this.$message.warning("请先登录");
      else if (that.publishRewardText == "")
        this.$message.warning("发布内容不可为空");
      else {
        console.log(this.publishRewardText);
        this.$emit("child-ok");
        console.log(this.propsItem.isMask);
        this.propsItem.isMask = false;
        console.log(this.propsItem.isMask);
        // this.$message.info(res.msg);
        // console.log(res)
      }
    },
    back(){
      this.$emit("child-back");
      this.propsItem.isMask = false;
    }
  },
  components: {},
};
</script>

<style scoped>
.el-icon-back {
  font-size: 3rem;
  margin-left: -32rem;
  margin-bottom: 2rem;
}
.publishRewardBox {
  height: 100vh;
  width: 100vw;
  background: rgb(240, 240, 240);
  opacity: 1;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.publishRewardMain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 3rem;
  margin-top: 1rem;
  z-index: 20;
  background: white;
    opacity: 1;
  box-sizing: border-box;
}
#publishReward {
  width: 80vw;
  padding: 1rem;
  font-family: "宋体";
  outline: none;
  box-sizing: border-box;
}
#publishRewardButton {
  margin-top: 1rem;
  width: 8rem;
}
</style>