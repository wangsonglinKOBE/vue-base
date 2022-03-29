/* 该文件是整个项目的入口文件 */

// 完整版 vue 
// import Vue from 'vue/dist/vue' 

// 引入 Vue(不包括编译器的版本)
import Vue from 'vue'

// 引入 App(根组件) 组件，它是所有组件的父组件
import App from './App.vue'

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

let a = 1

// 创建 Vue 实例对象 => vm
new Vue({
  // el: '#app',

  // 下面这行代码一会解释,完成了这个功能: 将 App 组件放入容器中，疑问是这里我并没有看到哪儿注册 App 组件
  render: h => h(App),


  // 如果引入的是一个不能解析 template 配置项的 Vue,就需要用 render 函数渲染
  /*   render 完整写法
  render(createElement){
      return createElement('h1', 'kobe')
    }
  */

  // render简写
  // render: createElement => createElement('h1', 'kobe')

  // template: `<h1>你好啊</h1>`,
  // components: { App }
}).$mount('#app')

/*
vm.$mount('#app') , 就相当于上面配置的 el 属性
*/

/*
  为啥 Vue 要弄一个删减版本的 vue 给脚手架用呢？
  1.Vue由两个部分组成，第一个就是 Vue的核心(生命周期、处理事件等),第二个就是Vue的模板解析器就是 解析 template 里的东西
  2.Vue 模板解析器基本占了 Vue三分之一的体积
  3.同时还存在一个问题，当项目写完了，交给 webpack 进行打包，如果vue还有这个模板解析器在里面一下打包了，
    当在开发的时候 Vue 模板解析器还会帮我们解析啥的，但是借助 webpack ，已经可以把 .vue翻译成js文件了，浏览器已经都认识了
    这么看来，此处 vue 模板解析器是不是就显得很多于了呢

  那么问题又来了？
  我其他组件里面都写了 template 标签啊，怎么又可以解析啊？
  答案是 vue 专门安装了一个插件来专门解析这种组件中的 template 标签
*/

/* 
  关于不同版本的vue
    1.vue.js与vue.runtime.xxx.js的区别
      (1).vue.js就是完整版的 Vue ,包含：核心功能 + 模板解析器
      (2).vue.runtime.xxx.js是运行版本的 vue, 只包含：核心功能：没有模板解析器

    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用 template 配置项，需要使用
      render函数接收到的 createElement 函数去指定具体内容。
*/