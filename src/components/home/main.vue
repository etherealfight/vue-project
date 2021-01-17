<template>
  <div class="mainPage">
    <my-navbar></my-navbar>
    <div class="block">
      <el-carousel height="15rem" :interval="5000">
        <el-carousel-item v-for="item in 4" :key="item">
          <newsimg></newsimg>
        </el-carousel-item>
      </el-carousel>
    </div>
    <newslist class="newslist" :newsData="newsData"></newslist>
    <div class="mainFooter">
      <my-tabbar class="tabbar" activeIndex="1"></my-tabbar>
    </div>
  </div>
</template>

<script>
import my_navbar from "./my_navbar";
import my_tabbar from "./my_tabbar";
import newsImg from "../news/newsImg"
import newsList from "../news/newsList"
export default {
  components: {
    "my-navbar": my_navbar,
    "my-tabbar": my_tabbar,
    "newsimg":newsImg,
    "newslist":newsList
  },
  data () {
    return {
     // newsData:{}
    }
  },
  methods: {
    move() {
      window.open("https://www.baidu.com", "_blank");
    },
  },
};
</script>

<style scoped>
.mainPage {

  width: 100vw;
  height: 100vh;
}
.block{
  padding: 2rem;
}
.el-carousel__item  {
  color: #475669;
  line-height: 7.5rem;
  margin: 0;
}
.newslist{
  padding-bottom: 4rem;
}
.tabbar {
  position: fixed;
  bottom: 0;
}
</style>