<template>
  <div>
    <h2>我是Home的内容</h2>
    <router-link :to="{name: 'message'}">message</router-link>&nbsp;&nbsp;
    <router-link :to="{name: 'news'}">news</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
