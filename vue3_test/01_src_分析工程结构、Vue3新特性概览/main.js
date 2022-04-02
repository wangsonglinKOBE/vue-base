// 引入的不再是2版本中的 Vue 构造函数了，引入的是一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'


// 创建应用实例对象——app(类似于之前2中的vm,但比 vm 更 '轻')，然后挂载
createApp(App).mount('#app')
