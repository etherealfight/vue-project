<template>
  <div class="comment">
    <div class="commentHeader">
      <img :src="userimg" />
      <span>{{ username }}</span>
    </div>
    <div class="commentMain">
      <span>{{ commentText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
.comment .commentHeader img{
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
}
.comment .commentHeader span{
    padding-left: 1rem;
}
.comment .commentMain{
    padding: 1rem 0 1rem 0;
}
.comment .commentMain span{
    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
}
</style>