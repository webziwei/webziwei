<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            :class={animated:flag,zoomIn:flag,slower:flag} v-show=flag 
            
            src="../assets/yindao/5.jpg"
            alt
          >
        </div>
        <div class="swiper-slide">
          <img
            :class={animated:flag,zoomIn:flag,slower:flag} v-show=flag
            
            src="../assets/yindao/4.jpg"
            alt
          >
        </div>
        <div class="swiper-slide">
          <img
            :class={animated:flag,zoomIn:flag,slower:flag} v-show=flag
            
            src="../assets/yindao/6.jpg"
            alt
          >
        </div>
        <div class="swiper-slide">
          <img
            :class={animated:flag,zoomIn:flag,slower:flag} v-show=flag
            
            src="../assets/yindao/7.jpg"
            alt
          >
          <router-link to="/home" tag="button" :class={animated:flag,zoomIn:flag,slower:flag,btn:true} v-show=flag>立即体验</router-link>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import $ from "jquery";
var num = 3;
var el = "#3";
export default {
  data() {
    return {
      flag: true
    };
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      mousewheel: true,
      keyboard: {
        enabled: true
      },
      // loop: true,
      on: {
        slideChangeTransitionStart:()=> {//滑动开始触发
         this.flag=false;
         console.log("aaa")
        },
        slideChangeTransitionEnd:()=> {//滑动结束触发
          // alert(this.activeIndex); //切换结束时，告诉我现在是第几个slide
           this.flag=true;
         console.log("aaa")

        }
      }
    });
  },
  created() {
    //设置首次加载进入引导页 以后再次进入跳转到广告页
    if (localStorage.One) {
      //设置跳转
      this.$router.push("/ggao");
    } else {//设置缓存做判断
      localStorage.One = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.btn {
  position: absolute;
  bottom: 50px;
  left: 50%;
  margin-left: -80px;
  width: 160px;
  height: 40px;
  background-color: #43a0e5;
  color: #fff;
  border-radius: 10px;
}
.swiper-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background-color: #0086ff;

  img {
    width: 100%;
    height: 100%;
  }
  h3 {
    color: #666;
  }
}
</style>
