<!--
* @FileDescription:新闻列表组件，用于动态加载新闻组件
-->
<template>
  <div class="newsListBox">
    <news
      class="listItem"
      v-for="item in newsData"
      :key="item.id"
      :fileaddress="item.fileaddress"
      :id="item.id"
      :username="item.username"
      :title="item.title"
      :contentText="item.contentText"
      :date="item.date"
    ></news>
  </div>
</template>

<script>
import news from "./news";

export default {
  components: {
    news: news,
  },
  methods: {},
  /**
   *  接受从mainpage组件传来的文章参数
   */
  props: {
    newsData: {
      type: Array,
      default: [
        {
          id: 1,
          username: "quan",
          title:"这是一个大新闻",
          contentText:
            "23333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
          fileaddress: [
            "https://picsum.photos/460/360?random=1",
             "https://picsum.photos/460/360?random=5",
              "https://picsum.photos/460/360?random=6",
          ],
          date: "2021-1-11",
        },
        {
          id: 2,
          username: "quan",
          title:"这是一个大大大大大大大新闻",
          contentText: "2333333333",
          fileaddress: [
            "https://picsum.photos/460/360?random=7",
             "https://picsum.photos/460/360?random=8",
              "https://picsum.photos/460/360?random=9",
          ],
          date: "2021-1-16",
        },
        {
          id: 3,
          username: "quan",
          title:"这是一个大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大新闻",
          contentText: "2333333333",
          fileaddress: [
            "https://picsum.photos/460/360?random=11",
          ],
          date: "2021-1-16",
        },
      ],
    },
  },
};
</script>

<style>
</style>