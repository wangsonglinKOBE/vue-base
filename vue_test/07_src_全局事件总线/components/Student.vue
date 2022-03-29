<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">点我把学生姓名传给 school 组件</button>
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
    sendStudentName() {
      // 调用在 school 组件中给 $bus 绑定的 ooo 事件 并传参
      this.$bus.$emit('ooo', this.name)
    }
  },
  beforeDestroy() {
    this.$bus.off('ooo')
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
