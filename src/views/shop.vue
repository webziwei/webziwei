<template>
  <div>
    <div class="mui-content nav">
      <!-- mui栅格设置tab按钮 -->
      <div class="mui-row">
        <div class="mui-col-xs-3" @click="active='tab-container1'">
          <!-- active 设置 tab组件切换对应的id值 -->
          <div>综合排序</div>
        </div>
        <div class="mui-col-xs-3" @click="active='tab-container2'">
          <div>距离最近</div>
        </div>
        <div class="mui-col-xs-3" @click="active='tab-container3'">
          <div>品质联盟</div>
        </div>
        <div class="mui-col-xs-3">
          <div>筛选</div>
        </div>
      </div>
    </div>

    <mt-tab-container v-model="active">
      <!-- :swipeable="true" 配置参数设置滑动切换 -->
      <mt-tab-container-item id="tab-container1">
        <ul
          class="mui-table-view"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
        >
          <li
            class="mui-table-view-cell mui-media"
            v-for="(item,i) in $store.state.shopAll"
            :key="i"
          >
            <router-link :to="link+item.gid">
              <!-- <a href="/goodsinfo?num=123"> 不能用a标签页面会刷新导致vuex里面数据进行重置-->
              <img class="mui-media-object mui-pull-left" :src="item.shopImg" />
              <div class="mui-media-body">
                <span style="font-weight:700;font-size:12px;font-family:'SimSun';">{{item.shopName}}</span>
                <p class="mui-ellipsis">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                  />
                  <span style="font-size:10px;">{{item.startVaule}} 月售{{item.year}}单</span>
                </p>
                <p class="mui-ellipsis">
                  <span style="font-size:10px;">15元起送 | 免配送</span>
                </p>
              </div>
              <!-- </a> -->
            </router-link>
          </li>
        </ul>
        <p v-show="loading" class="addd">
          <mt-spinner type="triple-bounce" color="skyblue"></mt-spinner>
          <!-- 加载中... -->
        </p>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media" v-for="(item,i) in goods2" :key="i">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-left" :src="item.url" />
              <div class="mui-media-body">
                <span style="font-weight:700;font-size:12px;font-family:'SimSun';">{{item.title}}</span>
                <p class="mui-ellipsis">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                  />
                  <span style="font-size:10px;">4.7 月售好多单</span>
                </p>
                <p class="mui-ellipsis">
                  <span style="font-size:10px;">15元起送 | 免配送</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <ul
          class="mui-table-view"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
        >
          <li
            class="mui-table-view-cell mui-media"
            v-for="(item,i) in $store.state.shopAll"
            :key="i"
          >
            <router-link :to="link+item.gid">
              <!-- <a href="/goodsinfo?num=123"> 不能用a标签页面会刷新导致vuex里面数据进行重置-->
              <img class="mui-media-object mui-pull-left" :src="item.shopImg" />
              <div class="mui-media-body">
                <span style="font-weight:700;font-size:12px;font-family:'SimSun';">{{item.shopName}}</span>
                <p class="mui-ellipsis">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                  />
                  <span style="font-size:10px;">{{item.startVaule}} 月售{{item.year}}单</span>
                </p>
                <p class="mui-ellipsis">
                  <span style="font-size:10px;">15元起送 | 免配送</span>
                </p>
              </div>
              <!-- </a> -->
            </router-link>
          </li>
        </ul>
        <p v-show="loading" class="addd">
          <mt-spinner type="triple-bounce" color="skyblue"></mt-spinner>
          <!-- 加载中... -->
        </p>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<style lang="scss" scoped>
//scoped加优先级
.nav {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: #666;
}
//设置mui轮播图样式
.mint-swipe {
  height: 150px;
  text-align: center;
  // line-height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
  img.banner {
    height: 60px;
  }
}
//设置分页器样式
.mui-content {
  background-color: #fff;
  text-align: center;
  a {
    margin: 0;
    padding: 0;
    img {
      width: 45px;
      height: 45px;
    }
    p {
      margin: 0;
      font-size: 12px;
    }
  }
}

.addd {
  //tab栏商家
  padding: 10px;
  text-align: center;
}
</style>
<script>
export default {
  name: "home",
  data: function() {
    return {
      loading: false,
      link: "/goodsinfo?num=",
      active: "tab-container1", //设置tab切换初始化id
      goods2: [
        {
          goodsid: "g4",
          title: "加州汉堡",
          url: "../assets/26.webp"
        },
        {
          goodsid: "g5",
          title: "叫了只炸鸡",
          url: "../assets/27.webp"
        },
        {
          goodsid: "g7",
          title: "寿司先生",
          url: "../assets/28.webp"
        },
        {
          goodsid: "g8",
          title: "东北掌门烧烤",
          url: "../assets/30.webp"
        }
      ]
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        // let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 5; i++) {
          this.$store.state.shopAll.push({
            gid: "g21",
            shopImg: "../assets/22.webp", //商店招牌图
            bannerurl: "string", //商店背景图
            shopName: "华莱美免配送店", //商店名称
            Discount: Array, //优惠信息
            startVaule: "4.7", //星级
            year: "220", //月售数量
            goodslist: [
              //商品信息
              {
                name: "牛肉拉面",
                year: "58",
                price: "13",
                oldprice: "23",
                imgurl: "../assets/goodsinfo/5.webp",
                num: 0,
                flag: false,
                id: 0
              },
              {
                name: "牛肉拉面",
                year: "58",
                price: "13",
                oldprice: "23",
                imgurl: "../assets/goodsinfo/5.webp",
                num: 0,
                flag: false,
                id: 0
              },
              {
                name: "牛肉拉面",
                year: "58",
                price: "13",
                oldprice: "23",
                imgurl: "../assets/goodsinfo/5.webp",
                num: 0,
                flag: false,
                id: 0
              },
              {
                name: "牛肉拉面",
                year: "58",
                price: "13",
                oldprice: "23",
                imgurl: "../assets/goodsinfo/5.webp",
                num: 0,
                flag: false,
                id: 0
              }
            ]
          });

        }
        this.loading = false;
      }, 3500);
    }
  },
  created() {
  },
  mounted() {}
};
</script>
