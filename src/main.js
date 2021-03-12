import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import VueTouch from 'vue-touch'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import ElementUI, {
  Message
} from 'element-ui'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

Vue.use(VueVideoPlayer)
Vue.use(VueAwesomeSwiper)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(preview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


const showMessage = Symbol('showMessage')

let messageInstance = null;
class DonMessage {
  success(options, single = true) {
    this[showMessage]('success', options, single)
  }
  warning(options, single = true) {
    this[showMessage]('warning', options, single)
  }
  info(options, single = true) {
    this[showMessage]('info', options, single)
  }
  error(options, single = true) {
      this[showMessage]('error', options, single)
    }
    [showMessage](type, options, single) {
      if (messageInstance && single) {
        messageInstance.close() 
      }
      messageInstance = Message[type](options) 
    }
}
Vue.use(ElementUI)
Vue.prototype.$message = new DonMessage()