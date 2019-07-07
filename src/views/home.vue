<template>
  <div ref="home">
    <bottom></bottom>

    <!-- 搜索框部分 -->
    <routerLink to="/search">
      <mysearch></mysearch>
    </routerLink>
    <!-- 头部轮播图部分 -->
    <mt-swipe :auto="4000">
      <!-- 遍历图片 -->
      <mt-swipe-item v-for="(item,i) in imglist" :key="i">
        <img :src="item" alt />
        <!-- 图片资源放入piblic文件夹内解决循环显示不出图片问题 -->
      </mt-swipe-item>
    </mt-swipe>
    <!-- 利用swiper组件+mui组件栅格完成tab切换 -->
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides 头部tab分类栏 -->
      <swiper-slide>
        <div class="mui-content">
          <div class="mui-row">
            <div class="mui-col-xs-3" v-for="(item,i) in iconList" :key="i">
              <!-- <li class="mui-table-view-cell"> -->
              <router-link to="/fenlei">
                <img :src="item.url" alt />
                <p>{{item.name}}</p>
              </router-link>
              <!-- <a href="">
              
              </a>-->
              <!-- </li> -->
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- 广告栏 -->
      <swiper-slide>
        <div class="mui-content">
          <div class="mui-row">
            <div class="mui-col-xs-3" v-for="(item,i) in iconList2" :key="i">
              <a>
                <img :src="item.url" alt />
                <p>{{item.name}}</p>
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls 样式添加配置-->
      <!-- <div class="swiper-pagination"  slot="pagination"></div>小圆点
      <div class="swiper-button-prev" slot="button-prev"></div>上一张按钮
      <div class="swiper-button-next" slot="button-next"></div> 下一张按钮-->
      <div class="swiper-scrollbar" slot="scrollbar"></div>
      <!-- 引入滚动条 -->
    </swiper>
    <!-- 轮播广告图部分 -->
    <swiper :options="swiperOption1" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,i) in banner" :key="i" class="lunbo">
        <img :src="item" alt />
      </swiper-slide>
      <div class="swiper-scrollbar add" slot="scrollbar"></div>
    </swiper>

    <div class="box">
      <span>推荐商家</span>
    </div>
    <!-- 商家 -->
    <shop></shop>
  </div>
</template>
<style lang="scss" scoped>
//scoped加优先级
.box {
  font-size: 12px;

  text-align: center;
  color: #666;
  line-height: 30px;
  height: 30px;
  position: relative;
  background-color: #fff;
  ::before {
    position: absolute;
    display: block;
    content: "";
    width: 15px;
    height: 2px;
    background-color: #666;
    top: 14px;
    left: 110px;
  }
  ::after {
    position: absolute;
    display: block;
    content: "";
    width: 15px;
    height: 2px;
    background-color: #666;
    top: 14px;
    right: 110px;
  }
}
.nav {
  font-size: 12px;
  color: #666;
}
//设置mui轮播图样式
.mint-swipe {
  height: 100px;
  text-align: center;
  // line-height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
  img.banner {
    height: 60px;
  }
}
//设置分页器样式
.mui-content {
  background-color: #fff;
  text-align: center;
  a {
    margin: 0;
    padding: 0;
    img {
      width: 45px;
      height: 45px;
    }
    p {
      margin: 0;
      font-size: 12px;
    }
  }
}
//设置轮播图样式图片大小
.swiper-container {
  width: 100%;
  // height: 80px;
  img {
    width: 100%;
  }
}
.swiper-container-horizontal > .swiper-scrollbar {
  //设置滚动条样式
  width: 20px;
  left: 50%;
  height: 2px;
  margin-left: -10px;
}
.swiper-container-horizontal > .swiper-scrollbar.add {
  bottom: 10px;
}
.swiper-slide.lunbo {
  height: 80px;
}

.addd {
  //tab栏商家
  padding: 10px;
  text-align: center;
}
</style>
<script>
import mysearch from "../components/mysearch";
import shop from "./shop";
import bottom from "../components/bottom";
import $ from "jquery";

export default {
  name: "home",
  data: function() {
    return {
      loading: false,
      oneflag: true,
      active: "tab-container1", //设置tab切换初始化id
      imglist: [
        "../assets/18.webp",
        "../assets/19.webp",
        "../assets/20.webp",
        "../assets/18.webp"
      ],
      iconList: [
        { url: "../assets/01.webp", name: "美食" },
        { url: "../assets/01.webp", name: "美食" },
        { url: "../assets/02.webp", name: "美食" },
        { url: "../assets/03.webp", name: "美食" },
        { url: "../assets/04.webp", name: "美食" },
        { url: "../assets/05.webp", name: "美食" },
        { url: "../assets/06.webp", name: "美食" },
        { url: "../assets/07.webp", name: "美食" }
      ],
      iconList2: [
        { url: "../assets/08.webp", name: "美食" },
        { url: "../assets/09.webp", name: "美食" },
        { url: "../assets/10.webp", name: "美食" },
        { url: "../assets/11.webp", name: "美食" },
        { url: "../assets/12.webp", name: "美食" },
        { url: "../assets/13.webp", name: "美食" },
        { url: "../assets/14.webp", name: "美食" },
        { url: "../assets/15.webp", name: "美食" }
      ],
      banner: ["../assets/18.webp", "../assets/19.webp", "../assets/20.webp"],
      swiperOption: {
        //轮播图配置tab栏部分
        // autoplay:true,//是否轮播
        // pagination: {
        //   el: '.swiper-pagination'
        // },
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true
        }
      },
      swiperOption1: {
        ////轮播图配置广告栏部分
        // pagination: {//是否开启小圆点
        //   el: '.swiper-pagination'
        // },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false, //如果设置为true，当切换到最后一个slide时停止自动切换。
          disableOnInteraction: false //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        }, //轮播设置
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true
        }
      }
      // swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  components: {
    //局部组件
    mysearch,
    shop,
    bottom
  },
  methods: {

    scr() {
      let ttop = 0; //top是关键字
      this.$refs.home.addEventListener("scroll", () => {
        this.oneflag = false;
        ttop = this.$refs.home.scrollTop;
        // console.log(this.$refs.home.scrollTop);

        if (ttop > 50) {
          $(".top_search").css({
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 1000
          });
        } else {
          $(".top_search").css({
            position: "static"
          });
        }
        if (ttop > 400) {
          $(".nav").css({
            position: "fixed",
            left: 0,
            top: "50px",
            zIndex: 1000
          });
        } else {
          $(".nav").css({
            position: "static"
          });
        }
      });
    },
    onescr() {
      let ttop = 0; //top是关键字
      let left = 0;
      window.addEventListener("scroll", () => {
        //onscroll 事件在元素滚动条在滚动时触发
        // console.log("test")
        // 获取页面被浏览器卷去的顶部大小
        ttop = document.body.scrollTop || document.documentElement.scrollTop; //兼容
        // console.log("页面顶部卷去高度：" + ttop);

        if (ttop > 50) {
          $(".top_search").css({
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 1000
          });
        } else {
          $(".top_search").css({
            position: "static"
          });
        }
        if (ttop > 400) {
          $(".nav").css({
            position: "fixed",
            left: 0,
            top: "50px",
            zIndex: 1000
          });
        } else {
          $(".nav").css({
            position: "static"
          });
        }
      });
    }
  },
  mounted() {
    if (this.oneflag) {
      this.onescr();
    }
    this.scr();
  },
  created() {
    localStorage.login=this.$store.state.loginflag;
    
  },
};
</script>
