<!--
* @FileDescription:登录页面，用于用户登录以及获取登录用户信息
-->
<template>
  <div class="login_page">
    <div class="login">
      <h2>用户登录</h2>
      <div class="login_box">
        <input type="text" required v-model="username" /><label>账号</label>
      </div>
      <div class="login_box">
        <input
          type="password"
          required="required"
          v-model="password"
          @keyup.enter="login"
        /><label>密码</label>
      </div>
      <div class="loginFooter">
        <button class="loginButton" @click="login">登录</button>
        <button class="loginButton" @click="regist">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import { login1, login2 } from "../../api";
export default {
  data() {
    return {
      username: "", //用户名
      password: "", //密码
    };
  },
  methods: {
    /**
     * 进行登录操作
     */
    async login() {
      let id = Number(this.username);
      console.log(isNaN(id));
      let res = "";
      if (isNaN(id)) {
        res = await login2(this.username, this.password);
      } else {
        res = await login1(this.username, this.password);
      }
      console.log(res);
      if (res.success) {
        this.$message.info("登录成功");
        sessionStorage.setItem("loginState", true);
        sessionStorage.setItem("userName", res.detail.username);
        sessionStorage.setItem("userId", res.detail.userid);
        sessionStorage.setItem("userMail", res.detail.usermail);
        sessionStorage.setItem("sex", res.detail.gender);
        sessionStorage.setItem("sign", res.detail.signature);
        sessionStorage.setItem("introduction", res.detail.introduction);
        sessionStorage.setItem("userImage", res.detail.headportrait);
        this.$store.commit("initialState", {
          username: res.detail.username,
          userId: res.detail.userid,
          userMail: res.detail.usermail,
          sex: res.detail.gender,
          sign: res.detail.signature,
          introduction: res.detail.introduction,
          userImage: res.detail.headportrait,
        });
        this.$router.push({ path: "./main" });
      } else {
        this.$message.warning(res.msg);
      }
    },
    /**
     * 跳转到注册页面
     */
    regist() {
      this.$router.push({ path: "/regist" });
    },
  },
};
</script>

<style  scoped>
.login_page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(139, 157, 196, 0.767), #2c3c50);
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  padding: 2rem;
  background-color: rgba(53, 52, 52, 0.2);
  box-shadow: 0 0.75rem 1.25rem rgba(0, 0, 0, 0.4);
}
h2 {
  color: #fff;
  margin-bottom: 1.5rem;
}
.login_box {
  position: relative;
  width: 100%;
  font-size: 1.5rem;
}
.login_box input {
  outline: none;
  border: none;
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
  color: #fff;
  font-size: 1.5rem;
  border-bottom: 0.05rem solid #fff;
  background-color: transparent;
}
.login_box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem 0;
  color: #fff;
  pointer-events: none;
  transition: all 0.5s;
  font-size: 1.5rem;
}
.login_box input:focus + label,
.login_box input:valid + label {
  top: -1.75rem;
  color: lightgray;
  font-size: 1.25rem;
}
.loginFooter {
  display: flex;
  font-size: 1.5rem;
}
.loginButton,
.loginButton:hover,
.loginButton:active {
  font-size: 1.5rem;
  outline: none;
  padding: 0.5rem;
  border: 1px solid transparent;
  background: transparent;
  color: #fff;
}
.loginButton:first-child {
  margin-right: 0.5rem;
}
</style>