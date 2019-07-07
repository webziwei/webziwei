<template>
  <div class="big_box">
    <div class="good_title">
      <div class="title">
        <span>配送信息</span>
      </div>
      <div class="info">
        <div>
          <span>由蜂鸟快送提供配送，约39分钟送达，距离1.8km</span>
        </div>
        <div>配送费￥0</div>
      </div>
    </div>
    <div class="good_title">
      <div class="title">
        <span>商家服务</span>
      </div>
      <div class="info">
        <div>
          <van-tag plain>赔</van-tag>
          <span>商家原因导致订单取消，赔付代金券</span>
        </div>
      </div>
    </div>
    <div class="good_title">
      <div class="title">
        <span>商家实景</span>
      </div>
      <div class="info">
        <div>
          <img src="../assets/goodsinfo/3.webp" alt>
          <img src="../assets/goodsinfo/4.webp" alt>
        </div>
      </div>
    </div>
    <div class="good_title">
      <div class="title">
        <span>商家信息</span>
      </div>
      <div class="info">
        <div> 
          <ul class="mui-table-view">
            <li class="mui-table-view-cell"><span style="font-weight:700; color:#666;">品类</span>  <span style="float:right">粤菜, 其他快餐</span></li>
            <li class="mui-table-view-cell"><span style="font-weight:700; color:#666;">品类</span>  <span style="float:right">粤菜, 其他快餐</span></li>
            <li class="mui-table-view-cell"><span style="font-weight:700; color:#666;">品类</span>  <span style="float:right">粤菜, 其他快餐</span></li>
            <li class="mui-table-view-cell"><span style="font-weight:700; color:#666;">品类</span>  <span style="float:right">粤菜, 其他快餐</span></li>
            <li class="mui-table-view-cell"><span style="font-weight:700; color:#666;">品类</span>  <span style="float:right">粤菜, 其他快餐</span></li>
            <li class="mui-table-view-cell"><span style="font-weight:700; color:#666;">品类</span>  <span style="float:right">粤菜, 其他快餐</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.big_box {
  background-color: #f5f5f5;
  height:100%;
  overflow-y: auto;

  .good_title {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    .title {
      margin-bottom: 10px;
      span {
        font-size: 16px;
        font-weight: 700;
      }
    }
    .info {
      font-size: 12px;
      color: #999;

      img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>
