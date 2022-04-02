<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- ！！
          跳转路由并携带 params 参数，to的字符串写法：
          注意这里，首先 to是 v-bind 动态的后面引号的才会当做JS去解析
          然后在引号里面写模板字符串, 另外 params 参数需要在路由里面配置哦
        -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

        <!-- 
          跳转路由并携带 params 参数，to的对象写法：
          ! 注意：如果使用 params 传递参数，对象写法中不允许使用 path 属性哦，只能写 name 属性哈
          对象有 name 属性指定路径，params属性指定参数
        -->
        <router-link
          :to="{
          name: 'detail',
          params: {id: m.id, title: m.title}
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