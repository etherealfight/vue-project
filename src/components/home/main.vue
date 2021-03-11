<template>
  <div class="bswrapper">
    <div class="content">
      <div class="mainPage">
        <my-navbar></my-navbar>
        <div class="block">
          <swiper :options="swiperOption" class="czp">
            <swiper-slide v-for="(item, index) in newsData" :key="item.id"
              ><newsimg
                :text="item.newstitle"
                :imgUrl="item.newsimages[0]"
                v-if="index < 5"
              ></newsimg
            ></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <newslist class="newslist" :newsData="newsData"></newslist>
      </div>
    </div>
    <div class="mainFooter">
      <my-tabbar class="tabbar" activeIndex="1"></my-tabbar>
    </div>
  </div>
</template>

<script>
import my_navbar from "./my_navbar";
import my_tabbar from "./my_tabbar";
import newsImg from "../news/newsImg";
import newsList from "../news/newsList";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BScroll from "better-scroll";
import { searchNews } from "../../api";

export default {
  data() {
    return {
      initState: true, //判断是否为初始页面
      pageNum: 1, //当前展示到的页面
      totalNum: 1, //总共查询到满足条件的页面
      showLoading: false, //是否在加载中标识
      newsData: [], //新闻数据
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
        }, // 可选选项，自动滑动
      },
    };
  },
  components: {
    "my-navbar": my_navbar,
    "my-tabbar": my_tabbar,
    newsimg: newsImg,
    newslist: newsList,
    swiper,
    swiperSlide,
  },
  async created() {
    console.log(this.pageNum);
    const res = await searchNews(1);
    console.log(res);
    this.newsData = res.detail;
    this.totalNum = res.pageNumber;
    this.pageNum = 2;
  },
  mounted() {
    this.loadData();
  },
  methods: {
    swiperright() {
      console.log("r");
      prev();
    },
    swiperleft() {
      console.log("l");
      next();
    },
    /**
     * 根据查询条件获取文章信息
     */
    async getData() {
      try {
        console.log("startget");
        let res = {};
        res = await searchNews(this.pageNum);
        this.newsData = [...this.newsData, ...res.detail];
        console.log(res);
        console.log("chushihua");

        this.pageNum++;
        console.log(this.pageNum);
      } catch (error) {
        //this.$message.warning(error.message);
      }
    },
    loadData() {
      this.$nextTick(() => {
        const wrapper = document.querySelector(".bswrapper");
        this.scroll = new BScroll(wrapper, {
          pullUpLoad: true,
          click: true,
          tap: true,
          pullUpLoad: {
            threshold: -30, // 当上拉距离超过30px时触发 pullingUp 事件
          },
        });
        console.log(this.scroll);
        this.scroll.on("pullingUp", async () => {
          if (this.pageNum > this.totalNum) {
            this.$message.info("到底啦别拉了");
            this.showLoading = false;
            return;
          } else {
            this.showLoading = true;
            console.log("获取中");
            await this.getData();
            console.log("获取完");
          }
          this.scroll.finishPullUp();
        });
      });
    },
  },
  updated() {
    //重新计算高度
    this.scroll.refresh();
    //当数据加载完毕以后通知better-scroll
    this.scroll.finishPullUp();
  },
};
</script>

<style scoped>
.mainPage {
  width: 100vw;
}
.bswrapper {
  position: absolute;
  height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
}
.block {
  padding: 2rem;
}
.swiper-container {
  border-radius: 0.5rem;
}
.newslist {
  padding-bottom: 4rem;
}
.tabbar {
  position: fixed;
  bottom: 0;
}
</style>