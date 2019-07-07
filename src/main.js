import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";
// import VueJsonp from 'vue-jsonp'
// Vue.use(VueJsonp)

// Vue.prototype.$axios = axios;


// // // 引入所有mint
import Mint from "mint-ui"; //把所有组件导入
Vue.use(Mint); //组件导入Vue，全局组件



import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)


import 'mint-ui/lib/style.css';

import  "../public/foot/iconfont.css";//引入字体图标

import  "../public/dist/css/mui.css";//引入mui

import mui from "../public/dist/js/mui.js";//引入mui.js

//引入 vant全部组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


//引入mint组件
// import { Header, Tabbar, TabItem, Swipe, SwipeItem, Button, TabContainer, TabContainerItem, InfiniteScroll, Spinner} from 'mint-ui';//引入头部组件
// Vue.use(Header).use(Tabbar).use(TabItem).use(Swipe).use(SwipeItem).use(Button).use(TabContainer).use(TabContainerItem).use(InfiniteScroll).use(Spinner);
//引入动画
import ani from "animate.css"

// 引入时间模块
import moment from "moment";
// 编写全局过滤器
Vue.filter("dateFormat", function (dateStr, pattern = "HH:mm:ss") {
  return moment(dateStr).format(pattern);
})

Vue.config.productionTip = false;

new Vue({
  router,//引入路由
  store,
  render: h => h(App)//
}).$mount("#app");
