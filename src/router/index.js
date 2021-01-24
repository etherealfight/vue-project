import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login/login'
import regist from '../components/login/regist'
import main from '../components/home/main'
import my_navbar from '../components/home/my_navbar'
import profile from '../components/profile/profile'
import newsdetail from '../components/news/newsDetail'
import helper from '../components/helper/helper'
import rewardList from '../components/helper/rewardPlatform/rewardList'
import learningList from '../components/helper/learningPlatform/learningList'
import rewardDetail from '../components/helper/rewardPlatform/rewardDetail'
import chat from '../components/chat/chat'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    component: main
  },
  {
    path: '/my_navbar',
    component: my_navbar
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/regist',
    name: 'regist',
    component: regist
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/newsdetail',
    name: 'newsdetail',
    component: newsdetail
  },
  {
    path: '/helper',
    component: helper,
    redirect: '/helper/rewardList',
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
  {
    path: '/rewardDetail',
    name: 'rewardDetail',
    component: rewardDetail
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router