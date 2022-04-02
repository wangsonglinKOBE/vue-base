<template>
  <div>
    <h1>我是 App 组件</h1>
    <h2>{{user.name}} - {{user.age}} {{sayHello()}}</h2>
  </div>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  // 此处只是测试一下 setup, 暂时不考虑响应式的问题
  setup() {
    // 数据
    let user = {
      name: "kobe",
      age: 18,
    };

    // 方法
    const sayHello = () => {
      console.log(`我叫${user.name}, 我${user.age}岁了`);
    };

    // 返回一个对象
    return { user, sayHello };

    // 返回一个函数(渲染函数)
    // return () => h("h2", "苏科大");
  },
};
</script>
