<template>
  <div class="app">
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      // 注意这里直接给代理服务器发送请求就行了，而不是真正的后台服务器
      // 在 vue.congfig.js文件中进行配置代理服务器，这样配置的代理服务器很方便，但是有两点不足，一是不能配置多个代理，只能配置一个，
      // 二是如果代理服务器自身有的东西，他就不会再去请求后台目标服务器了，vue.config.js代码如下：
      
      // 开启代理服务器(端口号和前端服务器一致，发送请求的时候直接给这个代理服务器发送),下面才真正后台服务器，由代理服务器去请求，
      // 因为服务器之间是属于后台不受同源策略的限制，所以不存在跨域问题，同源策略指的是 协议+域名+端口号 (域名就是主机名或者IP: 10.164.11)
      // devServer: {
      //   proxy: "http://localhost:5000";
      // }
      axios.get("http://localhost:8080/students").then(
        (response) => {
          console.log("请求成功了", response);
        },
        (error) => {
          console.log("请求失败了", error);
        }
      );
    },
  },
};
</script>
