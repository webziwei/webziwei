<template>
  <div class="goodsinfo_box">
    <!-- 顶部商家信息 -->
    <div class="top_img">
      <router-link to="/home" class="mui-icon mui-icon-back"></router-link>
      <!-- <a href="/home" class="mui-icon mui-icon-back"></a> -->
      <!-- 店铺背景图 -->
      <div class="img_top">
        <img src="../assets/goodsinfo/1.webp" alt />
      </div>
      <div class="goods_title">
        <!-- 商家主图图片 -->
        <img :src=shop1.shopImg alt />
        <h4>{{shop1.shopName}}</h4>
        <div class="pingjia">
          <span>评价{{shop1.startVaule}}分</span>
          <span>月售{{shop1.year}}单</span>
          <span>商家配送48分钟</span>
        </div>
        <div class="card">
          <span style="font-weight:700;">￥4</span>
          <span>无门槛</span>
          <span>领取</span>
        </div>
        <div class="new" @click="showcard=true">
          <van-tag type="success">首单</van-tag>
          <span style="color:#333;margin-right:10px;">新用户下单立减17元(不与其他活动同享)</span>
          <span style="color:#999;font-size:8px;">
            一个优惠
            <i>▼</i>
          </span>
        </div>
        <div class="bottom_text">
          <span>公告：欢迎光临，用餐高峰期请提前下单，谢谢。</span>
        </div>
      </div>
    </div>
    <div class="bottom_over">
      <!-- 切换栏 -->
      <div class="tab-my">
        <div class="tab-1" @click="active='tab-container1'">
          <!-- active 设置 tab组件切换对应的id值 -->
          <div>点餐</div>
          <span style="display:block"></span>
        </div>
        <div class="tab-1" @click="active='tab-container2'">
          <div>评价</div>
          <span></span>
        </div>
        <div class="tab-1" @click="active='tab-container3'">
          <div>商家</div>
          <span></span>
        </div>
      </div>
      <!--商品 内容栏 -->
      <mt-tab-container v-model="active">
        <!-- :swipeable="true" 配置参数设置滑动切换 内容栏 -->
        <mt-tab-container-item id="tab-container1">
          <goodscontent></goodscontent>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <pingjia></pingjia>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <shangjia></shangjia>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 底部购物车栏 -->
    <div class="car_bottom">
      <div class="car_left" @click="$store.state.showcar=true">
        <div class="car_big">
          <div class="car_img">
            <img :src="$store.state.carurl" alt />
          </div>
          <div class="tops_num" style="display:none;">0</div>
        </div>
        <div class="goods_plice">
          <div class="monney">未选购商品</div>
          <div class="peisongf">
            另需配送费
            <span>4</span>&nbsp;元
          </div>
        </div>
      </div>
      <div class="submit_r">
        <router-link :to="$store.state.sublink">
          <!-- <a :href="$store.state.sublink"> 不能用a标签页面会刷新导致vuex里面数据进行重置-->
          <span>20元起送</span>
          <!-- </a> -->
        </router-link>
      </div>
    </div>
    <!-- 遮罩层 优惠信息-->
    <van-popup class="show_card" v-model="showcard" position="bottom" :overlay="false">
      <h1>优惠活动</h1>
      <h2>1</h2>
      <h3>2</h3>
      <div class="close" @click="showcard=false">
        <div>×</div>
      </div>
    </van-popup>
  </div>
</template>
<style lang="scss">
html,
body {
  height: 100%;
  overflow-y: auto;
}

// 遮罩层样式
.van-popup {
  width: 100%;
  height: 100%;
  background-color: transparent;
  img {
    width: 100%;
  }
  .close {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    line-height: 30px;
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    color: #fff;
    font-weight: 300;
    div {
      transform: translateY(2px);
    }
  }
}

.show_card {
  z-index: 10005 !important;
  text-align: center;
  padding-top: 40px;
  color: #fff;
  background-color: #ccc;
}

// 底部购物车
.car_bottom {
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 10000;
  bottom: 0;
  left: 0;
  background-color: #505052;
  .car_big {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #444444;
    border: 1px solid transparent;
    position: absolute;
    left: 10px;
    top: -10px;
    .tops_num {
      position: absolute;
      width: 15px;
      height: 15px;
      text-align: center;
      line-height: 15px;
      background-color: #ff6815;
      border-radius: 50%;
      color: #fff;
      top: 0;
      right: 5px;
      font-size: 12px;
    }
    .car_img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #363636;
      text-align: center;
      // line-height: 30px;
      // margin: 10px auto;
      position: absolute;
      top: 4px;
      left: 4px;

      img {
        width: 20px;
        height: 20px;
        // vertical-align: middle;
        position: absolute;
        top: 10px;
        left: 10px;
      }
    }
  }
  .goods_plice {
    position: absolute;
    width: 90px;
    height: 30px;
    top: 10px;
    left: 80px;
    font-size: 12px;
    color: #999;
    .monney {
    }
    .peisongf {
    }
  }
  .submit_r {
    // background-color: #38CA73;
    background-color: #535356;
    text-align: center;
    height: 60px;
    width: 80px;
    position: absolute;
    right: 0;
    top: 0;
    line-height: 60px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      span {
        color: #fff;
        font-weight: 700;
        font-size: 12px;
      }
    }
  }
}
// 外层盒子
// *[data-v-7ba5bd90] {
//   height: 100%;
//   overflow-y: auto;
// }
.goodsinfo_box {
  height: 100%;
  overflow-y: auto;
}
// 顶部商家信息
.top_img {
  width: 100%;
  // height: 50%;
  // overflow-y: auto;
  background-color: #fff;
  position: relative;
  a {
    position: absolute;
    top: 5px;
    left: 10px;
  }
  .img_top {
    width: 100%;
    height: 100px;
    overflow: hidden;
    img {
      width: 100%;
      // height: 70px;
    }
  }
  .goods_title {
    position: relative;
    padding-top: 15px;
    text-align: center;
    img {
      width: 60px;
      height: 60px;
      position: absolute;
      left: 50%;
      margin-left: -30px;
      top: -45px;
    }
    div.pingjia {
      span {
        font-size: 10px;
        color: #333;
        margin-right: 10px;
      }
    }
    .card {
      width: 120px;
      height: 20px;
      font-size: 10px;
      line-height: 20px;
      text-align: center;
      margin: 0 auto;
      display: flex;
      background-color: #ffe578;
      position: relative;
      color: #594519;
      span {
        flex: 1;
      }
      ::before,
      ::after {
        display: block;
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        right: 34px;
      }
      ::before {
        top: -4px;
      }
      ::after {
        bottom: -4px;
      }
    }
    .new {
      font-size: 10px;
      padding-top: 5px;
      .van-tag {
        font-size: 8px;
        margin-right: 5px;
        background-color: #70bc46 !important;
      }
      i {
        font-size: 6px;
      }
    }
    .bottom_text {
      font-size: 10px;
      color: #999;
      // text-align: left;
    }
  }
}

// 菜品展示栏
.bottom_over {
  height: 100%;
  overflow-y: auto;
  background-color: #fff;
}
.boxinfo {
  height: 100%;
  overflow-y: auto;
}
//切换栏样式
.tab-my {
  display: flex;
  border-bottom: 1px solid #eee;
}
.tab-1 {
  flex: 1;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #666;
  position: relative;

  span {
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: skyblue;
    bottom: 0;
    left: 50%;
    margin-left: -15px;
    display: none;
  }
}
</style>
<script>
//引入jq
import $ from "jquery";
import goodscontent from "../components/goodscontent";
import pingjia from "../components/pingjia";
import shangjia from "../components/shangjia";

export default {
  data() {
    return {
      showdetail: false,//详情页
      showcard: false,//优惠券页
      active: "tab-container1",//tab栏切换标识
      shop1:{},
    };
  },
  methods: {
    mytab() {
      $(".tab-1").click(function() {
        $(".tab-1")
          .find("span")
          .css({
            display: "none"
          });
        $(this)
          .find("span")
          .css({
            display: "block"
          });
      });
    }
  },
  components: {
    //局部组件
    pingjia,
    shangjia,
    goodscontent
  },
  created() {
    this.$store.state.shopAll.filter(item => {//过滤选择对应数据
      if (item.gid.includes(this.$route.query.num)) {
        this.shop1=item;//将对应数据赋值到组件数组以供渲染
      }
    });
  },
  mounted() {
    this.mytab();
  }
};
</script>

