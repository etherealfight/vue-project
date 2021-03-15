<!--
* @FileDescription:新闻列表组件，用于动态加载新闻组件
-->
<template>
  <div class="newsListBox">
    <news
      class="listItem"
      v-for="item in newsData"
      :key="item.newsid"
      :fileaddress="item.newsimages"
      :id="item.newsid"
      :username="item.author"
      :title="item.newstitle"
      :contentText="item.newsinfo"
      :date="item.newstime"
    ></news>
  </div>
</template>

<script>
import news from "./news";

export default {
  components: {
    news: news,
  },
  /**
   *  接受从mainpage组件传来的文章参数
   */
  props: {
    //新闻信息列表
    newsData: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
</style>