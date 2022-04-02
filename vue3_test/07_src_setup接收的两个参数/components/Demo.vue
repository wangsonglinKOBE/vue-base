<template>
  <div>
    <h1>我是 Demo 组件</h1>
    <h3>{{person.name}}-{{person.age}}</h3>
    <button @click="test">测试触发hello自定义事件</button>
    <slot name="ppp"></slot>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ['msg', 'school'],
  emits: ['hello'], // ！Vue3里要声明接收给组件绑定的自定义事件,不声明会有警告而已

  setup(props, context) {
    // 1 setup 的执行时机 ———— 在 beforeCreate 之前执行，this是 undefined
    console.log('---setup---', this);

    // 2.1、setup 接收的参数 ———— props ：值是所有在上方声明接收的 props
    console.log('props', props);

    // 2.2、setup 接收的参数 ———— context
    console.log('context', context);

    // 2.2.1、setup 接收的参数 ———— context.attrs : 值是没有被组件声明接收的 props
    console.log('context.attrs', context.attrs);

    // 2.2.2、setup 接收的参数 ———— context.emit : 触发组件的自定义事件并传参
    console.log('context.emit', context.emit);
    function test() {
      context.emit('hello', context.attrs.car)
    }

    // 2.2.3、setup 接收的参数 ———— context.slots : 插槽
    console.log('context.slots', context.slots);

    const person = reactive({
      name: "kobe",
      age: 18,
    });
    return { person, test };
  },
  
  beforeCreate() {
    console.log('---beforeCreate---');
  },
};
</script>
