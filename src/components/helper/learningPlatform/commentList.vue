<!--
* @FileDescription:学习资源评论区评论列表组件
-->
<template>
  <div class="commentList">
    <comment
      v-for="(item, index) in comments"
      :key="item.replyid"
      :id="item.replyid"
      :userId="item.userid"
      :username="item.username"
      :gender="item.gender"
      :userimg="item.headportrait"
      :sign="item.signature"
      :introduction="item.introduction"
      :date="item.replytime"
      :commentText="item.replyinfo"
      @deleteContent="handleDelete(index)"
    ></comment>
  </div>
</template>

<script>
import comment from "./comment";

export default {
  components: {
    comment,
  },
  props: {
    comments: {
      type: Array,
      default: [],
    },
  },
  methods: {
    handleDelete(index) {
      this.comments.splice(index, 1);
    },
  },
};
</script>

<style>
</style>