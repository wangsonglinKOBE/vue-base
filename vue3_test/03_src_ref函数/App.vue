<template>
  <div>
    <h1>我是 App 组件</h1>
    <h2>{{user.name}} - {{user.age}}</h2>
    <button @click="changeInfo">更新数据</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let user = ref({ name: "kobe", age: 18 });

    // 方法
    function changeInfo() {
      // user.value = { name: "tom", age: 88 };
      user.value.name= 'jerry'
      console.log(user);
    }

    // 返回一个对象
    return { user, changeInfo };
  },
};
</script>
