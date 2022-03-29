import Vue from 'vue'
import App from './App'

// 引入 store, 并配置在 vm 身上
import store from './store'

Vue.config.productionTip = false

// 直接放在 vm 身上
new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')