import Vue from 'vue'
import App from './App'

// 引入插件
import plugins from './plugins'
// 使用插件
Vue.use(plugins, 1, 2)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')