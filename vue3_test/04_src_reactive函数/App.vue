<template>
  <div>
    <h1>我是 App 组件</h1>
    <h2>{{user.name}} - {{user.age}}</h2>
    <button @click="changeInfo">更新数据</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {

    let user = reactive({ name: "kobe", age: 18 });

    function changeInfo() {
      user.name = 'tom'
      console.log(user);
    }

    // 返回一个对象
    return { user, changeInfo };
  },
};
</script>
