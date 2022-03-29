// App 根组件
<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <School/>
    <Student/>
  </div>
</template>

<script>
// 汇总组件，引入组件
import School from './components/School.vue'
import Student from './components/Student.vue'

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