export default {
  install(Vue, a, b) {
    console.log('我是插件plugins中的install方法，在main.js中使用Vue.use()调用我');
    console.log(Vue, a, b); //第一个参数是 Vue 构造函数，vm的缔造者,后面的参数在 main.js 中使用 Vue.use(plugins, a, b)时传入

    // 插件里面可以配置很多关于 Vue 构造函数的东西，可以配置全局过滤器，全局自定义指令，全局mixin, 给Vue原型上添加方法属性、等等

    // 配置全局过滤器(在 school 组件中验证使用)
    Vue.filter('mySlice', value => {
      return value.slice(0, 4)
    })

    // 全局指令(在 student 组件中验证使用)
    Vue.directive('fbind', {
      bind(element, binding) { //bind调用时机: 指令与元素成功绑定时
        console.log('bind');
        element.value = binding.value; //元素 value 值绑定数据
      },
      inserted(element, binding) { // inserted调用时机：指令所在元素被插入页面时
        console.log('inserted');
        element.focus() //获取焦点
      },
      update(element, binding) { // 指令所在的模板被重新解析时
        console.log('update');
        element.value = binding.value; //继续同步更新节点的 value
        element.focus() //更新了继续获取焦点
      }
    })

    // 定义全局混入 (在vue-devtools中查看所有的 vc vm身上的data)
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200
        }
      }
    })

    // 给Vue构造函数原型上添加一个方法 供 vm 和 vc 使用 (在school中使用了)
    Vue.prototype.hello = () => alert('我是插件中定义在 Vue 原型上的方法')
  }
}