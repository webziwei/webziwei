<template>
  <div class="box">
    <div v-if="!$store.state.loginflag" class="login">
      <login></login>
    </div>
    <ul class="mui-table-view" v-if="$store.state.loginflag">
      <routerLink to="/my" tag="li" class="mui-table-view-cell my_info">
        <a class="mui-navigate-right">
          <div class="my_img">
            <img src="../assets/1.jpg" alt />
          </div>
          <div class="text">
            <div class="t1">{{$store.state.luser.name}}</div>
          </div>
        </a>
      </routerLink>
      <li class="list monney">
        <div class="my_bottom">
          <div class="line">
            <div class="i1">
              <i>3</i>个
            </div>
            <div>红包</div>
          </div>
          <div>
            <div class="i2">
              <i>233</i>个
            </div>
            <div>金币</div>
          </div>
        </div>
      </li>
      <li class="mui-table-view-cell list address">
        <a class="mui-navigate-right">
          <div class="icon" style>
            <svg viewBox="0 0 16 16" id="address" width="100%" height="100%">
              <g fill="none" fill-rule="evenodd">
                <path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z" />
                <path
                  fill="#4AA5F0"
                  d="M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333M2.273 6.509a5.48 5.48 0 0 1-.051-.732 5.778 5.778 0 1 1 11.556 0 5.54 5.54 0 0 1-.085.948 5.704 5.704 0 0 1-.258.999 6.565 6.565 0 0 1-.081.22c-.016.039-.03.078-.047.116C11.932 11.45 8 13.778 8 13.778S3.734 11.273 2.535 7.64a5.756 5.756 0 0 1-.262-1.132zm8.584 6.701c2.516.124 5.143.43 5.143 1.068 0 .901-5.233 1.138-8 1.138-2.768 0-8-.237-8-1.138 0-.639 2.627-.944 5.143-1.068 1.22 1.044 2.3 1.61 2.404 1.663.14.07.296.108.453.108.156 0 .314-.038.454-.109.104-.052 1.184-.618 2.403-1.662z"
                />
              </g>
            </svg>
          </div>
          <router-link to="/address" class="my_text">我的地址</router-link>
          <!-- <div >我的地址</div> -->
        </a>
      </li>
      <li class="mui-table-view-cell list">
        <a class="mui-navigate-right">
          <div class="icon" style>
            <svg viewBox="0 0 16 16" id="point" width="100%" height="100%">
              <g fill="none" fill-rule="evenodd">
                <path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z" />
                <path
                  fill="#94D94A"
                  d="M2.257.5h11.486a1 1 0 0 1 .998.936l.757 11.728a2 2 0 0 1-1.996 2.129H2.498a2 2 0 0 1-1.996-2.129L1.26 1.436A1 1 0 0 1 2.257.5zm9.658 3.782C11.82 6.452 10.14 8.18 7.95 8.18c-2.202 0-3.925-1.747-4.003-3.933a.594.594 0 0 1 .36-1.075.596.596 0 1 1 .25 1.14c.109 1.82 1.548 3.26 3.393 3.26 1.853 0 3.263-1.455 3.357-3.287a.595.595 0 0 1 .3-1.113.595.595 0 1 1 .307 1.11z"
                />
              </g>
            </svg>
          </div>
          <div class="my_text">金币商城</div>
        </a>
      </li>
      <li class="mui-table-view-cell list">
        <a class="mui-navigate-right">
          <div class="icon" style>
            <svg viewBox="0 0 40 40" id="commend" width="100%" height="100%">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#FC7B53"
                  d="M21 12c-.167-.434-1-1-1-1-.275.437-.767.601-1 1v7H4v-6c0-.843.716-1.562 2-2h6c-1.49.06-2.84-.711-3-2 .06-1.814 1.949-4.528 5-4 2.552.733 4.541 2.943 6 5 1.6-2.094 3.778-4.58 7-5 2.23-.288 4.282 2.198 4 4-.208 1.276-1.582 2.06-3 2h6c1.173.437 1.89 1.156 2 2v6H21v-7zm-7-6c-1.123-.321-1.966.238-3 1 .097.68-.258 1.373 0 2 1.653 1.192 5.452 1.096 8 1-1.202-1.529-2.679-3.07-5-4zm16 3c.726-1.246-1.22-3.714-3-3-2.313 1.075-3.755 2.506-5 4 1.071 0 2.158.023 3 0 1.542-.075 3.965-.16 5-1zM19 36H8c-1.326-.255-2-.907-2-2V20h13v16zm13 0H21V20h13v14c-.47 1.53-1.124 1.745-2 2z"
                />
              </g>
            </svg>
          </div>
          <div class="my_text">分享拿20元现金</div>
        </a>
      </li>
      <li class="mui-table-view-cell list">
        <a class="mui-navigate-right">
          <div class="icon">
            <svg viewBox="0 0 54 54" id="service" width="100%" height="100%">
              <g fill="none" fill-rule="evenodd">
                <path stroke="#4DA6F0" stroke-width="3" d="M48 28c0 11.598-9.402 21-21 21" />
                <path
                  fill="#4DA6F0"
                  d="M43 40.012v-18h2a9 9 0 0 1 9 9 9 9 0 0 1-9 9h-2zM10 40.012H9a9 9 0 0 1-9-9 9 9 0 0 1 9-9h1v18zM27 46a3 3 0 1 0 0 6 3 3 0 1 0 0-6"
                />
                <path
                  fill="#4DA6F0"
                  d="M43 24h6c0-12.426-9.574-23-22-23S4 11.574 4 24h6c0-9.098 7.902-17 17-17 9.097 0 16 7.902 16 17z"
                />
              </g>
            </svg>
          </div>
          <div class="my_text">我的客服</div>
        </a>
      </li>
      <li class="mui-table-view-cell list">
        <a class="mui-navigate-right">
          <div class="icon" style>
            <svg viewBox="0 0 40 40" id="download" width="100%" height="100%">
              <path
                fill="#4DA6F0"
                d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"
              />
            </svg>
          </div>
          <div class="my_text">下载饿了么APP</div>
        </a>
      </li>
      <li class="mui-table-view-cell list">
        <a class="mui-navigate-right">
          <div class="icon" style>
            <svg viewBox="0 0 17 18" id="rule" width="100%" height="100%">
              <g fill="#4DA6F0" fill-rule="evenodd">
                <path
                  d="M10.389 18H2.444a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h12.112a1.5 1.5 0 0 1 1.5 1.5V12h-4.867a.8.8 0 0 0-.8.8V18zM3.978 4a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h9.044a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2H3.978zm0 3a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h9.044a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2H3.978z"
                />
                <path d="M15.111 13l-3.778 4v-3.6c0-.22.18-.4.4-.4h3.378z" />
              </g>
            </svg>
          </div>
          <div class="my_text">规则中心</div>
        </a>
      </li>
      <li class="mui-table-view-cell list list_last" @click="exit">
        <a>
          <div class="my_text">退出登录</div>
        </a>
      </li>
    </ul>
    <div class="bottom_text">隐私政策</div>
    <bottom></bottom>
  </div>
</template>
<style lang="scss" scoped>
// * {
//   padding: 0;
//   margin: 0;
// }

.box {
  // background-color: #f5f5f5;
  font-size: 12px;
  height: 100%;
  .login {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    // padding-top:100px;
    background: linear-gradient(to bottom, skyblue, #fff);
  }
  .mui-table-view {
    background-color: #f5f5f5;

    .my_info {
      padding: 15px;
      background-color: #008dff;
      color: #fff;
      font-weight: bold;

      .mui-navigate-right:after,
      .mui-push-left:after,
      .mui-push-right:after {
        color: #fff;
      }
      .my_img {
        float: left;
        margin-right: 20px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
      .text {
        float: left;
        font-size: 16px;
        // position: relative;
        // height: 100%;
        .t1 {
          // position: absolute;
          transform: translateY(80%);
          // top:50%;
        }
      }
    }
    .list {
      background-color: #fff;
      .icon {
        height: 20px;
        width: 20px;
        float: left;
        margin-right: 5px;
      }
      .my_text {
        float: left;
      }
    }
    .list_last {
      text-align: center;
      a {
        .my_text {
          float: none;
          text-align: center;
          color: red;
        }
      }
    }
    .address {
      margin-bottom: 10px;
    }
    .address.mui-table-view-cell:after {
      height: 0px;
    }
    .monney {
      margin-bottom: 10px;
    }
    .my_bottom {
      display: flex;
      height: 80px;
      // padding-top: 10px;
      // line-height: 80px;
      > div {
        padding-top: 15px;
        flex: 1;
        border-right: 1px solid #ddd;
        text-align: center;
        i {
          font-size: 20px;
          font-weight: bold;
        }
      }
      .i1 {
        color: #ff5f3e;
      }
      .i2 {
        color: #6ac20b;
      }
      div {
        color: #999;
      }
    }
  }
  .bottom_text {
    text-align: center;
    color: skyblue;
    padding: 10px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
  }
}
</style>
<script>
import bottom from "../components/bottom";
import login from "../views/login";

import { Dialog } from "vant";
export default {
  data() {
    return {
      loginflag: null
    };
  },
  methods: {
    exit() {
      Dialog.confirm({
        title: "Tips",
        message: "确认退出登陆？"
      })
        .then(() => {
          // on confirm
          this.$store.state.loginflag = false;
      localStorage.login = false;
          console.log("确认")
        })
        .catch(() => {
          // on cancel
          console.log("取消")
        });
      
      // this.$router.push("/my")
    }
  },
  components: {
    bottom,
    login
  },
  created() {
    localStorage.login = this.$store.state.loginflag;

    // this.$store.state.loginflag=localStorage.login;
  }
};
</script>