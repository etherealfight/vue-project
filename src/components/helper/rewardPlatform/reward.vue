<template>
  <div class="rewardBox">
    <div class="rewardHeader" @click.self="toPersonal">
      <img :src="userimg" class="userImg" />
      <div class="userName">{{ username }}</div>
      <i class="el-icon-close" v-if="isShow" @click.self="del"></i>
    </div>
    <div class="rewardMain" @click="toDetail">
      <div class="rewardText">{{ contentText }}</div>
      <div class="rewardImgBox">
        <ul>
          <li v-for="(img, index) in fileaddress" :key="index">
            <img :src="fileaddress[index]" />
          </li>
        </ul>
      </div>
    </div>
    <div class="rewardFooter" @click="toDetail">
      <div class="rewardDate">{{ date }}</div>
      <div class="rewardClicks">点击量：{{ clicks }}</div>
    </div>
  </div>
</template>

<script>
import { deleteReward } from "../../../api";
export default {
  computed: {
    isShow: function () {
      if (this.$route.path === "/mypersonalPage/rewardList") {
        return true;
      } else {
        return false;
      }
    },
  },
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
    userId: {
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
    sign: {
      type: String,
      default: "",
    },
    introduction: {
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
    toPersonal() {
      if (this.$store.state.userName === this.username) {
        this.$store.commit("changeId", { currenrId: this.userId });
        this.$router.push({
          name: "mypersonalPage",
        });
      } else {
        this.$store.commit("changeId", { currenrId: this.userId });
        this.$router.push({
          name: "personalPage",
          query: { id: this.userId },
        });
      }
    },
    toDetail() {
      this.$router.push({
        path: "/rewardDetail",
        query: { rewardid: this.id, hits: this.clicks },
      });
    },
    async del() {
      console.log("path:", this.$route.path);
      if (this.$route.path === "/mypersonalPage/rewardList") {
        let conf = confirm("确定删除此悬赏?");
        if (conf === true) {
          this.$emit("deleteContent");
          const res = await deleteReward(this.id);
          console.log(res);
        }
      }
    },
  },
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
.rewardHeader .el-icon-close {
  position: absolute;
  right: 3rem;
  font-size: 2rem;
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
  height: 2.9rem;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  margin-bottom: 1rem;
  box-sizing: border-box;
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
  width: 25vw;
  height: 12vh;
}
.rewardBox .rewardFooter {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
}
</style>