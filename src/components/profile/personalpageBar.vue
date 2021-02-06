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
      this.$router.push({ path: "/personalPage/rewardList" });
    },
    move2() {
      this.$router.push({ path: "/personalPage/learningList" });
    },
  },
};
</script>

<style>
.personalpageBar .el-menu-demo {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #409eff !important;
}

.personalpageBar .el-menu-demo .itembox .el-menu-item{
  display: flex;
  align-items: center;
  height: 5rem;
  font-size: 1.5rem;
}
.personalpageBar .el-menu-demo .itembox .el-menu-item.is-active {
  border-bottom: 2px solid #409eff;
  background: transparent;
}
</style>