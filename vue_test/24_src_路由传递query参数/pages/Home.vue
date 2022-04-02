<template>
<div>
  <h2>我是Home的内容</h2>
  <!-- !!注意这里嵌套路由 路径先这样写，前面带上父路由 -->
  <router-link to="/home/message">message</router-link> &nbsp;&nbsp;
  <router-link to="/home/news">news</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Home",
};
</script>
