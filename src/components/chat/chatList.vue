<template>
  <div class="chatListBox">
      <chatComponent
      v-for="item in chatInformation"
      :key="item.id"
      :id="item.id"
      :username="item.username"
      :userimg="item.userimg"
      :contentText="item.contentText"
      :date="item.date">
      </chatComponent>
  </div>
</template>

<script>
import chatComponent from "./chatComponent"
export default {
components: {
    chatComponent
},
props: {
    chatInformation:{
        type:Array,
        default:[
           {
          id: 1,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText:
            "hhhhhhhhhhh",
          date: "2021-1-11",
        },
        {
          id: 2,
          username: "ccc",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          date: "2021-1-16",
        },
        {
          id: 3,
          username: "quan",
          userimg:
            "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
          contentText: "2333333333",
          date: "2021-1-16",
        },
        ]
    }
}
}
</script>

<style>

</style>