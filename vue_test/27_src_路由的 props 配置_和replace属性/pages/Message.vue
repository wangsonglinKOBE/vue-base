<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 传递params参数下，测试路由的 props 配置 -->
        <!-- <router-link
          :to="{
          name: 'detail',
          params: {id: m.id, title: m.title}
        }"
        >{{m.title}}</router-link>-->

        <!-- 传递query参数下，测试路由的 props 配置 -->
        <router-link
          :to="{
          name: 'detail',
          query: {id: m.id, title: m.title}
        }"
        >{{m.title}}</router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>

<style>
</style>