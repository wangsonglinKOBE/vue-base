// 混入就是复用 vc 中共有的配置

export const mixinMethods = {
  methods: {
    showName() {
      alert(this.name)
    }
  },
  mounted() {
    console.log('我是mixin混入中的mounted钩子', this);
  },
}

export const mixinData = {
  data() {
    return {
      x: 100,
      y: 200
    }
  },
}