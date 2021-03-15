<!--
* @FileDescription:新闻详情页，用于展示新闻详情内容
-->
<template>
  <div class="newsdetail">
    <i class="el-icon-back" @click="back"></i>
    <div class="newsdetailheader">
      <h2 class="newsdetailtitle">{{ title }}</h2>
    </div>
    <div class="newsDetailMiddle">
      <div class="newsdetailAuthor">{{ author }}</div>
      <div class="newsdetailDate">{{ currentData }}</div>
    </div>
    <div class="newsDetailMain">
      <div class="content">
        <swiper :options="swiperOption" class="czp">
          <swiper-slide v-for="imgurl in imgUrls" :key="imgurl"
            ><img :src="imgurl" preview preview-text="新闻"
          /></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <v-touch @swiperight="swiperright" class="wrapper" ref="wrapper">
          <div class="newsContext">
            {{ context }}
          </div>
        </v-touch>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { toNewsDetail } from "../../api";
import BScroll from "better-scroll";
import dayjs from "dayjs";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        //轮播图属性设置
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        zoom: {
          containerClass: "swiper-slide",
        },
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }, // 可选选项，自动滑动
      },
      id: 0, //新闻id
      title: "这是一个大新闻", //新闻标题
      author: "cccc", //新闻作者
      date: "2021-01-16", //新闻日期
      imgUrls: [], //新闻图片列表
      //新闻内容
      context:
        "ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    };
  },
  computed: {
    //日期格式转换
    currentData() {
      return dayjs(this.date).format("YYYY年MM月DD日 HH:mm:ss");
    },
  },
  /**
   * 初始化新闻详情
   */
  async created() {
    const res = await toNewsDetail(this.$route.query.id);
    console.log(res);
    this.id = res.newsid;
    this.title = res.newstitle;
    this.author = res.author;
    this.context = res.newsinfo;
    this.imgUrls = res.newsimages;
    this.date = res.newstime;
    this.$previewRefresh();
  },
  mounted() {
    //计算右滑返回区域高度
    this.myscroll();
    let mainHeight = document.getElementsByClassName(".newsDetailMiddle")
      .offsetHeight;
    let contentHeight = document.getElementsByClassName("newsContext")
      .offsetHeight;
    console.log(contentHeight);
    let wrapperHeight = contentHeight + mainHeight;
    let wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].style.height = wrapperHeight + "px";
  },
  updated() {
    //重新计算高度
    this.scroll.refresh();
    //当数据加载完毕以后通知better-scroll
    this.scroll.finishPullUp();
  },
  methods: {
    /**
     * 点击返回按钮事件，返回路由上一页
     */
    back() {
      this.$router.back(-1);
    },
    /**
     * 右滑返回路由上一页
     */
    swiperright() {
      this.$router.back(-1);
    },
    /**
     * 滑动
     */
    myscroll() {
      this.$nextTick(() => {
        const wrapper = document.querySelector(".newsDetailMain");
        this.scroll = new BScroll(wrapper, {
          pullUpLoad: true,
          click: true,
          tap: true,
        });
        console.log(this.scroll);
      });
    },
  },
};
</script>

<style scoped>
html {
  width: 100vw;
  height: 100vh;
}
.newsdetailtitle {
  font-size: 2rem;
}
.el-icon-back {
  position: absolute;
  font-size: 3rem;
  left: 5%;
  top: 2%;
  z-index: 20;
}
.newsdetailheader {
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  background: white;
  z-index: 15;
}
.newsdetail {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
.newsDetailMiddle {
  padding: 2rem 0 2rem 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  border-bottom: lightgrey 1px solid;
  font-size: 1.65rem;
  box-sizing: border-box;
  background: white;
  z-index: 15;
}
.newsDetailMain {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
  box-sizing: border-box;
}
.newsContext {
  width: 100vw;
  padding: 2rem 2rem 14rem 2rem;
  box-sizing: border-box;
  word-wrap: break-word;
  font-size: 1.5rem;
}
</style>