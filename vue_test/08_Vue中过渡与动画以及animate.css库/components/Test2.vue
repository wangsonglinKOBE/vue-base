<template>
  <div>
    <button @click="isShow = !isShow">点击切换显示和隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊,Vue过度效果(Vue过渡实现)</h1>
    </transition>
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">多个元素都有同样的过渡(Vue过渡实现)</h1>
      <h1 v-show="isShow" key="2">多个元素都有同样的过渡(Vue过渡实现)</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
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
  /* transition: 2s linear; */
}

/* 进入的起点、 离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

/* 进入的终点 、离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0px);
}

/* 整个进入的过程，和整个离开的过程，可以在这里加过渡效果 */
.hello-enter-active,
.hello-leave-active {
  transition: 2s linear;
}

/* 离开的起点 */
/* .hello-leave{
  transform: translateX(0px);
} */

/* 离开的终点 */
/* .hello-leave-to{
  transform: translateX(-100%);
} */
</style>