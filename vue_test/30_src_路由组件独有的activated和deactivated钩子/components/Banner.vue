<template>
  <div>
    <h1>Vue Router Demo</h1>
    <h2 style="color: blue">activated 和 deactivated 路由组件独有的生命周钩子</h2>
    <h3>在缓存路由组件时，路由组件不会被销毁，所以你写在 mounted 和 beforeDestroy 似乎就失去了作用</h3>
    <h3>如果我们在缓存路由组件News时，在mounted中开启了定时器，当切换掉 News组件时，定时器就算在beforeDestroy中清楚也无济于事</h3>
    <h3>那么想要在切换掉 News 组价时，清楚定时器又不销毁 News 组件，两个路由组件独有的生命周期钩子可以代替mounted和 beforeDestroy</h3>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>
