import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

const router = new VueRouter({
  routes: [
    {
      name: 'about',
      path: '/about',
      component: About,
      meta: {title: '关于'}
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      meta: {title: '主页'},
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
        }
      ]
    }
  ]
})

// 配置全局前置路由守卫
// 全局前置路由守卫————意思是每次切换之前会被调用，和初始化时会被调用
// router.beforeEach((to, from, next) => {
//   // to 和 from 都是路由器(router)中的每一个路由(route), to 是要去的 route, from是来自哪里的 route
//   console.log(to, from);

//   // 如果是去名字为 message 和 news 的路由，则效验本地存储，如果是去其他路由则放行
//   if (to.name === 'message' || to.name === 'news') {
//     if (localStorage.getItem('name') === 'kobe') {
//       next()
//     } else {
//       alert('本地存储的name不是kobe，请查看本地存储')
//     }
//   } else {
//     next()
//   }
// })


// 当我们需要判断权限的路由很多时，不可能一直去 if(to.name='xxx' || to.name='xxx' || to.name='xxx' || ...)
// 所以 route 给我们提供了一个路由的 meta 属性,叫做路由元,我们给需要做权限的路由加上路由元，使用路由元来判断就很方便
router.beforeEach((to, from, next) => {
  console.log('前置路由守卫', to, from);
  if (to.meta.isAuth) { // 使用 meta 判断是否需要鉴权
    if (localStorage.getItem('name') === 'kobe') {
      next()
    } else {
      alert('本地存储的name不是kobe，请查看本地存储')
    }
  } else {
    next()
  }
})


// 全局后置路由守卫————意思是每次切换之后会被调用，和初始化时会被调用
router.afterEach( (to, from) => {
  console.log('后置路由守卫', to, from); //没有next，这里next没有意义了，
  // 这里可以做一些已经被前置路由守卫放行或者处理过之后的一些操作
  document.title = to.meta.title || 'kobe_bryant'
})

export default router;