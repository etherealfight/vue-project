<template>
  <div class="login_page">
    <div class="login">
      <h2>用户登录</h2>
      <div class="login_box">
        <input type="text" required /><label>账号</label>
      </div>
      <div class="login_box">
        <input type="password" required="required" /><label>密码</label>
      </div>
      <div class="loginFooter">
        <button class="loginButton" @click="login">登录</button>
        <button class="loginButton" @click="regist">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../../api";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let that = this;
      const res = await login(that.username, that.password);
      console.log(res);
      this.$router.push({ path: "./main" });
    },
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
  width: 20rem;
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
}
.login_box input {
  outline: none;
  border: none;
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
  color: #fff;
  font-size: 0.75rem;
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
}
.login_box input:focus + label,
.login_box input:valid + label {
  top: -1.5rem;
  color: lightgray;
  font-size: 0.5rem;
}
.loginFooter {
  display: flex;
}
.loginButton,
.loginButton:hover,
.loginButton:active {
  font-size: 0.75rem;
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