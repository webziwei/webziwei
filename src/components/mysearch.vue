<template>
  <div>
      <div class="top_search">
          <div class="search">
              <span class="mui-icon mui-icon-search"></span> 搜索么了饿商家、商品名称
          </div>
      </div>
  </div>
</template>
<script>
// import mui from "../../public/dist/js/mui.js";

export default {
  data() {
    return {};
  },
  mounted() {
    // mui.init();
    // mui('.mui-input-row input').input();
  }
};
</script>
<style lang="scss" scoped>
.top_search{

    width:100%;
    background-color: #26A2FF;
    height:50px;
    padding:10px;
    .search{
        text-align: center;
        width:100%;
        background-color: #fff;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color:#ccc;
        border-radius: 5px;
        span{
            font-size: 14px;
        }
    }
}
</style>
