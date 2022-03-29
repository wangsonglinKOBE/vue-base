<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <!-- <h2>学生年龄：{{age+1}}</h2> -->
    <h2>学生年龄：{{ageData+1}}</h2>
    <button @click="changeAge">点我更改年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是苏科大的学生",
      // name: 'zhangsan',
      // sex: 'nan',
      // age: 18

      // 将 props 中的 age 复制一份到 data中，用于更改
      ageData: this.age,
    };
  },
  // 注意：这里当 props中的数据 和 data 中数据重复冲突时，props中的数据优先级更高，还是使用props中的数据
  //数组写法 props
  // props: ["name", "sex", "age"],

  // 对象语法 props(监测类型)
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number,
  // },

  //对象的完整写法 props (监测类型 + 其他验证)
  props: {
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    changeAge() {
      // 注意 组件传入的 props 和 data 配置项很相似，props 也做了数据监测和数据代理，也直接将props中的属性放入了 vc 本身，和_props
      // console.log(this._props);

      // 注意这里不能够直接修改 props 中的熟悉，控制台会警告
      // this.age++

      // 如果非要更改props中的属性，可以在 data 中复制一份要更改的属性，再改data中的属性即可
      this.ageData++;
    },
  },
};
</script>
