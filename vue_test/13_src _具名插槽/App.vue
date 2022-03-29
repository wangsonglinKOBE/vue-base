<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="./components/food.png" />
      <a href class="foot" slot="footer">附近美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="item, index in games" :key="index">{{item}}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href>单机游戏</a>
        <a href>网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <img slot="center" src="./components/xuebao.png" />
      <template v-slot:footer>
        <a href class="foot">附近电影院</a>
        <h4>欢迎前往观看</h4>
      </template>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>