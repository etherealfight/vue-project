<!--
* @FileDescription:聊天对话列表组件
-->
<template>
  <div class="chatListBox">
    <chatComponent
      v-for="item in chatInformation"
      :key="item.id"
      :id="item.id"
      :username="item.username"
      :userimg="item.userimg"
      :contentText="item.contentText"
      :date="item.date"
      :isRead="item.isRead"
    >
    </chatComponent>
  </div>
</template>

<script>
import chatComponent from "./chatComponent";
export default {
  components: {
    chatComponent,
  },
  props: {
    chatInformation: {
      type: Array,
      default: [
        {
          id: 1,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
          date: "2021-1-11",
          isRead: false,
        },
        {
          id: 2,
          username: "ccc",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          date: "2021-1-16",
          isRead: true,
        },
        {
          id: 3,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          date: "2021-1-16",
          isRead: false,
        },
        {
          id: 4,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
          date: "2021-1-11",
          isRead: false,
        },
        {
          id: 5,
          username: "ccc",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          date: "2021-1-16",
          isRead: true,
        },
        {
          id: 6,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          date: "2021-1-16",
          isRead: false,
        },
        {
          id: 7,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
          date: "2021-1-11",
          isRead: false,
        },
        {
          id: 8,
          username: "ccc",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          date: "2021-1-16",
          isRead: true,
        },
        {
          id: 9,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          date: "2021-1-16",
          isRead: false,
        },
        {
          id: 10,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
          date: "2021-1-11",
          isRead: false,
        },
        {
          id: 11,
          username: "ccc",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          date: "2021-1-16",
          isRead: true,
        },
        {
          id: 12,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          date: "2021-1-16",
          isRead: false,
        },
        {
          id: 13,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
          date: "2021-1-11",
          isRead: false,
        },
      ],
    },
  },
};
</script>

<style>
</style>