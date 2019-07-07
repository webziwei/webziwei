<template>
  <div class="bgc">
    <bottom></bottom>
    <div class="top_link">
      <div class="link_left">
        <div class="top_text">
          <div class="t1">金币商城</div>
          <div class="t2">0元好物在这里</div>
        </div>
        <div class="img">
          <img src="../assets/37.webp" alt>
        </div>
      </div>
      <div class="link_right">
        <div class="up">
          <div class="top_text">
            <div class="t1">推荐有奖</div>
            <div class="t2">20金币拿不停</div>
          </div>
          <div class="img">
            <img src="../assets/38.webp" alt>
          </div>
        </div>
        <div class="down">
          <div class="top_text">
            <div class="t1">周边优惠</div>
            <div class="t2">领取周边好物</div>
          </div>
          <div class="img">
            <img src="../assets/39.webp" alt>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="middle">
        <div class="icon">
          <svg viewBox="0 0 34 33" id="nice" width="100%" height="100%">
            <g fill="#F12C2C" fill-rule="evenodd">
              <path
                d="M19.1 10s.404-1.959.685-3.294l.068-.323a472.237 472.237 0 0 1 .83-3.832l.077-.352C21.016 1.036 20.194 0 19.01 0H14.49c-.625 0-1.284.377-1.606.915l-5.742 9.57L8 10H2.003A1.995 1.995 0 0 0 0 11.999V31C0 32.106.9 33 2.003 33h23c1.548 0 3.082-1.157 3.507-2.645l4.63-16.204C33.776 11.923 32.32 10 30 10H19.1zM18 12h12c.993 0 1.488.653 1.217 1.601l-4.63 16.205c-.18.629-.929 1.194-1.584 1.194h-23L2 11.999C2 11.996 8 12 8 12h.566l.291-.486 5.743-9.57c-.037.061-.028.056-.109.056h4.518c-.1 0-.22-.152-.202-.233l-.078.354a513.863 513.863 0 0 0-.832 3.848l-.069.325c-.284 1.349-.51 2.46-.657 3.255-.087.465-.146.818-.177 1.058a2.394 2.394 0 0 0-.026.41c.004.078.004.078.027.21.039.185.039.185.349.563.717.292.656.21.656.21z"
              ></path>
              <path d="M7 10h2v22H7z"></path>
            </g>
          </svg>
        </div>
        <div class="text">为你推荐</div>
      </div>
    </div>
    <div class="mui-content nav">
      <!-- mui栅格设置tab按钮 -->
      <div class="mui-row">
        <div class="mui-col-xs-6" v-for="(item,i) in goods1" :key="i">
          <div class="mui-card">
            <!--页眉，放置标题-->

            <!--内容区-->
            <div class="mui-card-content">
              <router-link to="/goodsinfo?num=g1">
                <img :src="item.url">
              </router-link>
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer jianjie">
              <h4>骨汤麻辣烫+配饮料</h4>
              <h5>月售332份　好评率100%</h5>
              <span><i>¥</i><span> 13.99</span> <i class="old"> ¥ 23.99</i></span>
           
              </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import bottom from "../components/bottom";

export default {
  data() {
    return {
      goods1: [
        {
          title: "麻辣烫套餐1",
          url: "../assets/31.webp"
        },
        {
          title: "麻辣烫套餐2",
          url: "../assets/32.webp"
        },
        {
          title: "麻辣烫套餐3",
          url: "../assets/33.webp"
        },
        {
          title: "麻辣烫套餐4",
          url: "../assets/34.webp"
        },
        {
          title: "麻辣烫套餐6",
          url: "../assets/35.webp"
        },
        {
          title: "麻辣烫套餐7",
          url: "../assets/36.webp"
        }
      ]
    };
  },
  mounted() {
    // 关于如何在vue-cli3.0中引入mui.js和相关扩展
    // http://ask.dcloud.net.cn/article/13509

  },
  components: {
    bottom
  }
};
</script>

<style lang="scss" scoped>
.bgc {
  background-color: #f5f5f5;
}
.mui-card-header, .mui-card-footer{
  display:inline-block;
  padding: 0;
  padding-left: 10px;
}
.jianjie{
  h4{
    font-size: 14px;
    color:#000;
  }
  h5{
    font-size: 10px;
  }
  span{
    color:#FF690F;
    font-size: 14px;
    i{
      font-size: 10px;
    }
    .old{
      color:#999;
    font-size: 10px;
    text-decoration: line-through;
  }
  }
  
}
.mui-card-content {
  img {
    width: 100%;
  }
}
.top_link {
  width: 100%;
  background-color: #fff;
  display: flex;
  height: 140px;
  margin-bottom: 10px;
  .link_left {
    padding: 10px;
    flex: 1;
    border-right: 1px solid #ddd;
    height: 100%;
    .top_text {
      .t1 {
        color: #ffb13b;
        font-weight: bold;
      }
      .t2 {
        font-size: 12px;
        color: #999;
      }
    }
    .img {
      text-align: right;
      img {
        width: 70px;
      }
    }
  }
  .link_right {
    flex: 1;
    width: 100%;
    .up {
      height: 50%;
      padding:15px;
      border-bottom:1px solid #ddd;
      .top_text {
        float: left;
        margin-right: 5px;
        .t1 {
          color: skyblue;
        }
        .t2 {
          font-size: 12px;
          color: #999;
        }
       
      }
       .img {
          // text-align: right;
          float: left;
          img {
            width: 40px;
          }
        }
    }
    .down {
      height: 50%;
      padding:15px;
      .top_text {
        float: left;
        margin-right: 5px;
        .t1 {
          color: darkred;
        }
        .t2 {
          font-size: 12px;
          color: #999;
        }
        
      }
      .img {
          // text-align: right;
          float: left;
          img {
            width: 40px;
          }
        }
    }
  }
}
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
    right: 100px;
  }
  .middle {
    // margin:0 auto;
    // width:120px;
    // position: absolute;
    height: 30px;
    // left:50%;
    // top:0;
    margin-left: 42%;
    .icon {
      width: 14px;
      height: 14px;
      float: left;
      margin-right: 5px;
    }
    .text {
      float: left;
    }
  }
}
.nav {
  background-color: #fff;
}
</style>
