// 在入口文件中创建Vue实例，new Vue => vm 
// vm 只和 App 根组件对话
import App from './App.vue'

new Vue({
  el: '#root',
  template: `<App></App>`,
  components: { App }
})