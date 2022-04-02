<template>
  <div>
    <h2>我是Home的内容</h2>
    <router-link :to="{name: 'message'}">message</router-link>&nbsp;&nbsp;
    <router-link :to="{name: 'news'}">news</router-link>

    <!-- keep-alive: 让不展示的路由组件保持挂载，不被销毁 -->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
