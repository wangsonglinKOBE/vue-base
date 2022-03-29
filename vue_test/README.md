## Vue 脚手架 webpack 相关配置(默认配置、修改配置)
Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpack 配置，请执行：vue inspect > output.js
使用 vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh/config/

## 关于 vue.config.js：
配置vue脚手架的文件，如果对这个脚手架文件有过更改，则需要重启项目配置才能生效

## ref属性
1、被用来给节点或者子组件注册引用信息(id的替代者)
2、应用在 html 元素上获取的是真实 DOM元素，应用在组件标签上是组件实例对象vc
3、使用方式：02_src_ref属性 文件夹中可见


## 配置项 props
功能：让组件接收外部传过来的数据，可以父传子，也可以子传父(传函数类型的 props)
1、传递数据： <Demo name='xxx'>
2、接收数据：三种props的写法 【03_src_props配置项】 文件夹中可见
备注：props 是只读的，Vue底层会监测你对 props 的修改，如果进行了修改，就会发出警告，
      若业务需求确实需要修改，那么请复制 props 的属性到 data 中一份，然后去修改data中的数据


## 配置项 mixin(混入)
1、功能：可以把多个组件共用的配置提取成一个混入对象
2、使用方式：【04_src_mixin配置项】 文件夹中可见
          定义混入：
           {
             data() {....},
             methods: {...},
             ....
           }
          使用：
           1、全局混入： Vue.mixin(xxx)
           2、局部混入： mixins : [xxx]


## 插件 plugins
1、功能：用于增强 Vue 构造函数
2、本质：包含 install 方法的一个对象，install 的第一个参数是 Vue, 第二个以后的参数是插件使用者传递的数据
3、定义插件、使用插件：【05_src_plugins_Vue插件】文件夹中可见


## 组件的自定义事件
1、一种组件间通信的方式，适用于：子组件 ===> 父组件(子传父)
2、使用场景：A是父组件，B是子组件，B要给A传数据，那么就在A中给B绑定自定义事件(事件的回调在 A 中)
3、绑自定义事件：
   a: 第一种方式：在父组件中： <Demo @ooo='test'/> 或 <Demo v-on:ooo='test'/>
   b: 第二种方式：在父组件中： <Demo ref='demo'/> mounted() { this.$refs.demo.$on('ooo', this.test【回调函数】) }
   c: 若想只触发一次使用 once 修饰符或者 $once
4、触发自定义事件：this.$emit('ooo', 参数)
5、解绑自定义事件：this.$off('ooo')
6、组件标签也可以绑定DOM事件，需要使用 native 修饰符
   

## 全局事件总线：任意组件间通信
1、一种组件间通信的方式，适用于任意组件间通信
2、安装全局事件总线：
  new Vue({
    beforeCreate() {
      Vue.prototype.$bus = this
    }
  })
3、使用事件总线
  a: 接收数据：A组件想用数据，则在 A 组件中 给 $bus 绑定自定义事件，事件回调在 A 自身
     mounted(){
       this.$bus.$on('ooo', (val) => {})
     }
  b: 提供数据 在 B 组件中调用事件传入数据 this.$bus.$emit('ooo', 数据)
4、最好在 beforeDestroy钩子中，用 $off 去解绑当前组件所用到的事件


## 消息订阅与发布 (pubsub)
1、一种组件间通信的方式，适用于任意组件间通信
2、使用步骤：
  a:安装pubsub： npm i pubsub-js
  b:引入：import pubsub from 'pubsub-js'
  c:接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身
    mounted() {
      rhis.pid = pubsub.subscribe('xxx', () => {}) //订阅消息
    }
  d:提供数据：pubsub.publish('xxx', 数据)
  e:最好在 beforeDestroy 钩子中，用 pubsub.unsubscribe(this.pid) 去取消订阅


## nextTick
1、语法：this.$nextTick(回调函数)
   比如下面一开始是没有input框的，等input节点更新到页面后我们在给他获取焦点的操作
   change() {
     ...
     this.$nextTick(() => {
       this.$refs.input.focus()
     })
   }
2、作用：nextTick所指定的回调会在DOM节点更新后再执行，在下一次DOM更新结束后执行其指定的回调
3、什么时候用：当改变数据后，要基于更新后的新的DOM进行某些操作时，要在nextTick所指定的回调函数中执行