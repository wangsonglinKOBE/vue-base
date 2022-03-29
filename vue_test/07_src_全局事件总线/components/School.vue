<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <h2>接收到学生姓名：{{studentName}}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "苏科大SuKeDa",
      address: "北京·昌平",
      studentName: '',
    };
  },
  mounted() { //注意这里是组件挂载生命周期钩子中绑定
    // 给 $bus 绑定事件
    this.$bus.$on('ooo', val => this.studentName = val)
  },
};
</script>

<style scoped>
.demo {
  background-color: skyblue;
  padding: 5px;
}
</style>