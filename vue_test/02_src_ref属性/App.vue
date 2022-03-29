<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上面的 h1 DOM节点</button>
    <school ref="sch" />
  </div>
</template>

<script>
import School from "./components/School";
export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: '欢迎来到苏科大！'
    }
  },
  methods: {
    showDOM() {
      console.log('this.$refs', this.$refs);
      console.log(this.$refs.title);

      // 给组件加 ref 标签，拿到的就是这个组件实例对象 vc
      console.log(this.$refs.sch);
    }
  },
};
</script>

<style>
</style>