<template>
  <div>
    <div class="bigbox">
      <div class="top">
        <routerLink to="../home" class="back">
          <span class="mui-icon mui-icon-back"></span>
        </routerLink>
        <div class="right">
          <span class="mui-icon mui-icon-search"></span>
          <input type="text" placeholder="搜索饿了么商家、商品名称">
        </div>
        <div class="left">
          <!-- <button>搜索</button> -->
          <router-link to="/search/shop" tag="button" class="btn">搜索</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    add() {}
  }
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.bigbox{
  min-height: 1000px;
  background-color: #fff;
}
  .top {
    width: 100%;
    display: flex;
    background-color: #fff;
    .back {
      //   float: left;
      flex: 1;
      padding: 5px 0;
    }
    .right {
      //   float: left;
      position: relative;
      flex: 7;
      padding: 5px 0;
      box-sizing: border-box;
      height: 30px;
      span {
        position: absolute;
        top: 10px;
        left: 2px;
        font-size: 14px;
        color: #ccc;
      }
      input {
        height: 20px;
        font-size: 12px;
        padding-left: 20px;
        color: #ccc;
        background-color: #f8f8f8;
        border: none;
      }
    }
    .left {
      flex: 1px;
      padding: 7px 0;
      height: 30px;
      box-sizing: border-box;
      button {
        width: 100%;
        height: 20px;
        border: none;
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }

</style>
