<template>
  <div class="demo">
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="hello">点我测试hello方法</button>
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
};
</script>
