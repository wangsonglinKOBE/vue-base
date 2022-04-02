<template>
  <div>
    <ul>
      <li>News001 <input type="text"></li>
      <li>News002 <input type="text"></li>
      <li>News003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  // 当在 News 路由组件的展示区 router-view 外层包裹 keep-alive 并指定 include 属性时，
  // New组件在被切换时，将不会被销毁，所以下面的钩子不会执行
  beforeDestroy() {
     console.log('News组件销毁前钩子，News组件即将被销毁');
  },
}
</script>

<style>

</style>