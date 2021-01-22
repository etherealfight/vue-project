<template>
  <div class="helperbox">
    <helperbar class="helperbar"></helperbar>

    <mytabbar class="mytabbar" activeIndex="2"></mytabbar>
  </div>
</template>

<script>
import helperbar from "./helperbar";
import mytabbar from "../home/my_tabbar";
export default {
  components: { helperbar: helperbar, mytabbar: mytabbar },
};
</script>

<style>
.helperbox .helperbar {
  position: fixed;
  top: 0;
}
.helperbox .mytabbar{
    position: fixed;
    bottom: 0;
}
</style>