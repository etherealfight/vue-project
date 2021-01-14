import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userMail: '', //邮箱
    userId: '', //用户ID
    userName: '', //用户名
    sex: 0, //用户性别
    loginState: false, //登录状态
    userImage: "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg", //用户头像
    sign: '', //用户签名
    introduction: '', //用户简介
  },
  mutations: {
    initialState(state, payload) {
      state.userMail = payload.usermail
      state.userName = payload.username;
      state.sex = payload.sex;
      state.sign = payload.sign;
      state.introduction = payload.introduction;
      state.userImage = payload.userImage;
      state.loginState = true;
    },
    changeState(state, payload) {
      state.userName = payload.username;
      state.sex = payload.sex;
      state.sign = payload.sign;
      state.introduction = payload.introduction;
      state.userImage = payload.userImage;
    },
  },
  actions: {},
  modules: {}
})