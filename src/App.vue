<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 使用rem适配，根据媒体查询获取的屏幕宽度设置页面根元素字体大小 */
@media only screen and (min-width: 320px) {
  html {
    font-size: 65% !important;
  }
}
@media only screen and (min-width: 400px) {
  html {
    font-size: 80% !important;
  }
}
@media only screen and (min-width: 500px) {
  html {
    font-size: 95% !important;
  }
}
@media only screen and (min-width: 640px) {
  html {
    font-size: 125% !important;
  }
}
@media only screen and (min-width: 750px) {
  html {
    font-size: 150% !important;
  }
}
@media only screen and (min-width: 1242px) {
  html {
    font-size: 187.5% !important;
  }
}
</style>
