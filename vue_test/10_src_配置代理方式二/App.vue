<template>
  <div class="app">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    // '/kobe'是请求前缀 ,记得加载端口号后面哦，加在url路径前面
    // 配置代理服务器都是在 vue.config.js vue的配置文件中配置哦
    getStudents() {
      axios.get("http://localhost:8080/kobe/students").then(
        (response) => {
          console.log("请求成功了", response);
        },
        (error) => {
          console.log("请求失败了", error);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
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
// 配置代理服务器方式二：
// '/kobe'是请求前缀
//   devServer: {
//     proxy: {
//       '/kobe': {
//         target: 'http://localhost:5000',
//         // 路径重写，将kobe开头的转化为空字符串
//         pathRewrite: { '^/kobe': '' },
//         // 用于支持 websocket
//         wa: true,
//         // 用于控制请求头中的 host 值
//         changeOrigin: true
//       },
//       '/demo': {
//         target: 'http://localhost:5001',
//         pathRewrite: { '^/demo': '' }
//       }
//     }
//   }
</script>
