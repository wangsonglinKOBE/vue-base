<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <!-- 触发App父组件中给 Student 绑定的 ooo 事件 -->
    <button @click="$emit('ooo', name, 11, 22, 33)">点我将学生姓名传递给父组件App</button>
    <button @click="$emit('ppp', 'my name is kobe')">点我触发 ppp 自定义事件</button>
    <button @click="unbind">点我解绑自定义事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    //this.$off() => 解绑自定义事件
    unbind() {
      // this.$off('ooo') //解绑一个自定义事件
      this.$off(['ooo', 'ppp']) //解绑多个自定义事件
      // this.$off() //解绑所有自定义事件
    }
  },
};
</script>

<style scoped>
.demo {
  background-color: orange;
  padding: 5px;
  margin: 10px;
}
</style>
