<template>
  <div class="demo">
    <h3>学校名称：{{schoolName}}</h3>
    <h3>学校地址：{{address}}</h3>
    <button @click="showSchoolName">点我提示学校名称</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "苏科大",
      address: "上海",
    };
  },
  methods: {
    showSchoolName() {
      console.log(this.schoolName);
    },
  },
};
</script>

<style scoped>
.demo {
  background-color: cornflowerblue;
}
</style>