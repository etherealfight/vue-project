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
@media only screen and (min-width: 320px) {
  html {
    font-size: 62.5% !important;
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
