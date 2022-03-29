<template>
  <div>
    <button @click="isShow = !isShow">点击切换显示和隐藏</button>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="2">animate.css库实现</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>