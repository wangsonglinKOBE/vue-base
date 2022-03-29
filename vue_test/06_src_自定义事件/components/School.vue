<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="getSchoolName(name)">点我将学校名称传递给父组件App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: '苏科大SuKeDa',
      address: '北京·昌平'
    };
  },
  props: ['getSchoolName'],
  methods: {
    
  },
};
</script>

<style scoped>
.demo{
  background-color: skyblue;
  padding: 5px;
}
</style>