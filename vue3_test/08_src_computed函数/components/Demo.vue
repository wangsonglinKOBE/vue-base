<template>
  <div>
    <h1>我是 Demo 组件</h1>姓 :
    <input type="text" v-model="person.firstName" />
    <br />名 :
    <input type="text" v-model="person.lastName" />
    <h3>全名：{{person.fullName}}</h3>
    <!-- <button @click="() => fullName='张_三'">修改计算属性fullName</button> -->
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",

  setup() {
    const person = reactive({
      firstName: "kobe",
      lastName: "bryant",
    });

    // 当要修改计算属性时就需要用 set , 计算属性的完整写法, computed函数传一个对象
    /* const fullName = computed({
      get() {
        return person.firstName + "_" + person.lastName;
      },
      set(value) {
        console.log("fullNam被修改了，set调用了", value);
        let arr = value.split("_");
        console.log(arr);
        person.firstName = arr[0];
        person.lastName = arr[1];
      },
    }); */

    // 计算属性的简写 (仅读取)， computed函数传一个函数
    person.fullName = computed(() => {
      return person.firstName + "_" + person.lastName;
    });

    return { person };
  },
};
</script>
