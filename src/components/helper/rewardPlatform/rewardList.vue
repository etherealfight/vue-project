<template>
  <div class="rewardList">
    <reward
      v-for="item in rewardlist"
      :key="item.id"
      :id="item.id"
      :username="item.username"
      :contentText="item.contentText"
      :date="item.date"
    ></reward>
  </div>
</template>

<script>
import reward from "./reward";
export default {
  components: {
    reward: reward,
  },
  props: {
    rewardlist: {
      type: Array,
      default: {},
    },
  },
};
</script>

<style>
</style>