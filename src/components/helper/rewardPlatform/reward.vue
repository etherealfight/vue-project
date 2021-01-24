<template>
  <div class="rewardBox" @click="toDetail">
    <div class="rewardHeader">
      <img :src="userimg" class="userImg" />
      <div class="userName">{{ username }}</div>
    </div>
    <div class="rewardMain">
      <div class="rewardText">{{ contentText }}</div>
      <div class="rewardImgBox">
        <ul>
          <li v-for="(img, index) in fileaddress" :key="index">
            <img :src="fileaddress[index]" />
          </li>
        </ul>
      </div>
    </div>
    <div class="rewardFooter">
      <div class="rewardDate">{{ date }}</div>
      <div class="rewardClicks">点击量：{{ clicks }}</div>
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
    toDetail(){
      this.$router.push({path:"/rewardDetail"})
    }
  }
};
</script>

<style>
.rewardBox {
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
.rewardHeader {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
}
.rewardBox .rewardHeader .userImg {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-right: 2rem;
}
.rewardBox .rewardHeader .userName {
  font-size: 1.5rem;
}
.rewardBox .rewardMain {
  padding-top: 1.5rem;
}
.rewardBox .rewardMain .rewardText {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 0 0 1.5rem 0;
  height: 2rem;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
}
.rewardBox .rewardMain .rewardImgBox ul {
  display: flex;
  justify-content: flex-start;
}
.rewardBox .rewardMain li {
  list-style: none;
  padding-right: 1rem;
}
.rewardBox .rewardMain li img {
  border-radius: 0.5rem;
}
.rewardBox .rewardFooter {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
}
</style>