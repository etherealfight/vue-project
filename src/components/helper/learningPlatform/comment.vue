<!--
* @FileDescription:学习资源评论区评论组件
-->
<template>
  <div class="comment">
    <div class="commentHeader">
      <img :src="userimg" @click.self="toPersonal" />
      <span @click.self="toPersonal">{{ username }}</span>
      <i class="el-icon-close" v-show="isShow" @click="del"></i>
    </div>
    <div class="commentMain">
      <span>{{ commentText }}</span>
      <div class="date">{{ currentData }}</div>
    </div>
  </div>
</template>

<script>
import { deleteComment } from "../../../api";
import dayjs from "dayjs";
export default {
  computed: {
    currentData() {
      return dayjs(this.date).format("YYYY年MM月DD日 HH:mm:ss");
    },
    isShow() {
      if (this.userId === this.$store.state.userId) {
        return true;
      } else {
        return false;
      }
    },
  },
  props: {
    //用户id
    userId: {
      type: String,
      default: 1,
    },
    //评论id
    id: {
      type: Number,
      default: 1,
    },
    //用户名
    username: {
      type: String,
      default: "ccc",
    },
    //用户性别
    gender: {
      type: Number,
      default: 1,
    },
    //用户头像
    userimg: {
      type: String,
      default:
        "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
    },
    //用户签名
    sign: {
      type: String,
      default: "",
    },
    //用户简介
    introduction: {
      type: String,
      default: "",
    },
    //评论内容
    commentText: {
      type: String,
      default: "6666666666666",
    },
    //评论发表时间
    date: {
      type: String,
      default: "",
    },
  },
  methods: {
    /**
     * 删除评论
     */
    async del() {
      this.$confirm("是否删除此评论?", "提示", {
        customClass: "confirmdelete",
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          this.$emit("deleteContent");
          const res = await deleteComment(this.id);
          console.log(res);
          this.$message.success("删除成功!");
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
    /**
     * 跳转个人主页
     */
    toPersonal() {
      if (this.$store.state.userId === this.userId) {
        this.$router.push({
          name: "mypersonalPage",
        });
      } else {
        sessionStorage.setItem("tempUserId", this.userId);
        sessionStorage.setItem("gender", this.gender);
        sessionStorage.setItem("tempUserName", this.username);
        sessionStorage.setItem("tempUserImg", this.userimg);
        sessionStorage.setItem("tempUserSign", this.sign);
        sessionStorage.setItem("tempUserIntroduction", this.introduction);
        this.$router.push({
          name: "personalPage",
        });
      }
    },
  },
};
</script>

<style>
.comment {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  border-top: 1px solid rgb(244, 244, 244);
}
.comment .commentHeader {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.commentHeader .el-icon-close {
  position: absolute;
  right: 3rem;
  font-size: 2rem;
}
.comment .commentHeader img {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
}
.comment .commentHeader span {
  padding-left: 1rem;
  padding-right: 3rem;
  font-size: 1.75rem;
}
.comment .commentMain {
  padding: 1rem 0 1rem 1rem;
  font-size: 1.5rem;
}
.comment .commentMain span {
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
}
.comment .commentMain .date {
  padding-top: 1rem;
  font-size: 1.25rem;
}
</style>