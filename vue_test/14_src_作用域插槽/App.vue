<template>
  <div class="container">
    <Category title="游戏">
      <template scope="youxi">
        <ul>
          <li v-for="(g,index) in youxi.games" :key="index">{{g}}</li>
        </ul>
        <h3>{{youxi.msg}}</h3>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 这个 scope 接收到的是 slot 插槽传递过来的数据的集合，是一个对象，这里可使用解构赋值哦 -->
      <template scope="{games}">
        <ol>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <!-- slot-scope 和 scope 一样的，只是它是新语法 -->
      <template slot-scope="{games}">
         <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{msg}">
         <h4>{{msg}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>