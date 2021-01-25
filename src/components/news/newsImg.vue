<template>
  <div class="newsImg">
    <img :src="imgUrl" />
    <span>{{ text }}</span>
  </div>
</template>

<script >
export default {
  data() {
    return {
      text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      imgUrl:
        "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
    };
  },
};
</script>

<style scoped>
.newsImg {
  height: 15rem;
  line-height: 7.5rem;
  background-image: url({{imgUrl}});
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
}
img {
  width: 100%;
  height: 100%;
  opacity: 0.85;
  position: absolute;
  background-size: cover;
}
span {
  opacity: 0.95;
  position: absolute;
  color: black;
  font-size: 1.5rem;
  bottom: 0%;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 20rem;
}
</style>