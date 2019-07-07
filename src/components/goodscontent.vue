<template>
  <div class="tab">
    <div class="mui-content mui-row mui-fullscreen">
      <div class="mui-col-xs-2 overscroll">
        <div
          id="segmentedControls"
          class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical"
        >
          <a class="mui-control-item" data-index="0" href="#content1">汤面类</a>
          <a class="mui-control-item" data-index="1" href="#content2">饼类</a>
          <a class="mui-control-item" data-index="2" href="#content3">热菜类</a>
          <a class="mui-control-item" data-index="3" href="#content4">糖类</a>
          <a class="mui-control-item" data-index="4" href="#content5">炒饭类</a>
          <a class="mui-control-item" data-index="5" href="#content6">盖浇饭</a>
          <a class="mui-control-item" data-index="6" href="#content7">拌面类</a>
          <a class="mui-control-item" data-index="7" href="#content8">炒面类</a>
          <a class="mui-control-item" data-index="8" href="#content8">凉面类</a>
          <a class="mui-control-item" data-index="9" href="#content8">饺子类</a>
          <a class="mui-control-item" data-index="10" href="#content8">回顶部</a>
          <a class="mui-control-item" data-index="11" href="#content8">回顶部</a>
        </div>
      </div>
      <div
        id="segmentedControlContents"
        class="mui-col-xs-10"
        style="border-left: 1px solid #c8c7cc;"
      >
        <div id="content1" class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
              <h5>汤面类</h5>
            </li>
            <li
              class="mui-table-view-cell mui-media"
              v-for="(item,i) in goodslist"
              :key="i"
              @click="xq(i)"
            >
              <a href="javascript:;">
                <div class="small_box">
                  <div class="img_l">
                    <img :src="item.imgurl" alt />
                  </div>
                  <div class="text_r">
                    <div class="t1">
                      {{item.name}}
                      <!-- <span style="float:right; ">2019-6-25</span> -->
                    </div>
                    <div class="t2">
                      月售
                      <span>{{item.year}}</span>份
                    </div>
                    <div class="t3">
                      <span>
                        <i>¥&nbsp;</i>
                        <span>{{item.price}}&nbsp;</span>
                        <i class="old">&nbsp;¥ {{item.oldprice}}</i>
                      </span>
                    </div>
                    <div class="val_num">
                      <div class="left_show" v-show="item.flag">
                        <span class="mui-icon mui-icon-minus" @click="jian($event,i)"></span>
                        <span class="num">{{item.num}}</span>
                      </div>
                      <van-icon name="add" @click="add($event,i)" color="#2395FF" size="20" />
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div id="content2" class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
              <h5>饼类</h5>
            </li>

            <li class="mui-table-view-cell" v-for="(item,i) in 6" :key="i">第2个选项</li>
          </ul>
        </div>
        <div id="content3" class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
              <h5>热菜类</h5>
            </li>
            <li class="mui-table-view-cell" v-for="(item,i) in 6" :key="i">第3个</li>
          </ul>
        </div>
        <div id="content4" class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
              <h5>糖类</h5>
            </li>
            <li class="mui-table-view-cell" v-for="(item,i) in 6" :key="i">第4个</li>
          </ul>
        </div>
        <div id="content5" class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
              <h5>炒饭类</h5>
            </li>
            <li class="mui-table-view-cell" v-for="(item,i) in 6" :key="i">第5个</li>
          </ul>
        </div>
        <div id="content6" class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
              <h5>盖浇饭</h5>
            </li>
            <li class="mui-table-view-cell" v-for="(item,i) in 6" :key="i">第6个</li>
          </ul>
        </div>
        <div id="content7" class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
              <h5>拌面类</h5>
            </li>
            <li class="mui-table-view-cell" v-for="(item,i) in 6" :key="i">第7个</li>
          </ul>
        </div>
        <div id="content8" class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="(item,i) in 6" :key="i">第8个</li>
          </ul>
        </div>
        <div id="content9" class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell">
              <h1>炒面类</h1>
            </li>
            <li class="mui-table-view-cell" v-for="(item,i) in 6" :key="i">9-2</li>
          </ul>
        </div>
        <div id="content10" class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell">
              <h1>121545</h1>
            </li>
            <li class="mui-table-view-cell" v-for="(item,i) in 6" :key="i">第10个</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 遮罩层 商品详情-->
    <van-popup class="msk_detail" v-model="showdetail" position="bottom" :overlay="false">
      <img :src="xqcontent.imgurl" alt />
      <div class="detail">
        <h3>{{xqcontent.name}}</h3>
        <h5>月售{{xqcontent.year}}份 好评率95%</h5>
        <h6>
          <span>
            <i>¥</i>
            <span>&nbsp;{{xqcontent.price}}&nbsp;</span>
            <i class="old">¥&nbsp;{{xqcontent.oldprice}}</i>
          </span>
        </h6>
        <p>兰州牛肉面已经有200多年的历史，兰州这个城市聚集了多民族饮食文化，依托汉族的粮食，回族的面食技艺以及藏族的牦牛肉，三个民族的交融，天造地设，共同孕育了这道美味独特的兰州牛肉面。</p>
        <!-- <div class="val_num">
          <div class="left_show">
            <span class="mui-icon mui-icon-minus"></span>
            <span class="num"></span>
          </div>
          <van-icon name="add" color="#2395FF" size="20"/>
        </div>-->
      </div>
      <div class="close" @click="showdetail=false">
        <div>×</div>
      </div>
    </van-popup>
    <!-- 遮罩层 购物车-->
    <van-popup class="show_car" v-model="$store.state.showcar" position="bottom" :overlay="false">
      <div class="top" @click="$store.state.showcar=false"></div>
      <div class="bottom_info">
        <div class="title">
          已选商品
          <div class="del" @click="del">
            <span class="mui-icon mui-icon-trash"></span>清空
          </div>
        </div>
        <div class="list">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="(item,i) in $store.state.shopcar" :key="i">
              <span>{{item.name}}</span>
              <div class="span_m">
                <i>￥</i>
                <span>{{item.price*item.num}}</span>
              </div>
              <div class="val_num">
                <div class="left_show">
                  <span class="mui-icon mui-icon-minus" @click="jian2(i)"></span>
                  <span class="num">{{item.num}}</span>
                </div>
                <van-icon name="add" color="#2395FF" @click="add2(i)" size="20" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<style lang="scss">
.show_car {
  // background-color: none !important;
  .top {
    width: 100%;
    height: 40%;
    background: rgba(0, 0, 0, 0.5);
  }
  .bottom_info {
    width: 100%;
    height: calc(60% - 60px);
    background-color: #fff;
    // position: relative;
    .title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: #eceff1;
      padding-left: 10px;
      font-size: 12px;
      color: #999;

      > div.del {
        float: right;
        color: #999;
        padding-right: 10px;
        font-size: 12px;
        span {
          color: #999;
        }
      }
    }
    .list {
      width: 100%;
      overflow-y: auto;
      height: calc(100% - 40px);
      color: #999;
      ul {
        li {
          position: relative;
          .span_m {
            position: absolute;
            top: 10px;
            right: 90px;
            color: #ff5339;
            i {
              font-size: 10px;
            }
          }
          .val_num {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 60px;
            height: 30px;
            .mui-icon {
              position: absolute;
              left: 0;
              top: 0;
              font-size: 20px;
            }
            .van-icon {
              right: 0;
              top: 0;
              position: absolute;
            }
            .num {
              left: 25px;
              top: 0;
              position: absolute;
            }
          }
        }
      }
    }
  }
}
.small_box {
  display: flex;
  padding-top: 10px;
  font-size: 12px;
  color: #999;
  .img_l {
    flex: 2;
    img {
      width: 80px;
      height: 80px;
      //   border-radius: 50%;
    }
  }
  .text_r {
    padding: 0 10px;
    flex: 8;
    position: relative;
    .t2 {
      font-size: 10px;
    }
    .t4 {
      background-color: #f3f3f3;
      font-size: 10px;
      line-height: 12px;
      padding: 10px;
      border-radius: 5px;
    }
    .t3 {
      margin-top: 20px;
      span {
        color: #ff690f;
        font-size: 12px;
        i {
          font-size: 10px;
        }
        .old {
          color: #999;
          font-size: 10px;
          text-decoration: line-through;
        }
      }
    }
    .val_num {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 60px;
      height: 30px;
      .mui-icon {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 20px;
      }
      .van-icon {
        right: 0;
        top: 0;
        position: absolute;
      }
      .num {
        left: 26px;
        top: 0;
        position: absolute;
      }
    }
  }
}
.mui-icon {
  color: #2395ff;

  font-size: 20px;
}
.msk_detail {
  background-color: #fff !important;
  .detail {
    padding: 0 10px;
    position: relative;
    h3 {
      font-size: 16px;
    }
    h5 {
      font-size: 10px;
      line-height: 20px;
    }
    h6 {
      //   font-size: 12px;
      //   color: #ff5339;
      span {
        color: #ff690f;
        font-size: 14px;
        i {
          font-size: 10px;
        }
        .old {
          color: #999;
          font-size: 10px;
          text-decoration: line-through;
        }
      }
    }
    p {
      font-size: 10px;
    }
    .val_num {
      position: absolute;
      top: 20px;
      right: 30px;
      width: 60px;
      height: 30px;
      .mui-icon {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 20px;
      }
      .van-icon {
        right: 0;
        top: 0;
        position: absolute;
      }
      .num {
        left: 26px;
        top: 0;
        position: absolute;
      }
    }
  }
}

// 外层盒子
*[data-v-7ba5bd90] {
  height: 100%;
  overflow-y: auto;
}
.overscroll {
  height: 100% !important;
  // overflow-y: auto;
}
// 菜品展示栏
.bottom_over {
  height: 100%;
  overflow-y: auto;
  background-color: #fff;
}
.boxinfo {
  height: 100%;
  overflow-y: auto;
}
// 菜品分类
.tab {
  font-size: 12px;
  position: relative;
  top: 0;
  // height: 254px;
  .overscroll {
    #segmentedControls {
      a {
        font-size: 12px;
        color: #666;
      }
    }
  }
}

// 滚动组件配置
.mui-row.mui-fullscreen > [class*="mui-col-"] {
  height: 100%;
}
.mui-col-xs-2,
.mui-col-xs-10 {
  overflow-y: auto;
  height: 100%;
  border-left: none !important;
}
.mui-segmented-control .mui-control-item {
  line-height: 50px;
  width: 100%;
}
.mui-control-content {
  display: block;
}
.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  background-color: #fff;
}
.mint-tab-container {
  height: 100%;
  .mint-tab-container-wrap {
    height: 100%;
    .mint-tab-container-item {
      height: 100%;
      .tab {
        height: 100%;
      }
    }
  }
}
</style>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      showdetail: false, //详情页遮罩层
      showcard: false, //优惠页遮罩层
      numflag: true, //
      carnum: 0, //购物车图标上商品数量
      price: 0, //总价
      limit: 20, //最低起送额
      goodslist: [], //菜品信息数组
      goodslist2: [], //菜品信息数组
      xqcontent: {} //设置详情页数据
    };
  },
  methods: {
    add(e, i) {
      e.stopPropagation(); //禁止事件冒泡
      //添加菜品总数
      this.carnum++;
      // 设置购物车图标上数量显示
      if (this.carnum > 0) {
        //当有商品选择时
        $(".tops_num")
          .show(500) //显示商品图标
          .text("" + this.carnum); //添加更新商品数量
      }
      //添加菜品总价
      this.price =
        Math.ceil(Number(this.price)) +
        Math.ceil(Number(this.goodslist[i].price)); //转为数据类型

      if (this.price < this.limit) {
        //未超过起送价
        $(".submit_r").css({ backgroundColor: "#535356" });
        let a = this.limit - this.price;
        this.$store.state.sublink = "#"; //设置链接未超过起送价不可结算

        $(".submit_r>a>span").text("还差" + a + "元起送");
      }
      if (this.price >= this.limit) {
        //超过起送价
        $(".submit_r") //设置结算框样式
          .css({ backgroundColor: "#38CA73" })
          .find("span")
          .text("去结算");

        this.$store.state.sublink = "/Settlement?num=" + this.$route.query.num; //设置链接超过起送价可结算跳转链接
      }

      //购物车样式控制
      $(".car_img").css({
        backgroundColor: "#3190e8"
      });
      // 添加类名实现动画效果
      $(".car_big ").addClass("animated rubberBand");
      //延时0.5秒清除动画类名实现连续动画效果
      setTimeout(() => {
        $(".car_big ").removeClass("animated rubberBand");
      }, 500);
      // 购物车照片替换
      this.$store.state.carurl = "../assets/carbai.svg";

      // 右侧单个菜品数量增加
      this.goodslist[i].num++;
      //商品数量

      //判断当前菜品是否有选择
      if (this.goodslist[i].num > 0) {
        // 设置是否显示加减按钮
        this.goodslist[i].flag = true;
        $(".monney")
          .text("￥" + this.price)
          .css({ color: "#fff" }); //设置总价 价格字体样式
      }

      // vuex 加入购物车
      this.$store.commit("addcar", this.goodslist[i]);

      //往vuex 中添加同步购物车总价
      this.$store.state.allprice = this.price;
    },
    jian(e, i) {
      e.stopPropagation(); //禁止事件冒泡
      this.carnum--;
      // 设置购物车图标上数量显示
      $(".tops_num").text("" + this.carnum);

      this.price =
        Math.ceil(Number(this.price)) -
        Math.ceil(Number(this.goodslist[i].price));

      this.goodslist[i].num--;
      if (this.price < this.limit) {
        $(".submit_r").css({ backgroundColor: "#535356" });
        let a = this.limit - this.price;
        this.$store.state.sublink = "#";

        $(".submit_r>a>span").text("还差" + a + "元起送");
      }

      $(".monney").text("￥" + this.price);

      if (this.goodslist[i].num <= 0) {
        this.goodslist[i].flag = false;
      }
      if (this.carnum <= 0) {
        $(".car_img").css({
          backgroundColor: "#363636"
        });
        this.$store.state.carurl = "../assets/carhei.svg";
        $(".monney")
          .text("未选购商品")
          .css({ color: "#999" });

        // 设置购物车图标上数量隐藏
        $(".tops_num").hide(500);
      }

      // vuex 加入购物车
      this.$store.commit("addcar", this.goodslist[i]);

      //往vuex 中添加同步购物车总价
      this.$store.state.allprice = this.price;
    },
    add2(i) {
      let a = this.$store.state.shopcar[i].id;
      this.goodslist[a].num++;
      //添加菜品总数
      this.carnum++;
      // 设置购物车图标上数量显示
      if (this.carnum > 0) {
        $(".tops_num")
          .show(500)
          .text("" + this.carnum);
      }
      //添加菜品总价
      this.price =
        Math.ceil(Number(this.price)) +
        Math.ceil(Number(this.goodslist[a].price));
      $(".monney").text("￥" + this.price);
      // console.log(this.$store.state.shopcar[i]);

      if (this.price < this.limit) {
        $(".submit_r").css({ backgroundColor: "#535356" });
        let a = this.limit - this.price;
        // console.log(a);
        this.$store.state.sublink = "#";

        $(".submit_r>a>span").text("还差" + a + "元起送");
      }
      if (this.price >= this.limit) {
        $(".submit_r")
          .css({ backgroundColor: "#38CA73" })
          .find("span")
          .text("去结算");
        this.$store.state.sublink = "/Settlement?num=" + this.$route.query.num;
      }
      // vuex 加入购物车
      this.$store.commit("addcar", this.goodslist[a]);

      //往vuex 中添加同步购物车总价
      this.$store.state.allprice = this.price;
    },
    jian2(i) {
      let a = this.$store.state.shopcar[i].id;
      this.goodslist[a].num--;
      //添加菜品总数
      this.carnum--;

      // 设置购物车图标上数量显示
      $(".tops_num").text("" + this.carnum);
      this.price =
        Math.ceil(Number(this.price)) -
        Math.ceil(Number(this.goodslist[a].price));
      $(".monney").text("￥" + this.price);
      // console.log(this.$store.state.shopcar[i]);
      if (this.price < this.limit) {
        $(".submit_r").css({ backgroundColor: "#535356" });
        let a = this.limit - this.price;
        // console.log(a);
        this.$store.state.sublink = "#";

        $(".submit_r>a>span").text("还差" + a + "元起送");
      }
      if (this.carnum <= 0) {
        $(".car_img").css({
          backgroundColor: "#363636"
        });
        this.$store.state.carurl = "../assets/carhei.svg";
        $(".monney")
          .text("未选购商品")
          .css({ color: "#999" });

        // 设置购物车图标上数量隐藏
        $(".tops_num").hide(500);
      }
      if (this.goodslist[a].num <= 0) {
        // $(".left_show").hide(500);
        this.goodslist[a].flag = false;
      }
      // vuex 加入购物车
      this.$store.commit("addcar", this.goodslist[a]);

      //往vuex 中添加同步购物车总价
      this.$store.state.allprice = this.price;
    },
    xq(i) {
      //设置详情页
      this.showdetail = true;
      this.xqcontent = this.goodslist[i];
      // console.log(this.xqcontent);
    },
    del() {
      //重置所有数据
      this.goodslist.forEach(item => {
        item.num = 0;
        item.flag = false;
      });

      this.$store.state.shopcar = [];
      this.price = 0;
      this.carnum = 0;

      $(".car_img").css({
        backgroundColor: "#363636"
      });
      this.$store.state.carurl = "../assets/carhei.svg";
      $(".monney")
        .text("未选购商品")
        .css({ color: "#999" });
      if (this.price < this.limit) {
        $(".submit_r").css({ backgroundColor: "#535356" });
        let a = this.limit - this.price;
        // console.log(a);
        this.$store.state.sublink = "#";

        $(".submit_r>a>span").text("还差" + a + "元起送");
        // 设置购物车图标上数量隐藏
        $(".tops_num").hide(500);
      }
    }
  },
  created() {
    this.$store.state.shopAll.filter(item => {
      if (item.gid.includes(this.$route.query.num)) {
        this.goodslist = item.goodslist; //将对应数据赋值到组件数组以供渲染
        // return console.log(item);
      }
    });
  },
  mounted() {
    this.del(); //进入清空全部购物车数据

    this.$store.state.sublink = "#"; //解决跳转页回商品页结算按钮跳转链接未改变

    //mui div左侧滚动组件js部分
    mui.init({
      swipeBack: true //启用右滑关闭功能
    });
    var controls = document.getElementById("segmentedControls");
    var contents = document.getElementById("segmentedControlContents");
    //默认选中第一个
    controls.querySelector(".mui-control-item").classList.add("mui-active");
    (function() {
      var controlsElem = document.getElementById("segmentedControls");
      var contentsElem = document.getElementById("segmentedControlContents");
      var controlListElem = controlsElem.querySelectorAll(".mui-control-item");
      var contentListElem = contentsElem.querySelectorAll(
        ".mui-control-content"
      );
      var controlWrapperElem = controlsElem.parentNode;
      var controlWrapperHeight = controlWrapperElem.offsetHeight;
      var controlMaxScroll =
        controlWrapperElem.scrollHeight - controlWrapperHeight; //左侧类别最大可滚动高度
      var maxScroll = contentsElem.scrollHeight - contentsElem.offsetHeight; //右侧内容最大可滚动高度
      var controlHeight = controlListElem[0].offsetHeight; //左侧类别每一项的高度
      var controlTops = []; //存储control的scrollTop值
      var contentTops = [0]; //存储content的scrollTop值
      var length = contentListElem.length;
      for (var i = 0; i < length; i++) {
        controlTops.push(controlListElem[i].offsetTop + controlHeight);
      }
      for (var i = 1; i < length; i++) {
        var offsetTop = contentListElem[i].offsetTop;
        if (offsetTop + 100 >= maxScroll) {
          var height = Math.max(offsetTop + 100 - maxScroll, 100);
          var totalHeight = 0;
          var heights = [];
          for (var j = i; j < length; j++) {
            var offsetHeight = contentListElem[j].offsetHeight;
            totalHeight += offsetHeight;
            heights.push(totalHeight);
          }
          for (var m = 0, len = heights.length; m < len; m++) {
            contentTops.push(
              parseInt(
                maxScroll - (height - (heights[m] / totalHeight) * height)
              )
            );
          }
          break;
        } else {
          contentTops.push(parseInt(offsetTop));
        }
      }
      contentsElem.addEventListener("scroll", function() {
        var scrollTop = contentsElem.scrollTop;
        for (var i = 0; i < length; i++) {
          var offsetTop = contentTops[i];
          var offset = Math.abs(offsetTop - scrollTop);
          //						console.log("i:"+i+",scrollTop:"+scrollTop+",offsetTop:"+offsetTop+",offset:"+offset);
          if (scrollTop < offsetTop) {
            if (scrollTop >= maxScroll) {
              onScroll(length - 1);
            } else {
              onScroll(i - 1);
            }
            break;
          } else if (offset < 20) {
            onScroll(i);
            break;
          } else if (scrollTop >= maxScroll) {
            onScroll(length - 1);
            break;
          }
        }
      });
      var lastIndex = 0;
      //监听content滚动
      var onScroll = function(index) {
        if (lastIndex !== index) {
          lastIndex = index;
          var lastActiveElem = controlsElem.querySelector(".mui-active");
          lastActiveElem && lastActiveElem.classList.remove("mui-active");
          var currentElem = controlsElem.querySelector(
            ".mui-control-item:nth-child(" + (index + 1) + ")"
          );
          currentElem.classList.add("mui-active");
          //简单处理左侧分类滚动，要么滚动到底，要么滚动到顶
          var controlScrollTop = controlWrapperElem.scrollTop;
          if (controlScrollTop + controlWrapperHeight < controlTops[index]) {
            controlWrapperElem.scrollTop = controlMaxScroll;
          } else if (controlScrollTop > controlTops[index] - controlHeight) {
            controlWrapperElem.scrollTop = 0;
          }
        }
      };
      //滚动到指定content
      var scrollTo = function(index) {
        contentsElem.scrollTop = contentTops[index];
      };
      mui(controlsElem).on("tap", ".mui-control-item", function(e) {
        scrollTo(this.getAttribute("data-index"));
        return false;
      });
    })();
  }
};
</script>
