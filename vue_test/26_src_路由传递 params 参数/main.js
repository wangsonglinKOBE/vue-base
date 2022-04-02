import Vue from 'vue'
import App from './App'

// 引入 VueRouter
import VueRouter from 'vue-router'

// 引入路由器
import router from './router'

// 应用 VueRouter 插件
Vue.use(VueRouter)

Vue.config.productionTip = false

// 直接放在 vm 身上
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')