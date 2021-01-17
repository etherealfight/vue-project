<template>
  <div class="nav_page">
    <span>首页</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      keyword: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped>
.nav_page{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0;
  border-bottom: 1px solid lightgray;
  background: l;
}
span{
  padding: 0.5rem 0 0 3rem;
  height: 3rem;
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}
.search{
  width: 20rem;
  height: 1.5rerm;
}
</style>