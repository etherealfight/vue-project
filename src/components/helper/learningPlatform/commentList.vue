<template>
  <div class="commentList">
    <comment
      v-for="item in comments"
      :key="item.id"
      :id="item.id"
      :username="item.username"
      :userimg="item.userimg"
      :commentText="item.commentText"
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
      default: [
        {
          id: 1,
          username: "cccc",
          userImg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          commentText: "6666666666666",
        },
        {
          id: 2,
          username: "ccccc",
          userImg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          commentText:
            "66666666666666666666666666666666666666666666666666666666666666666666666",
        },
        {
          id: 3,
          username: "cccccc",
          userImg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          commentText: "233333333333333333",
        },
      ],
    },
  },
};
</script>

<style>
</style>