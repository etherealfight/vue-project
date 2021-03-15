import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userMail: '', //邮箱
    userId: "37974253", //用户ID
    userName: 'quan', //用户名
    sex: 0, //用户性别
    loginState: false, //登录状态
    userImage: "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg", //用户头像
    sign: '555555555', //用户签名
    introduction: '6666666666', //用户简介
    currentId: '', //当前页面用户id
  },
  mutations: {
    /**
     * 初始化数据
     */
    initialState(state, payload) {
      state.userMail = payload.usermail
      state.userName = payload.username;
      state.sex = payload.sex;
      state.sign = payload.sign;
      state.introduction = payload.introduction;
      state.userImage = payload.userImage;
      state.userId = payload.userId;
      state.loginState = true;
    },
    /**
     * 更新数据
     */
    changeStates(state, payload) {
      state.userName = payload.username;
      state.sex = payload.sex;
      state.sign = payload.sign;
      state.introduction = payload.introduction;
      state.userImage = payload.userImage;
    },
    /**
     * 更改当前页用户id
     */
    changeId(state, payload) {
      state.currentId = payload.currentId;
    },
    /**
     * 更改登录状态
     */
    changeLoginStates(state, payload) {
      state.loginState = payload.loginState;
    },
    /**
     * 修改用户头像
     */
    changeUserImage(state, payload) {
      state.userImage = "http://121.196.154.219:8083/heads/" + payload.userImage;
    },
  },
  actions: {},
  modules: {}
})