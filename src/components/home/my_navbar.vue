<template>
  <div class="nav_page">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="login" class="navItem">登录</el-menu-item>
      <el-menu-item index="2" class="navItem">注册</el-menu-item>
      <el-menu-item index="3" class="navItem">主页</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
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

<style>
.el-menu-demo {
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
}
.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom:1px solid gray !important;
}
.navItem:hover{
   border-bottom:1px solid gray !important;
}
.navItem:active{
   border-bottom:1px solid gray !important;
}
</style>