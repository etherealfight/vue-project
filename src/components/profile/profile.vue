<!--
* @FileDescription:个人信息组件，用于用户修改个人信息
-->
<template>
  <div class="profileMain">
    <div class="box">
      <div class="profileHeader">
        <img :src="$store.state.userImage" id="profileImg" />
        <el-upload
          class="upload-demo"
          action="http://121.196.154.219:8080/uploadfile"
          :show-file-list="false"
          :on-error="showError"
          :on-success="showSuccess"
        >
          <el-button size="small" type="primary" id="changePhoto"
            >点击上传头像</el-button
          >
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
        <span id="profileUsername">{{ $store.state.userName }}</span>
      </div>

      <div id="profileTitle">账户设置</div>

      <div class="profileMiddle">
        <div class="item">
          性别：
          <input
            type="radio"
            v-model="$store.state.sex"
            value="1"
            style="margin-left: 3px; margin-right: 3px"
          />男
          <input
            type="radio"
            v-model="$store.state.sex"
            value="2"
            style="margin-left: 3px; margin-right: 3px"
          />女
          <input
            type="radio"
            v-model="$store.state.sex"
            value="0"
            style="margin-left: 3px; margin-right: 3px"
          />其他
        </div>
        <div class="item">
          <label for="nickNameBox">用户名：</label>
          <input
            type="text"
            placeholder="请输入昵称"
            class="profileInputbox"
            v-model="$store.state.nickName"
            style="padding-left: 5px"
          />
        </div>
        <div class="item">
          <label for="nickNameBox">签名：</label>
          <input
            type="text"
            placeholder="请输入签名"
            class="profileInputbox"
            v-model="$store.state.sign"
            style="padding-left: 5px"
          />
        </div>
        <div class="profileIntroduction">
          <label for="nickNameBox">简介：</label>
          <textarea
            name="简介"
            id="introduction"
            v-model="$store.state.introduction"
            cols="30"
            rows="10"
            style="resize: none; padding: 5px"
          ></textarea>
        </div>
      </div>

      <div class="profileFooter">
        <el-button class="profileSubmit">提交</el-button>
      </div>
    </div>
    <my-tabbar class="tabbar" activeIndex="3"></my-tabbar>
  </div>
</template>

<script>
import my_tabbar from "../home/my_tabbar";
export default {
  data() {
    return {
      userImg: this.$store.state.userImage,
    };
  },
  components: {
    "my-tabbar": my_tabbar,
  },

  methods: {
    // async previewFiles(event) {
    //   console.log(event.target.files[0]);
    //   const res = await uploadImg(event.target.files[0]);
    //   console.log(res);
    // },
    showError(err, file, fileList) {
      console.log(err);
    },
    async showSuccess(response, file, fileList) {
      console.log(response);
      this.$store.commit("changeUserImage", { userImage: response.detail });
      let that = this;
      console.log(this.$store.state.userImage);
      const res = await update(
        that.$store.state.userName,
        that.$store.state.nickName,
        that.$store.state.sex,
        that.$store.state.sign,
        that.$store.state.introduction,
        that.$store.state.userImage
      );
      console.log(res);
      this.$message.info(response.msg);
    },
    /**
     * 监听修改按钮，发送修改后的用户信息
     */
    async update() {
      let that = this;
      const res = await update(
        that.$store.state.userName,
        that.$store.state.nickName,
        that.$store.state.sex,
        that.$store.state.sign,
        that.$store.state.introduction,
        that.$store.state.userImage
      );
      this.$store.commit("changeStates", {
        sex: that.$store.state.sex,
        nickname: that.$store.state.nickName,
        sign: that.$store.state.sign,
        introduction: that.$store.state.introduction,
      });
      console.log(res);
      this.$message.info("修改成功");
    },
  },
};
</script>

<style scoped>
.profileMain {
  box-sizing: border-box;
  width: 100vw;
  height: 80vh;
  overflow: hidden;
}
.profileHeader {
  height: 20rem;
  width: 100vw;
  background: url("http://www.shuoshuodaitupian.com/css/userpage_back.jpg")
    no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px lightgray solid;
}
#profileImg {
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
}
#profileUsername {
  font-size: 2rem;
  font-family: "宋体";
  padding-top: 1rem;
}
.upload-demo {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
}

.profileMain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box {
  overflow: hidden;
  top: 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 0.25rem;
}
#profileTitle {
  display: flex;
  align-items: center;
  height: 8vh;
  width: 100vw;
  padding-left: 2rem;
  font-size: 1.5rem;
  font-weight: bolder;
  border-bottom: 1px lightgray solid;
}
.profileMiddle {
  display: flex;
  width: 100vw;
  margin: 0;
  font-size: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
}
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 3.5rem;
  padding-left: 2.5rem;
  white-space: nowrap;
}
.profileInputbox {
  border: lightgray solid 1px;
  width: 50vw;
  height: 2.5rem;
  outline: none;
}
.profileSubmit {
  background: #409eff !important;
  color: white !important;
  padding: 0 !important;
  width: 8rem;
  height: 3.5rem;
  outline: none;
}

.profileIntroduction {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 75%;
  padding-left: 2.5rem;
  white-space: nowrap;
}
#introduction {
  outline: none;
}
.tabbar {
  position: fixed;
  bottom: 0;
}
</style>