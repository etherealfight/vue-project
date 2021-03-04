<template>
  <div class="learningwrapper">
    <div class="learningList">
      <learning
        v-for="item in learninglist"
        :key="item.id"
        :id="item.id"
        :username="item.username"
        :userimg="item.userimg"
        :fileaddress="item.fileaddress"
        :contentText="item.contentText"
        :date="item.date"
        :clicks="item.clicks"
      ></learning>
    </div>
  </div>
</template>

<script>
import learning from "./learning";
import { searchData, searchLearning1, searchLearning2 } from "../../../api";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      keyword: "", //搜索关键词
      initState: true, //判断是否为初始页面
      pageNum: 1, //当前展示到的页面
      totalNum: 1, //总共查询到满足条件的页面
      pageNum1: 1, //符合用户名的文章页数
      showLoading: false, //是否在加载中标识
      learninglist: [
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
    };
  },
  components: {
    learning: learning,
  },
  /**
   * 初始化首页
   */
  async created() {
    const res = await searchData(this.pageNum);
    this.learninglist = res.detail;
    this.totalNum = res.pageNumber;
    this.pageNum++;
  },
  mounted() {
    this.loadData();
  },
  props: {
    input: {
      type: String,
      default: "",
    },
    searchTarget: {
      type: String,
      default: "",
    },
  },
  methods: {
    /**
     * 根据查询条件获取文章信息
     */
    async getData() {
      try {
        console.log("startget");
        if (this.keyword == "") {
          const res = await searchData(this.pageNum);
          this.learninglist = [...this.learninglist, ...res.detail];
          console.log(res);
          console.log("chushihua");
        } else {
          if (this.initState) {
            console.log("startgetinit");
            const res1 = await searchLearning1(this.keyword, this.pageNum);
            console.log(res1);
            const res2 = await searchLearning2(this.keyword, this.pageNum);
            this.totalNum = res1.pageNumber + res2.pageNumber;
            this.pageNum1 = res1.pageNumber;
            this.initState = false;
            console.log(res1);
            console.log(res2);
          }
          console.log(this.pageNum, this.pageNum1);
          if (this.pageNum <= this.pageNum1) {
            const res1 = await searchLearning1(this.keyword, this.pageNum);
            console.log(res1);
            if (this.pageNum === 1) {
              this.learninglist = res1.detail;
            } else {
              this.learninglist = [...this.learninglist, ...res1.detail];
            }
          } else if (
            this.totalNum >= this.pageNum &&
            this.pageNum > this.pageNum1
          ) {
            const res2 = await searchLearning2(
              this.keyword,
              this.pageNum - this.pageNum1
            );
            console.log(res2);
            if (this.pageNum - this.pageNum1 === this.pageNum) {
              this.learninglist = res2.detail;
            } else {
              this.learninglist = [...this.learninglist, ...res2.detail];
            }
          }

          if (this.pageNum <= this.pageNum1) {
            const res1 = await searchLearning1(this.keyword, this.pageNum);
            if (res1.detail.length < 10 && this.pageNum == 1) {
              const res2 = await searchLearning2(this.keyword, this.pageNum);
              this.learninglist = [...this.learninglist, ...res2.detail];
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
        const wrapper = document.querySelector(".learningwrapper");
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
  watch: {
    input() {
      if (this.searchTarget === "learningList") {
        this.learninglist = [];
        this.pageNum = 1;
        this.pageNum = 1;
        this.initState = true;
        this.getData();
      }
    },
  },
  watch: {
    searchTarget() {
      if (this.searchTarget === "learrningList") {
        this.keyword = this.input;
        this.learninglist = [];
        this.pageNum = 1;
        this.pageNum = 1;
        this.initState = true;
        this.getData();
        this.$emit("clearSearch");
      }
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

<style>
.learningList {
  padding: 8.6rem 0 4.6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.learningwrapper {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>