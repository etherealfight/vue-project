<!--
* @FileDescription:用户主页导航栏组件
-->
<template>
  <div class="personalpageBar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <div class="itembox" @click="move1">
        <el-menu-item index="1" class="tabItem">悬赏平台</el-menu-item>
      </div>
      <div class="itembox" @click="move2">
        <el-menu-item index="2" class="tabItem">学习资源</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: {
      type: String,
      default: "1",
    },
  },
  methods: {
    move1() {
      if (this.$route.path === "/personalPage/learningList")
        this.$router.push({ path: "/personalPage/rewardList" });
      else if (this.$route.path === "/mypersonalPage/learningList")
        this.$router.push({ path: "/mypersonalPage/rewardList" });
    },
    move2() {
      if (this.$route.path === "/personalPage/rewardList")
        this.$router.push({ path: "/personalPage/learningList" });
      else if (this.$route.path === "/mypersonalPage/rewardList")
        this.$router.push({ path: "/mypersonalPage/learningList" });
    },
  },
};
</script>

<style scoped>
.personalpageBar .el-menu-demo {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.personalpageBar .el-menu-demo .itembox .el-menu-item {
  display: flex;
  /* align-items: center; */
  height: 5rem;
  font-size: 1.5rem;
}
.personalpageBar .el-menu-demo .itembox .el-menu-item.is-active {
  color: #409eff;
  border-bottom: 2px solid #409eff;
  background: transparent;
}
.el-menu--horizontal .el-menu-item:hover {
  background: white;
}
</style>