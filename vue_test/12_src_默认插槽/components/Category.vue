<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽：默认插槽 -->
    <slot>我是默认值，当使用者不传具体结构时使用我</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: tomato;
}
img {
  width: 200px;
}
</style>