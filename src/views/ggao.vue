<template>
  <div class="aaa">
    <div class="text">饿了么</div>
    <div class="text_num">{{num}}</div>
  </div>
</template>
<style lang="scss">
.aaa {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  background-color: #0588FF;
  line-height: 100%;
  text-align: center;
  color:#fff;
  font-weight: 700;
  .text {
    width: 120px;
    height: 50px;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -60px;
    margin-top: -25px;
    line-height: 50px;
  }
  .text_num {
    width: 100px;
    height: 50px;
    font-size: 20px;
    position: absolute;
    top: 60%;
    left: 50%;
    color:red;
    text-align: center;
    line-height: 50px;
    margin-left: -50px;
    margin-top: -25px;
  }
}
</style>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      num: 3,
      timer: null
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.num--;
      if (this.num <= 0) {
   
        clearInterval(this.timer);
        this.$router.push("/home")
    
        
      }
    }, 1000);
  },
  beforeDestroy() {//销毁数据与方法
        clearInterval(this.timer);    
  },
};
</script>