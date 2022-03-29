<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 具名插槽 -->
    <slot name="center">我是默认值，当使用者不传具体结构时使用我</slot>
    <slot name="footer"><h4>我是默认值，当使用者不传具体结构时使用我</h4></slot>
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