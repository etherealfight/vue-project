import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login/login'
import regist from '../components/login/regist'
import main from '../components/home/main'
import my_navbar from '../components/home/my_navbar'
Vue.use(VueRouter)

const routes = [
  {
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router