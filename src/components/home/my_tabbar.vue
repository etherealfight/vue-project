<!--
* @FileDescription:底部导航栏组件，用于页面的跳转
-->
<template>
  <div class="tab_page">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <div class="itembox" @click="move1">
        <img :src="homeUrl" />
        <el-menu-item index="1" class="tabItem">主页</el-menu-item>
      </div>
      <div class="itembox" @click="move2">
        <img :src="helperUrl" />
        <el-menu-item index="2" class="tabItem">小帮手</el-menu-item>
      </div>
      <div class="itembox" @click="move3">
        <img :src="ltUrl" />
        <el-menu-item index="3" class="tabItem">消息</el-menu-item>
      </div>
      <div class="itembox" @click="move4">
        <img :src="profileUrl" />
        <el-menu-item index="4" class="tabItem">我的</el-menu-item>
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
    },
  },
  /**
   * 根据是否选中切换导航栏图片路径更改图片样式
   */
  computed: {
    homeUrl: function () {
      if (this.activeIndex === "1") {
        return require("../../assets/zhuye.png");
      } else {
        return require("../../assets/zhuye-un.png");
      }
    },
    helperUrl: function () {
      if (this.activeIndex === "2") {
        return require("../../assets/zhushou.png");
      } else {
        return require("../../assets/zhushou_un.png");
      }
    },
    ltUrl: function () {
      if (this.activeIndex === "3") {
        return require("../../assets/lt.png");
      } else {
        return require("../../assets/lt_un.png");
      }
    },
    profileUrl: function () {
      if (this.activeIndex === "4") {
        return require("../../assets/wode.png");
      } else {
        return require("../../assets/wode_un.png");
      }
    },
  },
  methods: {
    /**
     * 跳转到首页
     */
    move1() {
      this.$router.push({ path: "/main" });
    },
    /**
     * 跳转到小帮手页面
     */
    move2() {
      this.$router.push({ path: "/helper" });
    },
    /**
     * 跳转到聊天页面
     */
    move3() {
      this.$router.push({ path: "/chat" });
    },
    /**
     * 跳转到个人信息
     */
    move4() {
      this.$router.push({ path: "/profile" });
    },
  },
};
</script>

<style scoped>
.tab_page .el-menu-demo {
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lightgrey;
}
.tab_page .el-menu-demo .itembox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.25rem;
  outline: none;
}
.tab_page .el-menu-demo .itembox img {
  width: 2.75rem;
  height: 2.75rem;
}
.tab_page .el-menu-demo .itembox .el-menu-item {
  margin: 0;
  padding: 0 0.5rem 0 0.5rem;
  height: 2rem;
  line-height: 1.75rem;
  user-select: none;
  font-size: 0.9rem;
}
.el-menu--horizontal > .itembox > .el-menu-item.is-active {
  background: transparent !important;
  color: #409eff;
}
.tabItem {
  font-size: 1.15rem !important;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background: transparent !important;
}
.navItem:hover {
  color: #409eff;
}
.navItem:active {
  color: #409eff;
}
</style>