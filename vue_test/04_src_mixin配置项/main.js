import Vue from 'vue'
import App from './App'

// 引入一个混合(混入)配置 【全局混合 mixin 】,表示给 所有的 vc 都混入该配置
import {mixinMethods, mixinData} from './mixin'
Vue.mixin(mixinMethods)
Vue.mixin(mixinData)

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      msgMain: '我是main.js中的 vm'
    }
  },
  render: h => h(App)
}).$mount('#app')