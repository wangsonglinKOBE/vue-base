<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <h2>放大10倍后的和为：{{bigSum}}</h2>
    <h2>我在{{school}}学习{{subject}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <!-- <button @click="INCREMENT(n)">+</button>
    <button @click="DECREMENT(n)">-</button>-->
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "sum",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    /* increment() {
      this.$store.commit("INCREMENT", this.n);
    }, */
    /* decrement() {
      this.$store.commit("DECREMENT", this.n);
    }, */
    // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutations, 传参在调用时传入
    ...mapMutations({ increment: "INCREMENT", decrement: "DECREMENT" }),
    // 当生成的方法名和 mutations 里的大写名一样时，可以简写成数组，不过别忘了上面的方法名也要改成大写哦
    // ...mapMutations(["INCREMENT", "DECREMENT"]),

    /*  incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    }, */
    /* incrementWait() {
      this.$store.dispatch("incrementWait", this.n);
    }, */
    // 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 actions，传参也在调用时传入
    /* ...mapActions({
      incrementOdd: "incrementOdd",
      incrementWait: "incrementWait",
    }), */
    ...mapActions(["incrementOdd", "incrementWait"]),
  },
  computed: {
    // 自己写计算属性
    /*  sum() {
      return this.$store.state.sum;
    }, */

    // mapState 和 mapGetters帮我们映射 state 和 getters 中的数据为计算属性，可以在模板直接使用
    // mapState 和 mapGetters 函数调用的结果是一个对象，有如下两种写法
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    ...mapState(["sum", "school", "subject"]),

    ...mapGetters(["bigSum"]),
  },
  mounted() {
    // console.log(this);
  },
};
</script>

<style scoped>
button {
  margin-left: 6px;
}
</style>