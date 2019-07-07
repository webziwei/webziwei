<template>
  <div class="box">
    <div class="pingjia">
      <div class="pingfen">
        <span class="num">5.0</span>
        <span class="pf_icon">
          商家评分
          <br>
          <van-rate size="8" readonly v-model="value"/>
        </span>
        <span>
          味道
          <br>
          <i>5.0</i>
        </span>
        <span class="line">
          包装
          <br>
          <i>5.0</i>
        </span>
        <span>
          配送
          <br>
          <i>5.0</i>
        </span>
      </div>
    </div>
    <div class="pjcontent">
      <!-- 切换栏 -->
      <div class="my_tab">
        <div class="tab-pj con"  @click="pingjia='pj1'">
          <!-- active 设置 tab组件切换对应的id值 -->
          <span>全部124</span>
        </div>
        <div class="tab-pj" @click="pingjia='pj2'">
          <span>最新15</span>
        </div>
        <div class="tab-pj" @click="pingjia='pj3'">
          <span>好评94</span>
        </div>
        <div class="tab-pj cp" @click="pingjia='pj4'">
          <span>差评6</span>
        </div>
        <div class="tab-pj" @click="pingjia='pj5'">
          <span>有图10</span>
        </div>
      </div>
      <mt-tab-container v-model="pingjia">
        <mt-tab-container-item id="pj1">
          <div class="small_box" v-for=" i in 10" :key="i"> 
            <div class="img_l">
              <img src="../assets/01.webp" alt>
            </div>
            <div class="text_r">
              <div class="t1">t******124 <span style="float:right; ">2019-6-25</span></div>
              <div class="t2">
                <van-rate size="8" readonly v-model="value"/>
              </div>
              <div class="t3">点个赞，但是老板把我的熊猫果茶送成了奥利奥珍珠奶茶了啊😂</div>
              <div class="t4">商家回复：亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！</div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="pj2">2</mt-tab-container-item>
        <mt-tab-container-item id="pj3">3</mt-tab-container-item>
        <mt-tab-container-item id="pj4">4</mt-tab-container-item>
        <mt-tab-container-item id="pj5">5</mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<style lang="scss">
.con{
    background-color: #0097FF !important;
    color:#fff !important;
}
.box {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #f5f5f5;
  .pingjia {
    height: 60px;
    padding-top: 10px;
    background-color: #fff;
    // line-height: 60px;
    .pingfen {
      font-size: 12px;
      text-align: center;
      // line-height: 80px;
      // height: 80px;
      display: flex;
      span {
        flex: 2;
        color: #666;
        i {
          font-weight: bold;
        }
      }
      .num {
        flex: 4;
        font-size: 30px;
        color: #ff6000;
        line-height: 40px;
      }
      .pf_icon {
        text-align: left;
        flex: 4;
      }
      .line {
        border-right: 1px solid #eee;
      }
    }
  }
  .pjcontent {
    margin-top: 10px;
    width: 100%;
    // height: 600px;
    background-color: #fff;

    .my_tab {
      padding: 10px;
      // width:100%;
      height: 100px;
      border-bottom: 1px solid #ddd;
      // padding-bottom:15px;
      .tab-pj {
        float: left;
        padding: 0 10px;
        height: 30px;
        margin-right: 10px;
        margin-bottom: 10px;
        line-height: 30px;
        text-align: center;
        background-color: #ebf5ff;
        color: #999;
        font-size: 12px;
      }
      .cp {
        background-color: #ddd;
      }
    }
  }
  .small_box{
      display:flex;
      padding-top:10px;
      font-size: 12px;
      color:#999;
      border-bottom:1px solid #ddd;
      .img_l{
          flex:2;
          img{
              width:60px;
              height:60px;
              border-radius: 50%;
          }
      }
      .text_r{
          padding:10px;
          flex:8;
          .t4{
              background-color: #F3F3F3;
              font-size: 10px;
              line-height: 12px;
              padding:10px;
              border-radius: 5px;
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
      value: 5,
      pingjia: "pj1"
    };
  },
  methods:{
      tab(){
          $(".tab-pj").click(function(){
              $(this).addClass("con").siblings().removeClass("con")
          })
      }
  },
  mounted() {
      this.tab()
  },
};
</script>
