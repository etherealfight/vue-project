<template>
  <div class="newsBox" @click="toDetail">
    <div class="newsText">{{ contentText }}</div>
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
  width: 90vw;
  border-top: 1px solid lightgray;
  padding: 1.5rem 2rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
}
.newsText {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  padding: 0 0 1rem 0;
  height: 4rem;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
}
.newsImg {
  padding: 1rem 0 1rem 0;
}
ul{
    list-style: none;
    display: flex;
    flex-direction: row;
}
li{
    padding-right: 1rem;
    
}
img{
    width: 10rem;
    height: 10rem;
    border-radius: 0.5rem;
}
.newsIntroduction {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>