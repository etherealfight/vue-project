import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store/index"
import login from '../components/login/login'
import regist from '../components/login/regist'
import main from '../components/home/main'
import profile from '../components/profile/profile'
import newsdetail from '../components/news/newsDetail'
import helper from '../components/helper/helper'
import rewardList from '../components/helper/rewardPlatform/rewardList'
import learningList from '../components/helper/learningPlatform/learningList'
import rewardDetail from '../components/helper/rewardPlatform/rewardDetail'
import learningDetail from '../components/helper/learningPlatform/learningDetail'
import videoPlayerPage from '../components/helper/learningPlatform/videoPlayerPage'
import chat from '../components/chat/chat'
import chatDetail from '../components/chat/chatDetail'
import personalPage from '../components/profile/personalPage'
import mypersonalPage from '../components/profile/mypersonalPage'


Vue.use(VueRouter)

const routes = [
  //根路由，重定向到首页
  {
    path: '/',
    redirect: '/main'
  },
  //首页
  {
    path: '/main',
    component: main
  },
  //登录页
  {
    path: '/login',
    name: 'login',
    component: login
  },
  //注册页
  {
    path: '/regist',
    name: 'regist',
    component: regist
  },
  //个人信息页
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  //新闻详情页
  {
    path: '/newsdetail',
    name: 'newsdetail',
    component: newsdetail
  },
  //小帮手页
  {
    path: '/helper',
    component: helper,
    redirect: '/helper/rewardList',
    children: [
      //小帮手悬赏子路由页
      {
        path: 'rewardList',
        component: rewardList
      },
      //小帮手学习资源子路由页
      {
        path: 'learningList',
        component: learningList
      }
    ]
  },
  //悬赏详情页
  {
    path: '/rewardDetail',
    name: 'rewardDetail',
    component: rewardDetail
  },
  //学习资源详情页
  {
    path: '/learningDetail',
    name: 'learningDetail',
    component: learningDetail
  },
  //学习资源视频播放页
  {
    path: '/videoPlayerPage',
    name: 'videoPlayerPage',
    component: videoPlayerPage
  },
  //用户主页
  {
    path: '/personalPage',
    name: 'personalPage',
    component: personalPage,
    redirect: '/personalPage/rewardList',
    children: [{
        path: 'rewardList',
        component: rewardList
      },

      {
        path: 'learningList',
        component: learningList
      }
    ]
  },
  //用户个人主页
  {
    path: '/mypersonalPage',
    name: 'mypersonalPage',
    component: mypersonalPage,
    redirect: '/mypersonalPage/rewardList',
    children: [{
        path: 'rewardList',
        component: rewardList,
      },
      {
        path: 'learningList',
        component: learningList
      }
    ]
  },
  //聊天列表页
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
  //聊天详情页
  {
    path: '/chatDetail',
    name: 'chatDetail',
    component: chatDetail
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

router.beforeEach(async (to, from, next) => {
  if (sessionStorage.getItem("loginState") != null && !store.state.loginState) {
    store.state.loginState = sessionStorage.getItem("loginState");
    store.state.userName = sessionStorage.getItem("userName");
    store.state.userId = sessionStorage.getItem("userId");
    store.state.userMail = sessionStorage.getItem("userMail");
    store.state.sex = sessionStorage.getItem("sex");
    store.state.sign = sessionStorage.getItem("sign");
    store.state.introduction = sessionStorage.getItem("introduction");
    store.state.userImage = sessionStorage.getItem("userImage");

    console.log(sessionStorage.getItem("userName"), store.state.userName);
    console.log("state", store.state.loginState);
  }
  console.log("state", store.state.loginState);
  if (to.name !== 'regist' && to.name !== 'login' && !sessionStorage.getItem("loginState")) {
    next({
      name: "login"
    });
  } else {
    next();
  }
});

export default router