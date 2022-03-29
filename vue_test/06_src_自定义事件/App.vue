<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <p>我是school子组件传递过来的学校名称：<strong>{{schoolName}}</strong></p>
    <p>我是student子组件传递过来的学生姓名：<strong>{{studentName}}</strong></p>
    <!-- 子传父：通过给子组件传递函数类型的props实现，然后通过在子组件接收props，调用函数 -->
    <School :getSchoolName='getSchoolName' /> 

    <!-- 子传父：通过给子组件绑定一个自定义事件，然后子组件通过 this.$emit('函数名',参数)触发事件，在父组件中事件的回调函数就会被调用 -->
    <Student @ooo='getStudentName' @ppp='demo'/>
    <!-- <Student @ooo.once='getStudentName'/> --> <!--也可以使用事件修饰符哦-->
    <!-- 上面在App父组件中给子组件自定义事件实现子传父，其实我们也可以通过另一种方式给子组件绑定事件，实现和上面直接在子组件标签里绑定事件有同样的效果 -->
    <Student ref="student"/> <!-- 前面就讲过，在组件标签中用 ref 获取的是组件实例对象,就可以直接给组件实例对象绑定自定义事件了 -->
    <!-- 在组件标签上用的事件，不管你是不是自定义事件，它都会解析为自定义事件，都必须要$emit触发, 如果想用原生事件则需要加 native 修饰符，如下 -->
    <Student @click.native="show"/>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: '你好啊',
      schoolName:'',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(val) {
      console.log('我收到了学校名：', val);
      this.schoolName = val
    },
    getStudentName(val, ...params) { //当有多个参数传入时，形参可以写成...params，params是一个数组哦！！！
      console.log('我收到了学生名：', val,params);
      this.studentName = val
    },
    demo(val) {
      console.log('ppp自定义事件被调用了', val);
    },
    show() {
      console.log('给组件标签添加原生事件需要添加 native 事件修饰符,这样就相当于给组件的最外层节点加了原生事件');
    }
  },
  mounted() {
    this.$refs.student.$on('ooo', this.getStudentName)
    this.$refs.student.$on('ppp', this.demo)
    // 绑定事件 => $on('事件名', 事件回调函数)
    // this.$refs.student.$once('ooo', this.getStudentName) //只触发一次
  },
};
</script>

<style scoped>
.app{
  background-color: darkcyan;
  padding: 10px;
}
</style>