<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
// 引入一个混合(混入)配置 【局部混合 mixin 】
// import {mixinMethods ,mixinData} from '../mixin'
export default {
  name: "School",
  data() {
    return {
      name: '苏科大',
      address: '北京·昌平',
      x: 666
    };
  },
  // mixins: [mixinMethods, mixinData],
  // methods: {
  //   showName() {
  //     alert(this.name)
  //   }
  // },
  mounted() {
    console.log('我是school组件中的mounted钩子')
  },

  // 当 data 中的数据或者是 methods 中的方法和 mixin 中的data和methods 重复时，以vc自身的为准
  // 特殊情况就是 vc 和 mixin 中都有 生命周期钩子 的时候，不会扔掉 mixin 中的生命周期钩子，会都执行
};
</script>
