<!--
* @FileDescription:小帮手导航栏组件
-->
<template>
  <div class="helperbar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <div class="itembox 1" @click="move1">
        <el-menu-item index="1" class="tabItem">悬赏平台</el-menu-item>
      </div>
      <div class="itembox 2" @click="move2">
        <el-menu-item index="2" class="tabItem">学习资源</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    //处于选中状态的选项
    activeIndex: {
      type: String,
      default: "1",
    },
  },
  methods: {
    /**
     * 跳转到悬赏列表子组件
     */
    move1() {
      this.$router.push({ path: "/helper/rewardList" });
    },
    /**
     * 跳转到学习资源列表子组件
     */
    move2() {
      this.$router.push({ path: "/helper/learningList" });
    },
  },
};
</script>

<style scoped>
.helperbar .el-menu-demo {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.helperbar .el-menu-demo .itembox .el-menu-item {
  display: flex;
  height: 5rem;
  font-size: 1.5rem;
}
.helperbar .el-menu-demo .itembox .el-menu-item.is-active {
  color: #409eff;
  border-bottom: 2px solid #409eff;
  background: transparent;
}
.el-menu--horizontal .el-menu-item:hover {
  background: rgb(244, 244, 244);
}
</style>