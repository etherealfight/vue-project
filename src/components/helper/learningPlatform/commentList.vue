<template>
  <div class="commentList">
    <comment
      v-for="(item, index) in comments"
      :key="item.replyid"
      :id="item.replyid"
      :userid="item.userid"
      :username="item.username"
      :userimg="item.userimg"
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