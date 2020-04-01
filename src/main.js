import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

import toast from 'components/common/toast'

Vue.config.productionTip = false

// 设置bus
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
// 设置300s延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
