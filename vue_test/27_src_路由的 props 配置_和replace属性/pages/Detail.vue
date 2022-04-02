<template>
  <ul>
    <!-- <li>接收：路由的 props 配置第一种写法: {{kobe}}</li> -->
    <!-- <li>接收：路由的 props 配置第二种写法:消息编号：{{id}}</li>
    <li>接收：路由的 props 配置第二种写法:消息标题：{{title}}</li> -->
    <li>接收：路由的 props 配置第三种写法:消息编号：{{id}}</li>
    <li>接收：路由的 props 配置第三种写法:消息标题：{{title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route);
  },
  // 接收：路由的 props 配置第一种写法(值为对象写法)
  // props: ['kobe']

  // 接收：路由的 props 配置第二种写法(值为布尔值写法)
  // props: ["id", "title"],

  // 接收：路由的 props 配置第三种写法(值为函数)
  props: ["id", "title"],
};
</script>
