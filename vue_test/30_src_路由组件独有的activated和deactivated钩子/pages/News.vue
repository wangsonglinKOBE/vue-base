<template>
  <div>
    <ul>
      <li :style={opacity}>欢迎学习 vue</li>
      <li>News001 <input type="text"></li>
      <li>News002 <input type="text"></li>
      <li>News003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      a: false,
      opacity: 1
    }
  },
  /* mounted() {
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.1
      if(this.opacity <= 0) this.opacity = 1
    }, 16)
  }, */
  /* beforeDestroy() {
    console.log('News组件的销毁前钩子, News组件即将被销毁');
    clearInterval(this.timer)
  }, */
  
  // 被激活生命周期钩子(激活)
  activated() {
    console.log('News组件被激活了');
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.1
      if(this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  // 取消激活生命周期钩子(失活)
  deactivated() {
    console.log('News组件失活了');
    clearInterval(this.timer)
  },
}
</script>

<style>

</style>