// 该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'

// 创建一个路由器
export default new VueRouter({
  routes: [
    { path: '/about', component: About },
    {
      path: '/home', 
      component: Home,
      children: [
        // !!注意这里 子路由的 path 属性前面不用加 / 斜杠，因为底层在遍历的时候会加
        {path: 'message', component: Message},
        {path: 'news', component: News}
      ]
    }
  ]
})