<template>
  <div class="order_box">
    <div class="show_box" v-if="flag">
      <img src="../assets/goodsinfo/order.gif" alt />
      <div>当前暂无订单</div>
    </div>
    <div class="small_box" v-for="(item,i) in $store.state.order" :key="i">
      <div class="img_l">
        <img :src="item.shopImg" alt />
      </div>
      <div class="text_r">
        <router-link :to="link+item.gid" class="t1">
          {{item.shopName}}... >
          <span style="float:right; ">订单已送达</span>
        </router-link>
        <van-steps :active="4" active-icon="success" active-color="#38f">
          <van-step>买家下单</van-step>
          <van-step>商家接单</van-step>
          <van-step>骑手派送</van-step>
          <van-step>交易完成</van-step>
        </van-steps>
        <div class="t2">{{item.time | dateFormat}}</div>
        <div class="t3">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-collapse order">
              <a class="mui-navigate-right" href="#">您购买的菜品</a>
              <div class="mui-collapse-content">
                <p v-for="(el,a) in item.shop1" :key="a">
                  {{el.name}} 
                  <!-- <span
                    style="color:rgb(235, 98, 98);text-align: right;"
                  >￥{{el.price*el.num}}</span> -->
                </p>
              </div>
            </li>
            <span style="float:right;transform: translateY(2px);">￥ {{item.price+4}}</span>
          </ul>
          <router-link :to="link+item.gid" class="t4">再来一单</router-link>
        </div>
      </div>
    </div>
    <!-- 底部栏 -->
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from "../components/bottom";

export default {
  data() {
    return {
      flag: true,
      link: "/goodsinfo?num=",
      imageURL: "../assets/goodsinfo/5.webp",
  
    };
  },
  created() {
    
    // console.log(this.$store.state.order)
    if (this.$store.state.order.length == 0) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  },
  mounted() {
  },
  components: {
    bottom
  }
};
</script>
<style lang="scss" scoped>
.show_box {
  width: 100%;
  text-align: center;
  position: fixed;
  font-size: 20px;
  color: #666;
  font-weight: bold;
  background: linear-gradient(to bottom, skyblue, #fff);
  top: 0;
  bottom: 0;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -60px;
    margin-top: -260px;
    width: 120px;
    height: 120px;
    transform: translateY(100px);
  }
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -60px;
    margin-top: -10px;
  }
}
.order_box {
  width: 100%;
  min-height: 100%;
  background: linear-gradient(to bottom, skyblue, #fff);
}
.order {
  padding: 5px 8px;
}
.small_box {
  display: flex;
  font-size: 12px;
  color: #999;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  .img_l {
    flex: 1;
    padding-left: 10px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .text_r {
    padding: 10px;
    flex: 8;
    .t4 {
      float: right;
      font-size: 10px;
      text-align: center;
      width: 60px;
      height: 20px;
      padding: 4px;
      transform: translateY(2px);
      border: 1px solid skyblue;
      background-color: #fff;
      border-radius: 5px;
    }
    .t2 {
      text-align: right;
      border-bottom: 1px solid #ddd;
    }
    .t1 {
      span {
        color: rgb(235, 98, 98);
      }
    }
  }
}
.van-image__img {
  width: 30px !important;
  height: 30px !important;
}
.swiper-container {
  width: 100%;
  height: 80px;
  img {
    width: 100%;
  }
}
.swiper-container-horizontal > .swiper-scrollbar {
  width: 20px;
  left: 50%;
  height: 2px;
  margin-left: -10px;
}
</style>
