<template>
  <div>
    <h2>当前求和为：{{$store.state.sum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "sum",
  data() {
    return {
      n: 1
    };
  },
  methods: {
    increment() {
      // 发起一个加的action
      // this.$store.dispatch("increment", this.n);

      // 也可以直接发起加的 mutations
      this.$store.commit("INCREMENT", this.n);
    },
    decrement() {
      // this.$store.dispatch("decrement", this.n);
      this.$store.commit("DECREMENT", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.n);
    },
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