<template>
  <div class="category">
    <h3>{{title}}分类</h3>

    <slot :games="games" :msg='msg'>我是作用域插槽，我可以给我的使用者传递数据</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["英雄联盟", "超级玛丽", "魂斗罗", "穿越火线"],
      msg: '你好啊'
    };
  },
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