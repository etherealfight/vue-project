<!--
* @FileDescription:学习资源简介组件，用于展示学习资源简介信息
-->
<template>
  <div class="learnBox">
    <div class="learnHeader">
      <img :src="userimg" class="userImg" @click.self="toPersonal" />
      <div class="userName" @click.self="toPersonal">{{ username }}</div>
      <i class="el-icon-close" v-if="isShow" @click="flag && del()"></i>
    </div>
    <div class="learnMain" @click="toDetail">
      <div class="learnText">{{ contentText }}</div>
      <div class="learnImgBox">
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
    <div class="learnFooter" @click="toDetail">
      <div class="learnDate">{{ currentData }}</div>
      <div class="learnClicks">评论：{{ clicks }}</div>
    </div>
  </div>
</template>

<script>
import { deleteLearning } from "../../../api";
import dayjs from "dayjs";
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
    //用户性别
    gender: {
      type: Number,
      default: "",
    },
    //作者头像
    userimg: {
      type: String,
      default: "",
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
    //点击量
    clicks: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      flag: true,  //执行删除标识
    };
  },
  computed: {
    /**
     * 根据路由判断是否为本用户主页以决定是否显示删除按钮
     */
    isShow: function () {
      if (this.$route.path === "/mypersonalPage/learningList") {
        return true;
      } else {
        return false;
      }
    },
    /**
     * 转换日期格式
     */
    currentData() {
      return dayjs(this.date).format("YYYY年MM月DD日 HH:mm:ss");
    },
  },
  methods: {
    /**
     * 根据学习资源id跳转到相应学习资源详情页
     */
    toDetail() {
      console.log("studyid:", this.id);
      this.$router.push({
        path: "/learningDetail",
        query: { learningid: this.id, hits: this.clicks },
      });
    },
    /**
     * 根据用户id跳转到相应用户主页
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
    /**
     * 删除该学习资源
     */
    async del() {
      this.flag = false;
      this.$confirm("是否删除此资源?", "提示", {
        customClass: "confirmdelete",
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          if (this.$route.path === "/mypersonalPage/learningList") {
            this.$emit("deleteContent");
            const res = await deleteLearning(this.id);
            console.log(res);
          }
          this.$message.success("删除成功!");
          this.flag = true;
        })
        .catch(() => {
          this.$message.info("已取消删除");
          this.flag = true;
        });
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
.learnHeader .el-icon-close {
  position: absolute;
  right: 3rem;
  font-size: 2rem;
}
.learnBox .learnHeader .userImg {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-right: 2rem;
}
.learnBox .learnHeader .userName {
  font-size: 1.75rem;
  padding-right: 3rem;
}
.learnBox .learnMain {
  padding-top: 1.5rem;
}
.learnBox .learnMain .learnText {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 4rem;
  margin-bottom: 1rem;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  font-size: 1.5rem;
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
  font-size: 1.5rem;
}
</style>