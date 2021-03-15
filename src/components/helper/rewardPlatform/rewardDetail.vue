<!--
* @FileDescription:悬赏详情组件
-->
<template>
  <div class="rewardDetail">
    <div class="rewardDetailt"><span> 悬赏详情</span></div>
    <i class="el-icon-back" @click="back"></i>
    <div class="rewardDetailTitle" @click="toPersonalPage">
      <img :src="userimg" class="rewardDetailUserImg" />
      <div class="nameBox">
        <div class="rewardDetailName">{{ username }}</div>
        <div class="rewardDetailDate">{{ currentData }}</div>
      </div>
    </div>
    <div class="rewardDetailMain">
      <swiper :options="swiperOption" class="czp">
        <swiper-slide v-for="imgurl in fileaddress" :key="imgurl"
          ><img :src="imgurl" preview preview-text="悬赏"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <v-touch @swiperight="swiperright" class="wrapper" ref="wrapper">
        <div class="rewardDetailContext">
          {{ contentText }}
        </div>
      </v-touch>
    </div>
    <div class="rewardDetailFooter">
      <div class="rewardDetailmessage">
        <img src="../../../assets/lt_un.png" />
        <span>留言</span>
      </div>
      <el-button>接</el-button>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { toRewardDetail } from "../../../api";
import dayjs from "dayjs";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        //轮播图设置
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }, // 可选选项，自动滑动
      },
      fileaddress: [], //悬赏图片地址
      contentText: "", //悬赏内容
      date: "2021-01-25", //悬赏发表时间
      id: 0, //悬赏id
      username: "aaa", //悬赏发表者用户名
      userid: "", //悬赏发表者id
      //用户头像
      userimg:
        "http://www.shuoshuodaitupian.com/images/avatar_selection/avatar0011.jpg",
      clicks: 0, //点击量
    };
  },
  computed: {
    /**
     * 日期格式转换
     */
    currentData() {
      return dayjs(this.date).format("YYYY年MM月DD日 HH:mm:ss");
    },
  },
  /**
   * 初始化悬赏页
   */
  async created() {
    console.log("id:", this.$route.query.rewardid);
    console.log("hits", this.$route.query.hits);
    const res = await toRewardDetail(
      this.$route.query.rewardid,
      this.$route.query.hits
    );
    console.log("init:", res);
    this.fileaddress = res.images;
    this.username = res.username;
    this.userimg = res.headportrait;
    this.contentText = res.rewardinfo;
    this.date = res.rewardtime;
    this.id = res.commentid;
    this.userid = res.userid;
    this.clicks = res.rewardhits;
  },
  mounted() {
    //计算右滑返回区域高度
    let mainHight = document.querySelector(".rewardDetailMain").offsetHeight;
    let swiperHight = document.querySelector(".swiper-container").offsetHeight;
    let footerHight = document.querySelector(".rewardDetailFooter")
      .offsetHeight;
    let waperHight = mainHight - swiperHight - footerHight - 20;
    let wrapper = document.getElementsByClassName("wrapper");
    console.log(wrapper);
    console.log(waperHight);
    wrapper[0].style.height = waperHight + "px";
  },
  methods: {
    /**
     * 根据用户id跳转到用户个人主页
     */
    toPersonalPage() {
      if (this.$store.state.userId === this.userid) {
        this.$router.push({
          name: "mypersonalPage",
        });
      } else {
        this.$router.push({
          name: "personalPage",
        });
      }
    },
    /**
     * 监听返回按钮，返回上一页
     */
    back() {
      this.$router.back(-1);
    },
    /**
     * 监听右滑动作返回上一页
     */
    swiperright() {
      console.log("back");
      this.$router.back(-1);
    },
  },
};
</script>

<style scoped>
html {
  width: 100vw;
  height: 100vh;
}
.rewardDetailMain .wrapper {
  width: 100vw;
  touch-action: pan-y !important;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 2%;
}
.rewardDetail {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.rewardDetailt {
  font-size: 2rem;
  position: absolute;
  width: 100vw;
  border-bottom: 1px solid rgb(244, 244, 244);
  top: 2%;
  padding-bottom: 1rem;
  box-sizing: border-box;
}
.rewardDetailt span {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.rewardDetail .rewardDetailTitle {
  display: flex;
  padding: 6rem 0 1.5rem 1.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(244, 244, 244);
}
.rewardDetail .rewardDetailTitle .rewardDetailUserImg {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}
.rewardDetail .rewardDetailTitle .nameBox {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.75rem;
  padding-left: 2rem;
  box-sizing: border-box;
}
.rewardDetail .rewardDetailMain {
  width: 100vw;
  height: 100%;
  padding: 1rem 0 6rem 0;
  overflow: scroll;
  box-sizing: border-box;
}
.swiper-container {
  width: 30rem;
  height: 15rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
}
.swiper-slide {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.swiper-slide img {
  max-height: 100%;
  max-width: 100%;
}
.rewardDetailContext {
  padding: 2rem;
  padding-bottom: 8rem;
  display: -webkit-box;
  word-break: break-all;
  font-size: 1.5rem;
}
.rewardDetailFooter {
  width: 100vw;
  padding: 0 2rem 0 2rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-top: 1px solid rgb(244, 244, 244);
  bottom: 0%;
  box-sizing: border-box;
}
.rewardDetailmessage img {
  width: 4rem;
  height: 4rem;
}
.rewardDetailFooter .rewardDetailmessage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rewardDetailFooter .el-button {
  height: 4rem;
}
</style>