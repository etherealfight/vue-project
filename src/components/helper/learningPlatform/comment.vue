<template>
  <div class="comment">
    <div class="commentHeader">
      <img :src="userimg" />
      <span>{{ username }}</span>
      <i class="el-icon-close" v-show="isShow" @click="del"></i>
    </div>
    <div class="commentMain">
      <span>{{ commentText }}</span>
    </div>
  </div>
</template>

<script>
import { deleteComment } from "../../../api";
export default {
  computed: {
    isShow: function () {
      if (this.userid === this.$store.state.userId) {
        return true;
      } else {
        return false;
      }
    },
  },
  props: {
    userid: {
      type: String,
      default: 1,
    },
    id: {
      type: Number,
      default: 1,
    },
    username: {
      type: String,
      default: "ccc",
    },
    userimg: {
      type: String,
      default:
        "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
    },
    commentText: {
      type: String,
      default: "6666666666666",
    },
  },
  methods: {
    async del() {
      let conf = confirm("确定删除?");
      if (conf === true) {
        this.$emit("deleteContent");
        const res = await deleteComment(this.id);
        console.log(res);
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
}
.comment .commentMain {
  padding: 1rem 0 1rem 0;
}
.comment .commentMain span {
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
}
</style>