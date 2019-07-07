<template>
  <!-- <div class="mint-tabbar is-fixed">
    <routerLink to="/home" class="mint-tab-item" id="首页">
  <div class="mint-tab-item-icon">-->
  <!-- <span class="iconfont icon-shouye"></span> -->
  <!-- <img src="../assets/icon1.1.svg" alt>
      </div>
      <div class="mint-tab-item-label">首页</div>
    </routerLink>
    <routerLink to="/category" class="mint-tab-item" id="分类">
      <div class="mint-tab-item-icon">
        <img src="../assets/icon2.1.svg" alt>
      </div>
      <div class="mint-tab-item-label">发现</div>
    </routerLink>
    <routerLink to="/goods" class="mint-tab-item" id="购物车">
      <div class="mint-tab-item-icon">
        <img src="../assets/icon3.1.svg" alt>
      </div>
      <div class="mint-tab-item-label">订单</div>
    </routerLink>
    <routerLink to="/my" class="mint-tab-item" id="我的">
      <div class="mint-tab-item-icon">
        <span class="iconfont icon-wodejuhuasuan"></span>
      </div>
      <div class="mint-tab-item-label">我的</div>
    </routerLink>
  </div>-->

  <div>
    <van-tabbar route>
      <van-tabbar-item replace to="/home">
        <img src="../assets/icon1.1.svg" alt>
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/category">
        <img src="../assets/icon2.1.svg" alt>发现
      </van-tabbar-item>
      <van-tabbar-item replace to="/goods">
        <img src="../assets/icon3.1.svg" alt>订单
      </van-tabbar-item>
      <van-tabbar-item replace to="/my">
        <div class="icon">
          <svg viewBox="0 0 22 22" id="h5-component-profileRegular" width="100%" height="100%">
            <path
              fill="#009BFF"
              fill-rule="nonzero"
              d="M10.955 12H7.75a5.25 5.25 0 0 0-5.25 5.25v2.25h17v-2.25a5.244 5.244 0 0 0-2.626-4.548.75.75 0 0 1 .75-1.3l.183.11A6.745 6.745 0 0 1 21 17.25v3a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-3a6.75 6.75 0 0 1 6.436-6.743A4.984 4.984 0 0 1 6 7V6a5 5 0 0 1 10 0v1a5 5 0 0 1-5.045 5zM11 10.5A3.5 3.5 0 0 0 14.5 7V6a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 0 0 3.5 3.5z"
            ></path>
          </svg>
        </div>我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style lang="scss">
.van-tabbar--fixed{
  z-index: 1000 !important;
}
img {
  margin-bottom: 2px;
}
.icon{
  width:24px;
  height:24px;
  margin-bottom: 2px;

}
</style>
<script>
export default {
  data() {
    return {
      active: 0,
      icon: {}
    };
  }
};
</script>
