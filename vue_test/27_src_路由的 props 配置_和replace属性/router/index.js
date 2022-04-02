import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

export default new VueRouter({
  routes: [
    { path: '/about', component: About },
    {
      path: '/home',
      component: Home,
      children: [
        {
          name: 'message',
          path: 'message',
          component: Message,
          children: [
            {
              name: 'detail',
              // 测试params传参下的 props 配置
              // path: 'detail/:id/:title',

              // 测试query传参下的 props 配置
              path: 'detail',
              component: Detail,

              /* 路由的 props 配置 */
              // 第一种写法：props 值为对象，该对象中所有的key-vaule的组合最终都会通过 props 传递给该路由对应的组件
              // props: { kobe: 'kobe-bryant' }

              // 第二种写法：props 值为布尔值,布尔值为 true,则把路由收到的所有params参数通过 props 传给该路由对应的组件,
              // 这种写法仅支持 params 传参
              // props: true

              // 第三种写法：props 值为函数，函数接收 $route 参数，所以 params 传参和 query 传参都支持，返回的是一个对象
              // 返回对象中的每一组 key-value 都会通过 props 传给该路由对应的组件
              /*  props($route) {
                 return {
                   id: $route.query.id,
                   title: $route.query.title
                 }
               } */
              // 一样可以使用解构赋值的写法哦: 连续解构
              props({ query: { id, title } }) {
                return {
                  id: id,
                  title: title
                }
              }
            }
          ]
        },
        { name: 'news', path: 'news', component: News }
      ]
    }
  ]
})