<template>
  <div class="newsBox" @click="toDetail">
    <div class="newsText">{{ title }}</div>
    <div class="newsImg">
      <ul>
        <li v-for="(img, index) in fileaddress" :key="index"> <img :src="fileaddress[index]" /></li>
      </ul>
    </div>
    <div class="newsIntroduction">
      <div class="newsAuthor">{{ username }}</div>
      <div class="newsDare">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //新闻标题
    title: {
      type: String,
      default: "",
    },
    //新闻图片
    fileaddress: {
      type: Array,
      default: "",
    },
    //新闻内容
    contentText: {
      type: String,
      default: "",
    },
    //发布时间
    date: {
      type: String,
      default: "",
    },
    //id
    id: {
      type: Number,
      default: 0,
    },
    //作者
    username: {
      type: String,
      default: "",
    },
  },
  methods: {
    toDetail(){
      this.$router.push({path:"/newsdetail"})
    }
  }
};
</script>

<style>
.newsBox {
  width: 100vw;
  border-top: 1px solid lightgray;
  padding: 1.5rem 2rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.newsText {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 0 0 1rem 0;
  height: 4rem;
  font-size: 1.5rem;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  box-sizing: border-box;
} 
.newsBox .newsImg {
  padding: 1rem 0 1rem 0;
}
.newsImg ul{
    list-style: none;
    display: flex;
    flex-direction: row;
}
.newsImg ul li{
    padding-right: 1rem;
}
.newsImg ul li img{
    width: 28vw;
    height: 15vh;
    border-radius: 0.5rem;
}
.newsIntroduction {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>