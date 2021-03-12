<template>
  <div class="rewardBox">
    <div class="rewardHeader" >
      <img :src="userimg" class="userImg" @click.self="toPersonal"/>
      <div class="userName" @click.self="toPersonal">{{ username }}</div>
      <i class="el-icon-close" v-show="isShow" @click.once="del"></i>
    </div>
    <div class="rewardMain" @click="toDetail">
      <div class="rewardText">{{ contentText }}</div>
      <div class="rewardImgBox">
        <ul>
          <li
            v-for="(img, index) in fileaddress"
            :key="index"
            v-show="index < 3"
          >
            <img :src="fileaddress[index]" />
          </li>
        </ul>
      </div>
    </div>
    <div class="rewardFooter" @click="toDetail">
      <div class="rewardDate">{{ currentData }}</div>
      <div class="rewardClicks">点击量：{{ clicks }}</div>
    </div>
  </div>
</template>

<script>
import { deleteReward } from "../../../api";
import dayjs from "dayjs";
export default {
  computed: {
    isShow: function () {
      if (this.$route.path === "/mypersonalPage/rewardList") {
        return true;
      } else {
        return false;
      }
    },
    currentData() {
      return dayjs(this.date).format("YYYY年MM月DD日 HH:mm:ss");
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
    //用户id
    userId: {
      type: String,
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
      if (this.$store.state.userId === this.userId) {
        this.$router.push({
          name: "mypersonalPage",
        });
      } else {
        sessionStorage.setItem("tempUserId", this.userId);
        sessionStorage.setItem("tempUserName", this.username);
        sessionStorage.setItem("tempUserImg", this.userimg);
        sessionStorage.setItem("tempUserSign", this.sign);
        sessionStorage.setItem("tempUserIntroduction", this.introduction);
        this.$router.push({
          name: "personalPage",
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
      this.$confirm("是否删除此悬赏?", "提示", {
        customClass: "confirmdelete",
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          if (this.$route.path === "/mypersonalPage/rewardList") {
            this.$emit("deleteContent");
            const res = await deleteReward(this.id);
            console.log(res);
          }
          this.$message.success("删除成功!");
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
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
.confirmdelete {
  width: 70vw !important;
}
.rewardHeader {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
}
.rewardHeader .el-icon-close {
  position: fixed;
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
  font-size: 1.75rem;
  padding-right: 3rem;
}
.rewardBox .rewardMain {
  padding-top: 1.5rem;
}
.rewardBox .rewardMain .rewardText {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 4rem;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  margin-bottom: 1rem;
  box-sizing: border-box;
  font-size: 1.5rem;
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
  font-size: 1.5rem;
}
</style>