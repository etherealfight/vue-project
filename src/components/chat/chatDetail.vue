<template>
  <div class="chatDetailBox">
    <div class="header">
      <i class="el-icon-back" @click="back"></i><span>{{ objectname }}</span>
    </div>
    <div class="chatwrapper">
      <div class="main">
        <div
          class="content"
          :class="item.person"
          v-for="item in dialog"
          :key="item.id"
        >
          <div class="rightBox" v-if="item.person === 'user'">
            <span class="center">{{ item.time }}</span>
            <div class="right">
              <div class="context contextRight">{{ item.context }}</div>
              <div class="image">
                <img :src="userImg" />
              </div>
            </div>
          </div>
          <div class="leftBox" v-if="item.person === 'object'">
            <span class="center">{{ item.time }}</span>
            <div class="left">
              <div class="image">
                <img :src="objectImg" />
              </div>
              <div class="context contextLeft">{{ item.context }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <el-input v-model="input"></el-input
      ><el-button type="info" round class="inputButton">发送</el-button>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      username: this.$store.state.userName,
      objectname: "quan",
      userImg: this.$store.state.userImage,
      objectImg: this.$store.state.userImage,
      dialog: [
        { id: 1, person: "user", context: "hhhhhhhh", time: "2021-2-16 10:11" },
        {
          id: 2,
          person: "object",
          context: "66666666",
          time: "2021-2-16 11:10",
        },
        {
          id: 3,
          person: "user",
          context:
            "eeeeeehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
          time: "2021-2-16 11:11",
        },
        {
          id: 4,
          person: "object",
          context: "66666666666",
          time: "2021-2-16 11:19",
        },
        {
          id: 5,
          person: "object",
          context: "66666666",
          time: "2021-2-16 11:20",
        },
        {
          id: 6,
          person: "user",
          context:
            "eeeeeehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
          time: "2021-2-16 11:11",
        },
        {
          id: 7,
          person: "object",
          context: "66666666666",
          time: "2021-2-16 11:19",
        },
        {
          id: 8,
          person: "object",
          context: "66666666",
          time: "2021-2-16 11:20",
        },
        {
          id: 9,
          person: "user",
          context:
            "eeeeeehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
          time: "2021-2-16 11:11",
        },
        {
          id: 10,
          person: "object",
          context: "66666666666",
          time: "2021-2-16 11:19",
        },
        {
          id: 11,
          person: "object",
          context: "66666666",
          time: "2021-2-16 11:20",
        },
      ],
      input: "",
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    loadData() {
      this.$nextTick(() => {
        const wrapper = document.querySelector(".chatwrapper");
        this.scroll = new BScroll(wrapper, {
          click: true,
          tap: true,
          pullDownRefresh: {
            threshold: 30,
          },
        });
        
        //下拉加载数据 
        this.scroll.on("pullingDown", () => {
          console.log("jz");
          this.scroll.finishPullDown()
        });
      });
    },
  },
  mounted() {
    this.loadData();
    //滚动条置底
    let height = document.querySelector(".main").scrollHeight;
    console.log(height)
    window.scrollTo(0,height);
  },
};
</script>

<style scoped>
.chatDetailBox {
  width: 100vw;
  height: 100vh;
  background: rgb(240, 240, 240);
}
.chatDetailBox .header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: rgb(240, 240, 240);
  z-index: 30;
}
.chatDetailBox .header span {
  font-size: 1.5rem;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 20%;
}
.chatwrapper {
  position: absolute;
  width: 100vw;
  height: 85vh;
  margin: 5rem 0 6rem 0;
}
.main {
  background-color: rgb(240, 240, 240);
  padding-bottom: 5rem;
  box-sizing: border-box;
}
.content {
  width: calc(100% - 40px);
  padding: 1rem;
  overflow-y: scroll;
  flex: 1;
}
.content:hover::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}
.leftBox,
.rightBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.context {
  max-width: 60vw;
  padding: 0.75rem;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  color: #000;
  word-wrap: break-word;
  word-break: normal;
}
.left .context {
  margin-left: 1rem;
  background-color: #fff;
}
.left .context:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent;
  border-top: 0.5rem solid transparent;
  border-right: 0.5rem solid #fff;
  border-bottom: 0.5rem solid transparent;
  left: -1rem;
}
.right .context {
  margin-right: 1rem;
  background-color: #9eea6a;
}
.right .context:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 0.5rem solid #9eea6a;
  border-top: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  right: -1rem;
}
.left {
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: flex-start;
}
.right {
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.image img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.footer {
  width: 100vw;
  padding: 1rem;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background: rgb(240, 240, 240);
}
.footer .el-input >>> .el-input__inner {
  width: 70vw;
  height: 4rem;
  border-radius: 3rem;
}
.footer >>> .el-button {
  width: 20vw;
  height: 4rem;
  border-radius: 3rem;
}
.footer >>> .el-button span {
  font-size: 1rem;
}
</style>