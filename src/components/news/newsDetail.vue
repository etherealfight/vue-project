<template>
  <v-touch @swiperight="swiperright" class="wrapper">
    <div class="newsdetail">
      <i class="el-icon-back" @click="back"></i>
      <div class="newsdetailheader">
        <h2 class="newsdetailtitle">{{ title }}</h2>
      </div>
      <div class="newsDetailMiddle">
        <div class="newsdetailAuthor">{{ author }}</div>
        <div class="newsdetailDate">{{ date }}</div>
      </div>
      <div class="newsDetailMain">
        <img :src="imgUrl" class="detailImg" />
        <div class="newsContext">
          {{ context }}
        </div>
      </div>
    </div>
  </v-touch>
</template>

<script>
export default {
  data() {
    return {
      title: "这是一个大新闻",
      author: "cccc",
      date: "2021-01-16",
      imgUrl: "https://picsum.photos/460/360?random=1",
      context:
        "ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    swiperright() {
      this.$router.back(-1);
    },
  },
};
</script>

<style >
.newsdetailtitle {
  font-size: 2rem;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 3%;
}
.newsdetail {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.detailImg {
  width: 20rem;
  height: 15rem;
}
.newsDetailMiddle {
  padding: 2rem 0 2rem 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  border-bottom: lightgrey 1px solid;
  font-size: 1.5rem;
}
.newsDetailMain {
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
}
.newsContext {
  width: 100vw;
  padding: 2rem;
  box-sizing: border-box;
  word-wrap: break-word;
}
</style>