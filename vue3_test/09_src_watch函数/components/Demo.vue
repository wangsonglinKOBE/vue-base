<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <hr />

    <h2>当前的信息为：{{msg}}</h2>
    <button @click=" msg+='!' ">修改信息</button>
    <hr />

    <h2>{{person.name}}-{{person.age}}- 薪资: {{person.job.j1.salary}}K</h2>
    <button @click=" person.name+='~' ">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";
export default {
  name: "Demo",

  setup() {
    const sum = ref(0);
    const msg = ref("hello");
    const person = reactive({ 
      name: "kobe", 
      age: 18, 
      job:{
        j1: {
          salary: 20
        }
      }
     });

    // 情况一：监视 ref 所定义的【一个】响应式数据
    /* watch(sum, (newValue, oldValue) => {
      console.log('sum变了', newValue, oldValue);
    }, {immediate:true}) */

    // 情况二：监视 ref 所定义的【多个】响应式数据
    /*  watch([sum, msg], (newValue, oldValue) => {
      console.log('sum变了或msg变了', newValue, oldValue);
      // 注意这里的 newValue, oldValue 也都是数组
    }, {immediate:true}) */

    /* 
    情况三：监视 reactive 所定义的一个响应式数据的【全部】数据
            注意1：————此处无法正确的获取 oldvalue, 只能获取 newValue
            注意2：————强制开启了深度监视(deep配置无效)
    */
    watch(person, (newValue, oldValue) => {
      console.log('person变了', newValue, oldValue); //注意此处的 oldValue
    }, {deep:false}) //此处的deep无效

    // 情况四：监视 reactive 所定义的一个响应式数据中的某【个】属性
    // 使用函数指定属性，并且 oldValue 也正确
    /* watch(()=>person.age, (newValue, oldValue) => {
      console.log('person的age变了', newValue, oldValue);
    }) */


    // 情况五：监视 reactive 所定义的一个响应式数据中的某【些】属性
    /* watch([()=>person.age, ()=>person.name], (newValue, oldValue) => {
      console.log('person的age或name变了', newValue, oldValue);
    }) */

    // 特殊情况,———— 这里的深度监视又奏效
    /* watch(()=>person.job, (newValue, oldValue) => {
      console.log('person的job变了', newValue, oldValue);
    }, {deep: true}) //此处由于监视的是 reactive 所定义的对象中的某个属性，所以deep生效 */

    return { sum, msg, person };
  },
};
</script>
