<template>
  <div class="boxbig">
     <mt-header>
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <van-tabs v-model="active" background="#00A8FF"  color="#fff" swipeable>
      <van-tab title="全部"><shop></shop></van-tab>
      <van-tab title="面食粥点"><shop></shop></van-tab>
      <van-tab title="简餐便当"><shop></shop></van-tab>
      <van-tab title="汉堡披萨"><shop></shop></van-tab>
      <van-tab title="香锅冒菜"><shop></shop></van-tab>
      <van-tab title="炸串"><shop></shop></van-tab>
      <van-tab title="地方菜系"><shop></shop></van-tab>
    </van-tabs>
    
  </div>
</template>
<style lang="scss">
.boxbig{
  padding-top:30px;
}
.mint-header{
  position: fixed;
  width:100%;
  height:30px;
  top:0;
  left: 0;
  z-index: 10000;
  background-color: #00A8FF;
}

.van-ellipsis{
    color:#fff;
}
</style>

<script>
import shop from "./shop";

export default {
  data() {
    return {
        active:0
    };
  },
  components: {
    shop
  }
};
</script>
