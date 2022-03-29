import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

// 弄个 vc 放在 Vue 原型上
// 创建一个VueComponent构造函数
// const Demo = Vue.extend({})
// 创建一个VueComponent构造函数的实例对象 vc
// const d = new Demo()
// 将这个 vc 放到 Vue 的原型对象上，供所有组件使用，并且这个 x 也能使用 vc 可以使用的 $on $emit $off了
// Vue.prototype.x = d


// 直接放在 vm 身上
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //这里的 this 就是 vm 【安装全局事件总线】
    // 这个 $bus 就是一个放在 Vue 原型上的 vm 所以全局所有的 vc 都能使用它
  },
}).$mount('#app')