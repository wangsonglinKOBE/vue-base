<template>
  <div>
    <h1>Vue Router Demo</h1>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="test">测试一下go,传入-2后退两步</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      console.log(this.$router);
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    test() {
      this.$router.go(-2)
    }
  },
};
</script>
