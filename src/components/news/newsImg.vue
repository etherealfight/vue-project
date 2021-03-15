<!--
* @FileDescription:新闻轮播图组件
-->
<template>
  <div class="newsImg" @click="toDetail">
    <img :src="imgUrl" />
    <span>{{ text }}</span>
  </div>
</template>

<script >
export default {
  props: {
    //新闻id
    id: {
      type: Number,
      default: 0,
    },

    //新闻标题
    text: {
      type: String,
      default: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    //新闻图片
    imgUrl: {
      type: String,
      default: `https://picsum.photos/460/360?random=1`,
    },
  },
  methods: {
    /**
     * 跳转到相应新闻详情页
     */
    toDetail() {
      this.$router.push({ path: "/newsdetail", query: { id: this.id } });
    },
  },
};
</script>

<style scoped>
.newsImg {
  height: 15rem;
  line-height: 7.5rem;
  background-image: url({{imgUrl}});
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
}
img {
  width: 100%;
  height: 100%;
  opacity: 0.85;
  position: absolute;
  background-size: cover;
}
span {
  opacity: 0.95;
  position: absolute;
  color: black;
  font-size: 1.5rem;
  bottom: 0%;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 20rem;
  margin: 0 auto;
  float: left;
  text-align: center;
}
</style>