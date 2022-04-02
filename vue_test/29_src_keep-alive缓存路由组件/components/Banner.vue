<template>
  <div>
    <h1>Vue Router Demo</h1>
    <h3>在News组件中写input框, 在Home组件中操作router-view，keep-alive来测试缓存路由组件</h3>
    <h3>
      当我们切换路由时,被切换的组件实际上是被销毁了,如果想实现被切换的组件不被销毁,
      可以在路由组件的展示区router-view标签外面包裹 kepp-alive 标签，并指定 include属性值为
      组件名称，即可让对应的路由组件不被销毁
    </h3>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>
