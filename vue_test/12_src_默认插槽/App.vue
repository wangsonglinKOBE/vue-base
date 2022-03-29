<template>
  <div class="container">
    <Category title="美食">
      <img src="./components/food.png" />
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="item, index in games" :key="index">{{item}}</li>
      </ul>
    </Category>

    <Category title="电影">
      <img src="./components/xuebao.png" />
    </Category>

    <Category title="无"></Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾"],
      games: ["英雄联盟", "超级玛丽", "魂斗罗", "穿越火线"],
      films: ["《战狼》", "《长津湖》", "《叶问》, 《人世间》, 《雪豹》"],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>