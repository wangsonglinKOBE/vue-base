import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'about',
      path: '/about',
      component: About,
      meta: { isAuth: true, title: '关于' }
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        {
          name: 'message',
          path: 'message',
          component: Message,
          meta: { isAuth: true, title: '消息' },
          children: [
            {
              name: 'detail',
              path: 'detail',
              component: Detail,
              meta: { isAuth: true, title: '详情' },
            }
          ]
        },
        {
          name: 'news',
          path: 'news',
          component: News,
          meta: { isAuth: true, title: '新闻' },

          // news 路由的独享路由守卫 (和前置守卫一样的，只是注意这里的写法哦)
          beforeEnter: (to, from, next) => {
            if (to.name === 'message' || to.name === 'news') {
              if (localStorage.getItem('name') === 'kobe') {
                next()
              } else {
                alert('本地存储的name不是kobe，请查看本地存储')
              }
            } else {
              next()
            }
          }

        }
      ]
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title || 'kobe_bryant'
})

export default router;