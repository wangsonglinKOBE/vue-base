// 该文件用于创建 Vuex 中最为核心的 store

// 引入 Vue
import Vue from 'vue'

// 引入 Vuex
import Vuex from 'vuex'

// 使用Vuex插件
Vue.use(Vuex)

// 准备 actions --- 用于响应组件中的动作
const actions = {
  incrementOdd(context, value) {
    if (context.state.sum % 2) context.commit('INCREMENT', value)
  },
  incrementWait(context, value) {
    setTimeout(() => {
      context.commit('INCREMENT', value)
    }, 1000)
  }
}

// 准备 mutations ---- 用于操作数据 (state)
const mutations = {
  'INCREMENT': function (state, value) {
    state.sum += value;
  },
  DECREMENT(state, value) {
    state.sum -= value
  }
}

// 准备 state --- 用于存储数据
const state = {
  sum: 0,
}

// 准备 getters --- 用于加工 state 中的数据相当于计算属性, 既然是计算属性就不要忘了 return 哦
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

// 创建 store, 传入配置，并且导出
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})