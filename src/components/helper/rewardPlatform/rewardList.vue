<!--
* @FileDescription:悬赏简介列表组件
-->
<template>
  <div class="rerwardwrapper">
    <div class="rewardList">
      <reward
        v-for="(item, index) in rewardlist"
        :key="item.commentid"
        :id="item.commentid"
        :userId="item.userid"
        :username="item.username"
        :sign="item.signature"
        :gender="item.gender"
        :introduction="item.introduction"
        :userimg="item.headportrait"
        :fileaddress="item.images"
        :contentText="item.rewardinfo"
        :date="item.rewardtime"
        :clicks="item.rewardhits"
        @deleteContent="handleDelete(index)"
      ></reward>
    </div>
  </div>
</template>

<script>
import reward from "./reward";
import {
  searchData,
  searchReward1,
  searchReward2,
  searchRewardbyid,
} from "../../../api";
import BScroll from "better-scroll";

export default {
  components: {
    reward: reward,
  },
  props: {
    //用户id
    userid: {
      type: String,
      default: "",
    },
    //搜索关键词
    input: {
      type: String,
      default: "",
    },
    //搜索目标
    searchTarget: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      keyword: "", //搜索关键词
      initState: true, //判断是否为初始页面
      pageNum: 1, //当前展示到的页面
      totalNum: 1, //总共查询到满足条件的页面
      pageNum1: 1, //符合用户名的文章页数
      showLoading: false, //是否在加载中标识
      rewardlist: [],
    };
  },
  watch: {
    //监听当前路由是否为搜索目标
    searchTarget() {
      if (this.searchTarget === "rewardList") {
        this.keyword = this.input;
        this.rewardlist = [];
        this.pageNum = 1;
        this.pageNum = 1;
        this.initState = true;
        this.getData();
        this.$emit("clearSearch");
      }
    },
  },
  /**
   * 初始化首页
   */
  async created() {
    let res = {};
    if (
      this.$route.path === "/mypersonalPage/rewardList" ||
      this.$route.path === "/personalPage/rewardList"
    ) {
      res = await searchRewardbyid(this.userid, this.pageNum);
    } else {
      res = await searchData(this.pageNum);
    }
    console.log("init:", res);
    this.rewardlist = res.detail;
    this.totalNum = res.pageNumber;
    this.pageNum++;
    console.log("rew", this.rewardlist);
  },
  mounted() {
    this.loadData();
  },
  updated() {
    //重新计算高度
    this.scroll.refresh();
    //当数据加载完毕以后通知better-scroll
    this.scroll.finishPullUp();
  },
  methods: {
    /**
     * 删除评论
     */
    handleDelete(index) {
      console.log("index:", index);
      console.log("shan...");
      this.rewardlist.splice(index, 1);
    },
    /**
     * 根据查询条件获取文章信息
     */
    async getData() {
      try {
        console.log("startget");
        if (this.keyword == "") {
          let res = {};
          if (
            this.$route.path === "/mypersonalPage/rewardList" ||
            this.$route.path === "/personalPage/rewardList"
          ) {
            res = await searchRewardbyid(this.userid, this.pageNum);
          } else {
            res = await searchData(this.pageNum);
          }
          this.rewardlist = [...this.rewardlist, ...res.detail];
          console.log(res);
          console.log("chushihua");
        } else {
          if (this.initState) {
            console.log("startgetinit");
            const res1 = await searchReward1(this.keyword, this.pageNum);
            console.log(res1);
            const res2 = await searchReward2(this.keyword, this.pageNum);
            this.totalNum = res1.pageNumber + res2.pageNumber;
            this.pageNum1 = res1.pageNumber;
            this.initState = false;
            console.log(res1);
            console.log(res2);
          }
          console.log(this.pageNum, this.pageNum1);
          if (this.pageNum <= this.pageNum1) {
            const res1 = await searchReward1(this.keyword, this.pageNum);
            console.log(res1);
            if (this.pageNum === 1) {
              this.rewardlist = res1.detail;
            } else {
              this.rewardlist = [...this.rewardlist, ...res1.detail];
            }
          } else if (
            this.totalNum >= this.pageNum &&
            this.pageNum > this.pageNum1
          ) {
            const res2 = await searchReward2(
              this.keyword,
              this.pageNum - this.pageNum1
            );
            console.log(res2);
            if (this.pageNum - this.pageNum1 === this.pageNum) {
              this.rewardlist = res2.detail;
            } else {
              this.rewardlist = [...this.rewardlist, ...res2.detail];
            }
          }

          if (this.pageNum <= this.pageNum1) {
            const res1 = await searchReward1(this.keyword, this.pageNum);
            if (res1.detail.length < 10 && this.pageNum == 1) {
              const res2 = await searchReward2(this.keyword, this.pageNum);
              this.rewardlist = [...this.rewardlist, ...res2.detail];
              this.pageNum++;
              console.log(this.pageNum);
            }
          }

          if (this.totalNum === 0) {
            this.$message.warning("没有满足条件的内容");
          }
        }

        this.pageNum++;
        console.log(this.pageNum);
      } catch (error) {
        //this.$message.warning(error.message);
      }
    },
    /**
     * 下拉加载数据
     */
    async loadData() {
      this.$nextTick(() => {
        const wrapper = document.querySelector(".rerwardwrapper");
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
};
</script>

<style>
.rerwardwrapper {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
}
.rewardList {
  width: 100vw;
  padding: 8.6rem 0 4.6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
</style>