<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",

  /* 组件内路由守卫 */

  // 通过路由规则，进入 About 组件之前调用
  beforeRouteEnter(to, from, next) {
    console.log("About 组件内路由守卫=>【进入】 About 之前调用-beforeRouteEnter");
    if(to.meta.isAuth) {
      if(localStorage.getItem('name') === 'kobe') {
        next()
      } else {
        alert('本地存储的name不是kobe，请查看本地存储')
      }
    } else {
      next()
    }
    
  },

  // 通过路由规则，离开 About 组件之前调用
  beforeRouteLeave (to, from, next) {
    console.log("About 组件内路由守卫=>【离开】 About 之前调用-beforeRouteEnter");
    next()
  }

};
</script>
