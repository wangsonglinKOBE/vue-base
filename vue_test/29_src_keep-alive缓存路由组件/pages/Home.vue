<template>
  <div>
    <h2>我是Home的内容</h2>
    <router-link :to="{name: 'message'}">message</router-link>&nbsp;&nbsp;
    <router-link :to="{name: 'news'}">news</router-link>

    <!-- keep-alive: 让不展示的路由组件保持挂载，不被销毁 -->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>

    <!-- 缓存多个路由组件，使用v-bind绑定，引号里的内容就被视作js解析，直接写成数组 -->
    <keep-alive :include="['News', 'Message']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
