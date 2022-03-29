// 该文件用于创建 Vuex 中最为核心的 store

// 引入 Vue
import Vue from 'vue'

// 引入 Vuex
import Vuex from 'vuex'

// 使用Vuex插件
Vue.use(Vuex)

// 准备 actions --- 用于响应组件中的动作
const actions = {}

// 准备 mutations ---- 用于操作数据 (state)
const mutations = {}

// 准备 state --- 用于存储数据
const state = {}

// 创建 store, 传入配置，并且导出
export default new Vuex.Store({
  actions,
  mutations,
  state
})

