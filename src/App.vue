<template>
  <div class="app-container">
    <div class="all_box">
      <!-- <mt-header fixed title="么了饿"></mt-header> -->
  
        <!-- <router-view name="search"></router-view> -->
        <!-- 内容区域 -->

        <!-- <transition mode="out-in"> -->
          <router-view></router-view>

        <!-- </transition> -->
        <!-- 内容区域end -->


    
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  created() {
    localStorage.login=false;
    
  },
  mounted() {
    
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
body{
  background-color: #fff;
}
.iconfont {
  font-size: 20px !important;
  color: inherit;
  font-weight: 700;
}
.app-container {
  width: 100%;
  // padding-top: 40px;
  padding-bottom: 50px;
  // overflow: hidden;
  height:100%;
  .all_box{
    height:100%;
    width:100%;
  }
}

</style>
<script>
export default {
  methods:{
  
  }
}

</script>
