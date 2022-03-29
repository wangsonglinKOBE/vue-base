<template>
  <div>
    <button @click="isShow = !isShow">点击切换显示和隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊,Vue动画效果(Vue动画实现)</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
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

.hello-enter-active {
  animation: kobe 0.5s linear;
}
.hello-leave-active {
  animation: kobe 0.5s linear reverse;
}

@keyframes kobe {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>