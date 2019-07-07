<template>
         <div class="mint-tabbar is-fixed">
        <routerLink to="/home" class="mint-tab-item" id="首页">
          <div class="mint-tab-item-icon">
            <!-- <span class="iconfont icon-shouye"></span> -->
            <img src="./assets/icon1.1.svg" alt>
          </div>
          <div class="mint-tab-item-label">首页</div>
        </routerLink>
        <routerLink to="/category" class="mint-tab-item" id="分类">
          <div class="mint-tab-item-icon">
            <img src="./assets/icon2.1.svg" alt>
          </div>
          <div class="mint-tab-item-label">发现</div>
        </routerLink>
        <routerLink to="/goods" class="mint-tab-item" id="购物车">
          <div class="mint-tab-item-icon">
            <img src="./assets/icon3.1.svg" alt>
          </div>
          <div class="mint-tab-item-label">订单</div>
        </routerLink>
        <routerLink to="/my" class="mint-tab-item" id="我的">
          <div class="mint-tab-item-icon">
            <span class="iconfont icon-wodejuhuasuan"></span>
          </div>
          <div class="mint-tab-item-label">我的</div>
        </routerLink>
      </div>
</template>