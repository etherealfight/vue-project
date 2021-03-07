<!--
* @FileDescription:发布组件，用于用户发表新悬赏
-->
<template>
  <div class="publishRewardBox">
    <div class="publishRewardMain">
      <i class="el-icon-back" @click="back"></i>
      <span>发布悬赏</span>
      <textarea
        name="发布"
        id="publishReward"
        v-model="publishRewardText"
        cols="50"
        rows="10"
        placeholder="请输入发布内容"
      ></textarea>
      <div class="upload">
        <el-upload
          class="uploaditem"
          ref="upload"
          action="http://192.168.1.109:8080/rewardimages"
          :auto-upload="false"
          :limit="9"
          list-type="picture-card"
          :file-list="fileList"
          :before-upload="showList"
          :on-error="showError"
          :on-success="showSuccess"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
      <el-button round id="publishRewardButton" @click="publishRewards"
        >发布</el-button
      >
    </div>
  </div>
</template>

<script>
import { publishReward } from "../../api";
export default {
  data() {
    return {
      publishRewardText: "",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: "aa",
      imgUrl: "",
      counter: 0,
      imgNum: 0,
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
    async publishRewards() {
      if (this.$store.state.userName == "") this.$message.warning("请先登录");
      else if (this.publishRewardText == "")
        this.$message.warning("发布内容不可为空");
      else {
        this.$emit("child-ok");
        this.$refs.upload.submit();
        // this.$message.info(res.msg);
        // console.log(res)
      }
    },
    /**
     * 上传前统计图片数量
     */
    showList(file) {
      this.imgNum = this.imgNum + 1;
      console.log("file:", file);
    },
    /**
     * 上传失败钩子
     */
    showError(err, file, fileList) {
      console.log("error", err);
    },
    /**
     * 上传成功钩子
     */
    async showSuccess(response, file, fileList) {
      console.log("file:", file);
      console.log("fileList:", fileList);
      console.log("nums:", this.imgNum);
      console.log("success:", response);
      if (this.counter < this.imgNum - 1) {
        this.imgUrl = this.imgUrl + "http://192.168.1.109:8080" + response.detail + ",";
        console.log(this.imgUrl);
        this.counter = this.counter + 1;
      } else {
        this.imgUrl = this.imgUrl + "http://192.168.1.109:8080" + response.detail;
        console.log("finish:", this.imgUrl);
        const res = await publishReward(
          this.$store.state.userId,
          this.publishRewardText,
          this.imgUrl
        );
        console.log(res);
        this.publishRewardText = "";
        this.$refs.upload.clearFiles();
        this.imgNum = 0;
        this.counter = 0;
      }
    },
    /**
     * 移除图片
     */
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    /**
     * 预览图片
     */
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    /**
     * 返回上一页面
     */
    back() {
      this.$emit("child-back");
    },
  },
  components: {},
};
</script>

<style scoped>
.el-icon-back {
  font-size: 3rem;
  margin-left: -28rem;
}
.publishRewardBox {
  height: 100vh;
  width: 100vw;
  background: rgb(240, 240, 240);
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
  z-index: 20;
  background: white;
  opacity: 1;
  box-sizing: border-box;
}
.publishRewardMain span {
  font-size: 2rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-bottom: 1rem;
}
#publishReward {
  width: 80vw;
  padding: 1rem;
  font-family: "宋体";
  outline: none;
  box-sizing: border-box;
}
.uploaditem >>> .el-upload-list {
  width: 100vw;
  padding: 2rem 0 0 3rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, 11rem);
}
.uploaditem >>> .el-upload--picture-card {
  margin-top: 1rem;
  margin-left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem !important;
  height: 10rem !important;
  line-height: 0 !important;
}
.uploaditem >>> .el-upload-list--picture-card .el-upload-list__item {
  width: 10rem !important;
  height: 10rem !important;
  line-height: 0 !important;
  margin: 0.25rem 0.5rem 0.5rem 0;
}
#publishRewardButton {
  margin-top: 1rem;
  width: 8rem;
}
</style>