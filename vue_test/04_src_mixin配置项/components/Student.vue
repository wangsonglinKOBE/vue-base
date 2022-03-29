<template>
  <div class="demo">
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
// 引入一个混合(混入)配置【局部混合 mixin 】
// import {mixinMethods, mixinData} from '../mixin';
export default {
  name: "Student",
  data() {
    return {
      name: '张三',
      sex: '男'
    };
  },
  // 添加 mixins 混入配置
  // mixins: [mixinMethods, mixinData]
  // methods: {
  //   showName() {
  //     alert(this.name)
  //   }
  // },
};
</script>
