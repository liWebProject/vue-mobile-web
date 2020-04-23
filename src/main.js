
const Vue = require('vue')
const axios = require('axios')
const Cookie = require('js-cookie')
const VueTouch = require('vue-touch')

import App from './App'
import router from '@/router'
import store from './store/index' //引用VUE
import * as filters from './filters' // 全局 filters
import './assets/icons' // icon
import IconSvg from './components/SvgIcon'  //引入svg组件
import FastClick from 'fastclick'  //引入快点

import { ToastPlugin, WechatPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin} from 'vux'  // 按需引用vux组件

Vue.use(ToastPlugin)
Vue.use(WechatPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)

Vue.component('icon-svg', IconSvg)  //全局注册icon-svg

FastClick.attach(document.body); // 全局绑定快速点击

// mock 模拟数据
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }


// VueTouch
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
	threshold: 50 //手指左右滑动距离
}

//axios不能通过Vue.use()安装插件，需要在原型上进行绑定
Vue.prototype.$axios = axios;

// 注册全局 filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 是否开启调试
Vue.config.productionTip = false;
Vue.config.devtools = false;


/* 实例化 Vue */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
