<template>
  <div class="rewardList">
    <reward
      v-for="item in rewardlist"
      :key="item.id"
      :id="item.id"
      :username="item.username"
      :userimg="item.userimg"
      :fileaddress="item.fileaddress"
      :contentText="item.contentText"
      :date="item.date"
      :clicks="item.clicks"
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
      default: [
        {
          id: 1,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText:
            "23333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
          fileaddress: [
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          ],
          date: "2021-1-11",
          clicks: 2333,
        },
        {
          id: 2,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          fileaddress: [
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          ],
          date: "2021-1-16",
          clicks: 666,
        },
        {
          id: 3,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          fileaddress: [
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          ],
          date: "2021-1-16",
          clicks: 0,
        },
      ],
    },
  },
};
</script>

<style>
</style>