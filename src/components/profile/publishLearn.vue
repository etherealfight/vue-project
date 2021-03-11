<!--
* @FileDescription:发布组件，用于用户发表新文章
-->
<template>
  <div class="publishLearnBox">
    <div class="publishLearnMain">
      <i class="el-icon-back" @click="back"></i>
      <span>发布学习资源</span>
      <textarea
        name="发布"
        id="publishLearn"
        v-model="publishLearnText"
        cols="50"
        rows="10"
        placeholder="请输入发布内容"
      ></textarea>
      <div class="upload">
        <el-upload
          class="uploaditem"
          ref="upload1"
          action="http://121.196.154.219:8083/rewardimages"
          :auto-upload="false"
          :limit="9"
          :file-list="photoList"
          list-type="picture-card"
          :before-upload="showList1"
          :on-preview="handlePictureCardPreview1"
          :on-remove="handleRemove1"
          :on-error="showError1"
          :on-success="showSuccess1"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
        <el-upload
          class="upload-demo"
          ref="upload2"
          action="http://121.196.154.219:8083/rewardvideos"
          :on-remove="handleRemove2"
          :file-list="videoList"
          :auto-upload="false"
          :before-upload="showList2"
          :on-error="showError2"
          :on-success="showSuccess2"
        >
          <el-button slot="trigger" size="small" type="primary"
            >选取视频</el-button
          >
        </el-upload>
        <el-upload
          class="upload-demo"
          ref="upload3"
          action="http://121.196.154.219:8083/rewardfiles"
          :on-remove="handleRemove3"
          :file-list="fileList"
          :auto-upload="false"
          :before-upload="showList3"
          :on-error="showError3"
          :on-success="showSuccess3"
        >
          <el-button slot="trigger" size="small" type="primary"
            >选取文件</el-button
          >
        </el-upload>
      </div>
      <el-button round id="publishLearnButton" @click="publishLearn"
        >发布</el-button
      >
    </div>
  </div>
</template>

<script>
import { publishLearning } from "../../api";
export default {
  data() {
    return {
      publishLearnText: "",
      dialogImageUrl: "",
      dialogVisible: false,
      photoList: [],
      videoList: [],
      fileList: [],
      imgUrl: "",
      videoUrl: "",
      fileUrl: "",
      counter1: 0,
      counter2: 0,
      counter3: 0,
      imgNum: 0,
      videoNum: 0,
      fileNum: 0,
      videoName: "",
      fileName: "",
      updatestate: true,
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
    async publishLearn() {
      if (this.$store.state.userName == "") this.$message.warning("请先登录");
      else if (this.publishRewardText == "")
        this.$message.warning("发布内容不可为空");
      else {
        this.$refs.upload1.submit();
        this.$refs.upload2.submit();
        this.$refs.upload3.submit();
        // this.$message.info(res.msg);
        // console.log(res)
        if (this.updatestate) this.$emit("child-ok");
      }
    },
    /**
     * 上传前统计图片数量
     */
    showList1(file) {
      this.imgNum = this.imgNum + 1;
      console.log("file:", file);
    },
    /**
     * 上传前统计视频数量
     */
    showList2(file) {
      this.videoNum = this.videoNum + 1;
      this.videoName = this.videoName + file.name + ",";
      console.log("name:", file.name);
    },
    /**
     * 上传前统计文件数量
     */
    showList3(file) {
      this.fileNum = this.fileNum + 1;
      this.fileName = this.fileName + file.name + ",";
      console.log("name:", this.fileName);
    },
    /**
     * 上传失败钩子
     */
    showError1(err, file, fileList) {
      console.log("error", err);
      this.$message.warning("图片上传失败");
      this.updatestate = false;
    },
    showError2(err, file, fileList) {
      console.log("error", err);
      this.$message.warning("视频上传失败");
      this.updatestate = false;
    },
    showError3(err, file, fileList) {
      console.log("error", err);
      this.$message.warning("文件上传失败");
      this.updatestate = false;
    },
    /**
     * 上传图片成功钩子
     */
    async showSuccess1(response, file, fileList) {
      console.log("nums:", this.imgNum);
      console.log("counter1:", this.counter1);
      console.log("success:", response);
      if (this.counter1 < this.imgNum) {
        this.imgUrl =
          this.imgUrl + "http://121.196.154.219:8083/images/" + response.detail + ",";
        console.log("imgurl:", this.imgUrl);
        this.counter1 = this.counter1 + 1;
      }
      console.log("nums1:", this.imgNum);
      console.log("counter1:", this.counter1);
      console.log("nums2:", this.videoNum);
      console.log("counter2:", this.counter2);
      console.log("nums3:", this.fileNum);
      console.log("counter3:", this.counter3);
      if (
        this.counter1 === this.imgNum &&
        this.counter2 === this.videoNum &&
        this.counter3 === this.fileNum
      ) {
        console.log("finish:", this.imgUrl);
        const res = await publishLearning(
          this.$store.state.userId,
          this.publishLearnText,
          this.imgUrl,
          this.videoUrl,
          this.fileUrl,
          this.videoName,
          this.fileName
        );
        console.log(res);
        this.publishLearnText = "";
        this.$refs.upload1.clearFiles();
        this.$refs.upload2.clearFiles();
        this.$refs.upload3.clearFiles();
        this.imgNum = 0;
        this.videoNum = 0;
        this.fileNum = 0;
        this.videoName = "";
        this.fileName = "";
        this.counter1 = 0;
        this.counter2 = 0;
        this.counter3 = 0;
      }
    },
    /**
     * 上传视频成功钩子
     */
    async showSuccess2(response, file, fileList) {
      console.log("nums:", this.videoNum);
      console.log("counter2:", this.counter2);
      console.log("success:", response);
      if (this.counter2 < this.videoNum) {
        this.videoUrl =
          this.videoUrl + "http://121.196.154.219:8083/videos/" + response.detail + ",";
        console.log("videoUrl:", this.videoUrl);
        this.counter2 = this.counter2 + 1;
      }
      if (
        this.counter1 === this.imgNum &&
        this.counter2 === this.videoNum &&
        this.counter3 === this.fileNum
      ) {
        console.log("finish:", this.publishLearnText);
        console.log("finish:", this.videoUrl);
        const res = await publishLearning(
          this.$store.state.userId,
          this.publishLearnText,
          this.imgUrl,
          this.videoUrl,
          this.fileUrl,
          this.videoName,
          this.fileName
        );
        console.log(res);
        this.publishLearnText = "";
        this.$refs.upload1.clearFiles();
        this.$refs.upload2.clearFiles();
        this.$refs.upload3.clearFiles();
        this.imgNum = 0;
        this.videoNum = 0;
        this.fileNum = 0;
        this.videoName = "";
        this.fileName = "";
        this.counter1 = 0;
        this.counter2 = 0;
        this.counter3 = 0;
      }
    },
    /**
     * 上传文件成功钩子
     */
    async showSuccess3(response, file, fileList) {
      console.log("nums:", this.fileNum);
      console.log("counter3:", this.counter3);
      console.log("success:", response);
      if (this.counter3 < this.fileNum) {
        this.fileUrl =
          this.fileUrl + "http://121.196.154.219:8083/files/" + response.detail + ",";
        console.log("fileUrl", this.fileUrl);
        this.counter3 = this.counter3 + 1;
      }
      console.log("nums1:", this.imgNum);
      console.log("counter1:", this.counter1);
      console.log("nums2:", this.videoNum);
      console.log("counter2:", this.counter2);
      console.log("nums3:", this.fileNum);
      console.log("counter3:", this.counter3);
      if (
        this.counter1 === this.imgNum &&
        this.counter2 === this.videoNum &&
        this.counter3 === this.fileNum
      ) {
        console.log("finish:", this.fileUrl);
        const res = await publishLearning(
          this.$store.state.userId,
          this.publishLearnText,
          this.imgUrl,
          this.videoUrl,
          this.fileUrl,
          this.videoName,
          this.fileName
        );
        console.log(res);
        this.publishLearnText = "";
        this.$refs.upload1.clearFiles();
        this.$refs.upload2.clearFiles();
        this.$refs.upload3.clearFiles();
        this.imgNum = 0;
        this.videoNum = 0;
        this.fileNum = 0;
        this.videoName = "";
        this.fileName = "";
        this.counter1 = 0;
        this.counter2 = 0;
        this.counter3 = 0;
      }
    },
    back() {
      this.$emit("child-back");
    },
    handleRemove1(file, fileList) {
      console.log(file, fileList);
    },
    handleRemove2(file, fileList) {
      console.log(file, fileList);
    },
    handleRemove3(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview1(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
.publishLearnBox {
  height: 100vh;
  width: 100vw;
  background: rgb(240, 240, 240);
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow:scroll;
}
.publishLearnMain {
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
.publishLearnMain span {
  font-size: 2rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-bottom: 1rem;
}
#publishLearn {
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
.upload-demo {
  margin: 2rem 0 0 3rem;
}
#publishLearnButton {
  margin-top: 1rem;
  width: 8rem;
}
</style>