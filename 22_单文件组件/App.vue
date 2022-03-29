// App 根组件
<template>
  <div>
    <School/>
    <Student/>
  </div>
</template>

<script>
// 汇总组件，引入组件
import School from '../vue_test/src/components/Student.vue'
import Student from './Student.vue'

export default {
  name: 'App',
  components: { //注册组件
    School,
    Student
  }
}
</script>

<style>

</style>