<template>
  <div class="learnBox">
    <div class="learnHeader" @click="toPersonal">
      <img :src="userimg" class="userImg" />
      <div class="userName">{{ username }}</div>
    </div>
    <div class="learnMain" @click="toDetail">
      <div class="learnText">{{ contentText }}</div>
      <div class="learnImgBox">
        <ul>
          <li v-for="(img, index) in fileaddress" :key="index">
            <img :src="fileaddress[index]" />
          </li>
        </ul>
      </div>
    </div>
    <div class="learnFooter" @click="toDetail">
      <div class="learnDate">{{ date }}</div>
      <div class="learnClicks">评论：{{ clicks }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //悬赏图片
    fileaddress: {
      type: Array,
      default: "",
    },
    //悬赏内容
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
    //作者头像
    userimg: {
      type: String,
      default: "",
    },
    //点击量
    clicks: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    toDetail() {
      this.$router.push({ path: "/learningDetail" });
    },
    toPersonal() {
      if (this.$store.state.userName === this.username) {
        this.$store.commit('changeId', {currenrId:this.userId})
        this.$router.push({
          name: "mypersonalPage",
        });
      } else {
        this.$store.commit('changeId', {currenrId:this.userId})
        this.$router.push({
          name: "personalPage" ,
        });
      }
    },
  },
};
</script>

<style>
.learnBox {
  width: 94vw;
  margin-top: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0 2rem;
  overflow: hidden;
  box-sizing: border-box;
  background: white;
}
.learnHeader {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
}
.learnBox .learnHeader .userImg {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-right: 2rem;
}
.learnBox .learnHeader .userName {
  font-size: 1.5rem;
}
.learnBox .learnMain {
  padding-top: 1.5rem;
}
.learnBox .learnMain .learnText {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 2.9rem;
  margin-bottom: 1rem;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
}
.learnBox .learnMain .learnImgBox ul {
  display: flex;
  justify-content: flex-start;
}
.learnBox .learnMain li {
  list-style: none;
  padding-right: 1rem;
}
.learnBox .learnMain li img {
  border-radius: 0.5rem;
  width: 25vw;
  height: 12vh;
}
.learnBox .learnFooter {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
}
</style>