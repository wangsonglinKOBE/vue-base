<template>
  <div>
    <h2>我是Home的内容</h2>
    <!-- 
    !!注意这里嵌套路由 路径先这样写，前面带上父路由, 当路由有名字时可以写成
    :to={name: 'message'},就不用带父路由了
    -->
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
