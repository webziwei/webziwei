<template>
  <div class="sub_order">
    <mt-header title="确认订单">
      <router-link :to=link+shopinfo.gid slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <ul class="mui-table-view sub_list">
      <div class="sub_title">{{shopinfo.shopName}}</div>
      <li class="mui-table-view-cell sub_li" v-for="(item,i) in carlist" :key="i">
        <div class="sub_left">
          <img :src="item.imgurl" alt>
          <span class="t1">{{item.name}}</span>
        </div>
        <div class="sub_middle">
          <span class="t2">
            <i>×</i>
            {{item.num}}
          </span>
        </div>
        <div class="sub_right">
          <span class="t3">&nbsp;￥{{item.num*item.price}}</span>
        </div>
      </li>
      <li class="mui-table-view-cell sub_li">
        <div class="sub_left">
          <span class="t1" style="color:#999;">配送费: 4元</span>
        </div>
      </li>
      <li class="mui-table-view-cell sub_li">
        <div class="sub_right">
          <span class="t4">
            小计 :&nbsp;￥
            <i>{{$store.state.allprice+4}}</i>
          </span>
        </div>
      </li>
    </ul>
    <div class="sub_bottom">
      <span class="t4">
        总计 :&nbsp;￥
        <i>{{$store.state.allprice+4}}</i>
      </span>
      <div class="sub_btn" @click="order">提交</div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      shopinfo:{},
      link:"/goodsinfo?num=",
      obj:{},
      carlist:[]
    };
  },
  methods: {
    handleClose() {
    },
    order() {
      let i= this.$store.state.shopAll.findIndex(val => { return val.gid == this.$route.query.num });//获取当前商家在数组中的索引值
      // console.log(i)
      let shoplist=this.$store.state.shopcar;
      // console.log(this.shopinfo)
      //往vuex中傳遞商家信息
      this.obj['gid']=this.shopinfo.gid;
      this.obj['index']=i;//在商家數組中的索引值
      this.obj['shopImg']=this.shopinfo.shopImg;
      this.obj['shopName']=this.shopinfo.shopName;

      // this.obj["shop"]=shoplist;

      
      Toast({//调用弹出框提示
        message: "提交成功",
        iconClass: "mui-icon mui-icon-checkmarkempty"
      });
      //调用vuex方法
      this.$store.commit("addorder",this.obj);

      setTimeout(() => {//1.5秒后跳转页面
        // console.log('aaa')
        this.$router.push("/goods")
      }, 1500);
    }
  },
  created() {
    this.carlist=this.$store.state.shopcar
  
      this.$store.state.shopAll.filter(item => {//过滤选择对应数据渲染
      //将数组返回
      // if(item.name.indexOf(keywords) != -1){//pdua
      //     return item;
      // }
      // es6 提供一个方法 叫做 string.prototype.includes("包含字符串")
      // 返回 包含true 不包含 false 如果为空值默认为true
      if (item.gid.includes(this.$route.query.num)) {
        this.shopinfo=item;//将对应数据赋值到组件数组以供渲染
        // console.log(this.shopinfo)
        // return console.log(item);
      }
    });
  },
  mounted() {
  }
};
</script>
<style lang="scss">
body,
html {
  width: 100%;
  background: linear-gradient(to bottom, skyblue, #fff);
}
.sub_order{
  padding-top:40px;
}
.sub_list {
  margin: 10px;
  font-size: 12px;
  .sub_title {
    padding: 11px 15px;
    width: 100%;
    height: 42px;
    position: relative;
    font-weight: 700;
    font-size: 14px;
  }
  .sub_title::before {
    content: "";
    width: calc(100% - 30px);
    height: 2px;
    background-color: #ddd;
    position: absolute;
    bottom: 0;
    left: 15px;
  }
  .sub_li {
    display: flex;
    // text-align: right;
    .sub_left {
      flex: 8;
      img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        margin-right: 10px;
        border-radius: 50%;
      }
      .t1 {
      }
    }
    .sub_middle {
      flex: 4;
      text-align: center;
      line-height: 42px;
      .t2 {
      }
    }
    .sub_right {
      flex: 4;
      text-align: right;
      line-height: 42px;

      .t3 {
        height: 100%;
        // line-height: 100%;
        // float:right;
      }
      .t4 {
        color: #ff690f;
        i {
          font-size: 16px;
        }
      }
    }
  }
}
.mint-header{
  position: fixed;
  top:0;
  left: 0;
  width:100%;
}
.sub_bottom {
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  background-color: #3c3c3c;
  line-height: 50px;
  padding-left: 10px;
  .t4 {
    color: #fff;
    font-weight: 700;
    i {
      font-size: 14px;
    }
  }
  .sub_btn {
    width: 80px;
    height: 100%;
    background-color: #00e067;
    text-align: center;
    float: right;
    color: #fff;
    font-weight: 700;
  }
}
</style>

