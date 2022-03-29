<template>
  <div>
    <!-- 注意：这里 age是一个数字类型不是字符串所以使用 v-bind动态绑定熟悉，
    表示冒号后面的引号中的18按照JS表达式去解析 -->
    <Student name='张三' sex='男' :age='18'/>
    <hr>
    <Student name='李四' sex='女' :age='20'/>
  </div>
</template>

<script>
import Student from "./components/Student";
export default {
  name: "App",
  components: { Student },
  data() {
    return {
      
    }
  }
};
</script>

<style>
</style>