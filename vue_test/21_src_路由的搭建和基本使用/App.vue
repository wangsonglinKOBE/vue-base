<template>
  <div>
    <!-- vue中借助 router-link 标签实现路由的切换 -->
    <router-link tag="button" to="/about">About</router-link>
    <br />
    <br />
    <router-link to="/home">Home</router-link>

    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
