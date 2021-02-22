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
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :limit="9"
          :file-list="photoList"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
        <el-upload
          class="upload-demo"
          ref="upload2"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
          :accept="mp4"
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
export default {
  data() {
    return {
      publishLearnText: "",
      dialogImageUrl: "",
      dialogVisible: false,
      photoList: [],
      fileList: [],
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
      let that = this;
      if (this.$store.state.userName == "") this.$message.warning("请先登录");
      else if (that.publishLearnText == "")
        this.$message.warning("发布内容不可为空");
      else {
        console.log(this.publishLearnText);
        this.$emit("child-ok");
        this.$refs.upload.submit();
        this.$refs.upload2.submit();
        this.publishLearnText = "";
        this.photoList = [];
        this.fileList = [];
        // this.$message.info(res.msg);
        // console.log(res)
      }
    },
    back() {
      this.$emit("child-back");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
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