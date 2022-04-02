<template>
  <div>
    <Demo msg="你好啊" school="苏科大" car="凯美瑞" @hello="showHello">
      <!-- Vue3 中只能用template配合 v-slot:xxx  -->
      <template v-slot:ppp>
        <p>我是插槽</p>
      </template>
    </Demo>
  </div>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHello(val) {
      alert(`hello, 你触发了 hello 事件，我收到的参数是: ${val}`);
    }
    return { showHello };
  },
};
</script>
