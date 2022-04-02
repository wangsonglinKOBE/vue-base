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
import { ref, watchEffect, reactive } from "vue";
export default {
  name: "Demo",

  setup() {
    const sum = ref(0);
    const msg = ref("hello");
    const person = reactive({
      name: "kobe",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });


    // watchEffect什么时候调用？ ———— watchEffect中所依赖的数据发生变化时调用
    watchEffect(() => {
      console.log('watchEffect所指定的回调执行了');
      const x = sum.value
      const y = person.job.j1.salary
    });

    return { sum, msg, person };
  },
};
</script>
