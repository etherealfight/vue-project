<template>
  <div class="mainPage">
    <my-navbar></my-navbar>
    <a href="">aaaaaa</a>
    <!-- <div class="ani"></div> -->
  </div>
</template>

<script>
import my_navbar from "./my_navbar";

export default {
  components: {
    "my-navbar": my_navbar,
  },
  methods: {
    move(){
     window.open("https://www.baidu.com","_blank");
    }
  }
};
</script>

<style>
.mainPage{
  overflow: hidden;
}
.ani{
  position: absolute;
  margin-top: -0.25rem;
  width: 4rem;
  height: 0.2rem;
  background: linear-gradient(to right,rgba(128, 128, 128, 0.753) 15%,rgb(49, 49, 141) 50%,rgba(128, 128, 128, 0.699) 85%);
  animation: move1 4s alternate linear infinite ;
  z-index: 5;
}
a{
  direction: none;
  color: black;
}
a:link{
  color: aliceblue;
}
@keyframes move1 {
  0%{
    left: 0%;
  } 
  100%{
    left: 85%;
  }
}
</style>