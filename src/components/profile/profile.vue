<!--
* @FileDescription:个人信息组件，用于用户修改个人信息
-->
<template>
  <div class="profileMain">
    <div class="box">
      <div class="profileHeader">
        <v-touch v-on:touchstart="start">
          <img :src="$store.state.userImage" id="profileImg" />
        </v-touch>
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
        <el-button class="quit" type="danger">退出登录</el-button>
      </div>
    </div>
    <my-tabbar class="tabbar" activeIndex="4"></my-tabbar>
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
    start() {
      console.log("start");
    },
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
html {
  height: 100vh;
}
.profileMain {
  width: 100vw;
}
.profileHeader {
  height: 18rem;
  width: 100vw;
  background: url("http://www.shuoshuodaitupian.com/css/userpage_back.jpg")
    no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px lightgray solid;
  box-sizing: border-box;
}
#profileImg {
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  box-sizing: border-box;
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
#changePhoto {
  font-size: 1rem;
  padding: 0.75rem 1rem;
}
.el-upload__tip {
  font-size: 1rem;
}
.profileMain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 0.25rem;
  padding-bottom: 6rem;
  box-sizing: border-box;
}
#profileTitle {
  display: flex;
  align-items: center;
  height: 4rem;
  width: 100vw;
  padding-left: 2rem;
  font-size: 1.5rem;
  font-weight: bolder;
  border-bottom: 1px lightgray solid;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 3.5rem;
  padding-left: 2.5rem;
  white-space: nowrap;
  box-sizing: border-box;
}
.profileInputbox {
  border: lightgray solid 1px;
  width: 50vw;
  height: 2.5rem;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
}
.profileFooter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quit {
  margin: 0 !important;
  padding: 0 !important;
  margin-top: 1rem;
  width: 8rem;
  height: 3.5rem;
  outline: none;
  font-size: 1rem;
  box-sizing: border-box;
}
.profileSubmit {
  background: #409eff !important;
  color: white !important;
  padding: 0 !important;
  width: 8rem;
  height: 3.5rem;
  outline: none;
  font-size: 1rem;
  box-sizing: border-box;
}

.profileIntroduction {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 75%;
  padding-left: 2.5rem;
  white-space: nowrap;
}
#introduction {
  outline: none;
  border: lightgray solid 1px;
}
.tabbar {
  position: fixed;
  bottom: 0;
}
</style>