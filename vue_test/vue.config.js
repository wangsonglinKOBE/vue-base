module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js'
    }
  },
  lintOnSave: false, //关闭语法检查

  // 注意，每次更改了这个 vue 的配置文件 都需要重启项目才能生效哦

  // 配置代理服务器方式一：
  // 开启代理服务器(端口号和前端服务器一致，发送请求的时候直接给这个代理服务器发送),下面才真正后台服务器，由代理服务器去请求，
  // 因为服务器之间是属于后台不受同源策略的限制，所以不存在跨域问题，同源策略指的是 协议+域名+端口号 (域名就是主机名或者IP: 10.164.11)
  /* devServer: {
    proxy: 'http://localhost:5000'
  } */

  // 配置代理服务器方式二：
  // '/kobe'是请求前缀
  /* devServer: {
    proxy: {
      '/kobe': {
        target: 'http://localhost:5000',
        // 路径重写，将kobe开头的转化为空字符串
        pathRewrite: { '^/kobe': '' },
        // 用于支持 websocket
        wa: true,
        // 用于控制请求头中的 host 值
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' }
      }
    }
  } */
}