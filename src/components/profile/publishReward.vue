<!--
* @FileDescription:发布组件，用于用户发表新文章
-->
<template>
  <div class="publishRewardBox">
    <div class="publishRewardMain">
      <textarea
        name="发布"
        id="publishReward"
        v-model="publishRewardText"
        cols="50"
        rows="15"
        style="resize: none; padding: 5px"
        placeholder="请输入发布内容"
      ></textarea>
      <el-button round id="publishRewardButton" @click="publishReward">发布</el-button>
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
        console.log(this.publishRewardText)
        this.$router.back(-1);
        // this.$message.info(res.msg);
        // console.log(res)
      }
    },
  },
  components: {
  },
};
</script>

<style scoped>
.publishRewardBox {
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
  width: 70vw;
  padding: 3rem;
  margin-top: 1rem;
}
#publishReward {
  padding: 1rem;
  font-family: "宋体";
  outline: none;
}
#publishRewardButton {
  margin-top: 1rem;
  width: 8rem;
}

</style>