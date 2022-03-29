<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="s输入要搜索的名字" v-model="keyWord" />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新 list 的数据
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (res) => {
          console.log("请求成功");
          // 请求成功后
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: res.data.items,
          });
        },
        (err) => {
          console.log("请求失败", err);
          // 请求失败后
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: err.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>