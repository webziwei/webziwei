import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carurl: "../assets/carhei.svg",//购物车图片样式
    shopcar: [],//记录购物车数组
    sublink: "#",//结算跳转链接
    showcar: false,//控制购物车遮罩层是否显示
    loginflag:false,
    allprice: 0,//购物车商品价格
    user:[{name:"13128416720",password:"12345678"}],
    order: [],//订单数组
    luser:{},
    shopAll: [
      {
        gid: 'g0',
        shopImg: "../assets/22.webp",//商店招牌图
        bannerurl: "../assets/22.webp",//商店背景图
        shopName: '华莱美免配送店',//商店名称
        Discount: Array,//优惠信息
        startVaule: '4.7',//星级
        year: '220',//月售数量
        goodslist: [
          {
            name: "华莱美牛肉拉面",
            year: "58",
            price: "13",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/5.webp",
            num: 0,
            flag: false,
            id: 0
          },
          {
            name: "华莱美番茄蛋汤",
            year: "14",
            price: "16",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/6.webp",
            num: 0,
            flag: false,
            id: 1
          },
          {
            name: "华莱美番茄炒鸡蛋",
            year: "5",
            price: "21",
            oldprice: "26",
            imgurl: "../assets/goodsinfo/7.webp",
            num: 0,
            flag: false,
            id: 2
          },
          {
            name: "华莱美牛肉粉",
            year: "78",
            price: "5",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/8.webp",
            num: 0,
            flag: false,
            id: 3
          },
          {
            name: "华莱美回魂汤",
            year: "1",
            price: "43",
            oldprice: "63",
            imgurl: "../assets/goodsinfo/9.webp",
            num: 0,
            flag: false,
            id: 4
          },
          {
            name: "孟婆汤",
            year: "58",
            price: "20",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/10.webp",
            num: 0,
            flag: false,
            id: 5
          },
          {
            name: "黯然销魂饭",
            year: "58",
            price: "31",
            oldprice: "35",
            imgurl: "../assets/goodsinfo/11.webp",
            num: 0,
            flag: false,
            id: 6
          },
          {
            name: "十全大补汤",
            year: "5",
            price: "313",
            oldprice: "355",
            imgurl: "../assets/goodsinfo/12.webp",
            num: 0,
            flag: false,
            id: 7
          },
          {
            name: "返老还童饼",
            year: "58",
            price: "199",
            oldprice: "299",
            imgurl: "../assets/goodsinfo/13.webp",
            num: 0,
            flag: false,
            id: 8
          }
        ],
        goodslist2: [
          {
            name: "华莱美牛肉拉面2",
            year: "58",
            price: "13",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/5.webp",
            num: 0,
            flag: false,
            id: 0
          },
          {
            name: "华莱美番茄蛋汤2",
            year: "14",
            price: "16",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/6.webp",
            num: 0,
            flag: false,
            id: 1
          },
          {
            name: "华莱美番茄炒鸡蛋2",
            year: "5",
            price: "21",
            oldprice: "26",
            imgurl: "../assets/goodsinfo/7.webp",
            num: 0,
            flag: false,
            id: 2
          },
          {
            name: "华莱美牛肉粉2",
            year: "78",
            price: "5",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/8.webp",
            num: 0,
            flag: false,
            id: 3
          },
          {
            name: "华莱美回魂汤2",
            year: "1",
            price: "43",
            oldprice: "63",
            imgurl: "../assets/goodsinfo/9.webp",
            num: 0,
            flag: false,
            id: 4
          },
          {
            name: "孟婆汤2",
            year: "58",
            price: "20",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/10.webp",
            num: 0,
            flag: false,
            id: 5
          },
          {
            name: "黯然销魂饭2",
            year: "58",
            price: "31",
            oldprice: "35",
            imgurl: "../assets/goodsinfo/11.webp",
            num: 0,
            flag: false,
            id: 6
          },
          {
            name: "十全大补汤2",
            year: "5",
            price: "313",
            oldprice: "355",
            imgurl: "../assets/goodsinfo/12.webp",
            num: 0,
            flag: false,
            id: 7
          },
          {
            name: "返老还童饼2",
            year: "58",
            price: "199",
            oldprice: "299",
            imgurl: "../assets/goodsinfo/13.webp",
            num: 0,
            flag: false,
            id: 8
          }
        ],
      },
      {
        gid: 'g1',
        shopImg: "../assets/23.webp",//商店招牌图
        bannerurl: "string",//商店背景图
        shopName: '好好吃麻辣烫',//商店名称
        Discount: Array,//优惠信息
        startVaule: '4.2',//星级
        year: '142',//月售数量
        goodslist: [
          {
            name: "好好吃牛肉拉面",
            year: "58",
            price: "130",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/5.webp",
            num: 0,
            flag: false,
            id: 0
          },
          {
            name: "好好吃番茄蛋汤",
            year: "14",
            price: "160",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/6.webp",
            num: 0,
            flag: false,
            id: 1
          },
          {
            name: "好好吃番茄炒鸡蛋",
            year: "5",
            price: "23",
            oldprice: "26",
            imgurl: "../assets/goodsinfo/7.webp",
            num: 0,
            flag: false,
            id: 2
          },
          {
            name: "好好吃牛肉粉",
            year: "78",
            price: "5",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/8.webp",
            num: 0,
            flag: false,
            id: 3
          },
          {
            name: "回魂汤",
            year: "1",
            price: "43",
            oldprice: "63",
            imgurl: "../assets/goodsinfo/9.webp",
            num: 0,
            flag: false,
            id: 4
          },
          {
            name: "孟婆汤",
            year: "58",
            price: "20",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/10.webp",
            num: 0,
            flag: false,
            id: 5
          },
          {
            name: "黯然销魂饭",
            year: "58",
            price: "31",
            oldprice: "35",
            imgurl: "../assets/goodsinfo/11.webp",
            num: 0,
            flag: false,
            id: 6
          },
          {
            name: "十全大补汤",
            year: "5",
            price: "313",
            oldprice: "355",
            imgurl: "../assets/goodsinfo/12.webp",
            num: 0,
            flag: false,
            id: 7
          },
          {
            name: "返老还童饼",
            year: "58",
            price: "199",
            oldprice: "299",
            imgurl: "../assets/goodsinfo/13.webp",
            num: 0,
            flag: false,
            id: 8
          }
        ],
      },
      {
        gid: 'g2',
        shopImg: "../assets/32.webp",//商店招牌图
        bannerurl: "string",//商店背景图
        shopName: '百味',//商店名称
        Discount: Array,//优惠信息
        startVaule: '4.2',//星级
        year: '20',//月售数量
        goodslist: [
          {
            name: "百味牛肉拉面",
            year: "58",
            price: "13",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/5.webp",
            num: 0,
            flag: false,
            id: 0
          },
          {
            name: "百味番茄蛋汤",
            year: "14",
            price: "16",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/6.webp",
            num: 0,
            flag: false,
            id: 1
          },
          {
            name: "百味番茄炒鸡蛋",
            year: "5",
            price: "21",
            oldprice: "26",
            imgurl: "../assets/goodsinfo/7.webp",
            num: 0,
            flag: false,
            id: 2
          },
          {
            name: "百味牛肉粉",
            year: "78",
            price: "5",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/8.webp",
            num: 0,
            flag: false,
            id: 3
          },
          {
            name: "百味回魂汤",
            year: "1",
            price: "43",
            oldprice: "63",
            imgurl: "../assets/goodsinfo/9.webp",
            num: 0,
            flag: false,
            id: 4
          },
          {
            name: "百味孟婆汤",
            year: "58",
            price: "20",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/10.webp",
            num: 0,
            flag: false,
            id: 5
          },
          {
            name: "百味黯然销魂饭",
            year: "58",
            price: "31",
            oldprice: "35",
            imgurl: "../assets/goodsinfo/11.webp",
            num: 0,
            flag: false,
            id: 6
          },
          {
            name: "百味十全大补汤",
            year: "5",
            price: "313",
            oldprice: "355",
            imgurl: "../assets/goodsinfo/12.webp",
            num: 0,
            flag: false,
            id: 7
          },
          {
            name: "百味返老还童饼",
            year: "58",
            price: "199",
            oldprice: "299",
            imgurl: "../assets/goodsinfo/13.webp",
            num: 0,
            flag: false,
            id: 8
          }
        ],
      },
      {
        gid: 'g3',
        shopImg: "../assets/25.webp",//商店招牌图
        bannerurl: "string",//商店背景图
        shopName: '生蚝',//商店名称
        Discount: Array,//优惠信息
        startVaule: '4.5',//星级
        year: '123',//月售数量
        goodslist: [
          {
            name: "生蚝牛肉拉面",
            year: "58",
            price: "13",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/5.webp",
            num: 0,
            flag: false,
            id: 0
          },
          {
            name: "生蚝番茄蛋汤",
            year: "14",
            price: "16",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/6.webp",
            num: 0,
            flag: false,
            id: 1
          },
          {
            name: "生蚝番茄炒鸡蛋",
            year: "5",
            price: "21",
            oldprice: "26",
            imgurl: "../assets/goodsinfo/7.webp",
            num: 0,
            flag: false,
            id: 2
          },
          {
            name: "生蚝牛肉粉",
            year: "78",
            price: "5",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/8.webp",
            num: 0,
            flag: false,
            id: 3
          },
          {
            name: "生蚝回魂汤",
            year: "1",
            price: "43",
            oldprice: "63",
            imgurl: "../assets/goodsinfo/9.webp",
            num: 0,
            flag: false,
            id: 4
          },
          {
            name: "孟婆汤",
            year: "58",
            price: "20",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/10.webp",
            num: 0,
            flag: false,
            id: 5
          },
          {
            name: "黯然销魂饭",
            year: "58",
            price: "31",
            oldprice: "35",
            imgurl: "../assets/goodsinfo/11.webp",
            num: 0,
            flag: false,
            id: 6
          },
          {
            name: "十全大补汤",
            year: "5",
            price: "313",
            oldprice: "355",
            imgurl: "../assets/goodsinfo/12.webp",
            num: 0,
            flag: false,
            id: 7
          },
          {
            name: "返老还童饼",
            year: "58",
            price: "199",
            oldprice: "299",
            imgurl: "../assets/goodsinfo/13.webp",
            num: 0,
            flag: false,
            id: 8
          }
        ],
      },
      {
        gid: 'g4',
        shopImg: "../assets/26.webp",//商店招牌图
        bannerurl: "string",//商店背景图
        shopName: '加州汉堡',//商店名称
        Discount: Array,//优惠信息
        startVaule: '4.8',//星级
        year: '244',//月售数量
        goodslist: [
          {
            name: "加州汉堡牛肉拉面",
            year: "58",
            price: "13",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/5.webp",
            num: 0,
            flag: false,
            id: 0
          },
          {
            name: "加州汉堡番茄蛋汤",
            year: "14",
            price: "16",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/6.webp",
            num: 0,
            flag: false,
            id: 1
          },
          {
            name: "加州汉堡番茄炒鸡蛋",
            year: "5",
            price: "21",
            oldprice: "26",
            imgurl: "../assets/goodsinfo/7.webp",
            num: 0,
            flag: false,
            id: 2
          },
          {
            name: "加州汉堡牛肉粉",
            year: "78",
            price: "5",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/8.webp",
            num: 0,
            flag: false,
            id: 3
          },
          {
            name: "加州汉堡回魂汤",
            year: "1",
            price: "43",
            oldprice: "63",
            imgurl: "../assets/goodsinfo/9.webp",
            num: 0,
            flag: false,
            id: 4
          },
          {
            name: "加州汉堡孟婆汤",
            year: "58",
            price: "20",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/10.webp",
            num: 0,
            flag: false,
            id: 5
          },
          {
            name: "加州汉堡黯然销魂饭",
            year: "58",
            price: "31",
            oldprice: "35",
            imgurl: "../assets/goodsinfo/11.webp",
            num: 0,
            flag: false,
            id: 6
          },
          {
            name: "加州汉堡十全大补汤",
            year: "5",
            price: "313",
            oldprice: "355",
            imgurl: "../assets/goodsinfo/12.webp",
            num: 0,
            flag: false,
            id: 7
          },
          {
            name: "返老还童饼",
            year: "58",
            price: "199",
            oldprice: "299",
            imgurl: "../assets/goodsinfo/13.webp",
            num: 0,
            flag: false,
            id: 8
          }
        ],
      },
      {
        gid: 'g5',
        shopImg: "../assets/27.webp",//商店招牌图
        bannerurl: "string",//商店背景图
        shopName: '叫了只炸鸡',//商店名称
        Discount: Array,//优惠信息
        startVaule: '4.8',//星级
        year: '244',//月售数量
        goodslist: [
          {
            name: "叫了只牛肉拉面",
            year: "58",
            price: "13",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/5.webp",
            num: 0,
            flag: false,
            id: 0
          },
          {
            name: "叫了只番茄蛋汤",
            year: "14",
            price: "16",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/6.webp",
            num: 0,
            flag: false,
            id: 1
          },
          {
            name: "叫了只番茄炒鸡蛋",
            year: "5",
            price: "21",
            oldprice: "26",
            imgurl: "../assets/goodsinfo/7.webp",
            num: 0,
            flag: false,
            id: 2
          },
          {
            name: "叫了只牛肉粉",
            year: "78",
            price: "5",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/8.webp",
            num: 0,
            flag: false,
            id: 3
          },
          {
            name: "叫了只回魂汤",
            year: "1",
            price: "43",
            oldprice: "63",
            imgurl: "../assets/goodsinfo/9.webp",
            num: 0,
            flag: false,
            id: 4
          },
          {
            name: "叫了只孟婆汤",
            year: "58",
            price: "20",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/10.webp",
            num: 0,
            flag: false,
            id: 5
          },
          {
            name: "黯然销魂饭",
            year: "58",
            price: "31",
            oldprice: "35",
            imgurl: "../assets/goodsinfo/11.webp",
            num: 0,
            flag: false,
            id: 6
          },
          {
            name: "十全大补汤",
            year: "5",
            price: "313",
            oldprice: "355",
            imgurl: "../assets/goodsinfo/12.webp",
            num: 0,
            flag: false,
            id: 7
          },
          {
            name: "返老还童饼",
            year: "58",
            price: "199",
            oldprice: "299",
            imgurl: "../assets/goodsinfo/13.webp",
            num: 0,
            flag: false,
            id: 8
          }
        ],
      },
      {
        gid: 'g7',
        shopImg: "../assets/28.webp",//商店招牌图
        bannerurl: "string",//商店背景图
        shopName: '寿司先生',//商店名称
        Discount: Array,//优惠信息
        startVaule: '4.8',//星级
        year: '244',//月售数量
        goodslist: [
          {
            name: "先生牛肉拉面",
            year: "58",
            price: "13",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/5.webp",
            num: 0,
            flag: false,
            id: 0
          },
          {
            name: "先生番茄蛋汤",
            year: "14",
            price: "16",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/6.webp",
            num: 0,
            flag: false,
            id: 1
          },
          {
            name: "先生番茄炒鸡蛋",
            year: "5",
            price: "21",
            oldprice: "26",
            imgurl: "../assets/goodsinfo/7.webp",
            num: 0,
            flag: false,
            id: 2
          },
          {
            name: "先生牛肉粉",
            year: "78",
            price: "5",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/8.webp",
            num: 0,
            flag: false,
            id: 3
          },
          {
            name: "先生回魂汤",
            year: "1",
            price: "43",
            oldprice: "63",
            imgurl: "../assets/goodsinfo/9.webp",
            num: 0,
            flag: false,
            id: 4
          },
          {
            name: "先生孟婆汤",
            year: "58",
            price: "20",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/10.webp",
            num: 0,
            flag: false,
            id: 5
          },
          {
            name: "先生黯然销魂饭",
            year: "58",
            price: "31",
            oldprice: "35",
            imgurl: "../assets/goodsinfo/11.webp",
            num: 0,
            flag: false,
            id: 6
          },
          {
            name: "十全大补汤",
            year: "5",
            price: "313",
            oldprice: "355",
            imgurl: "../assets/goodsinfo/12.webp",
            num: 0,
            flag: false,
            id: 7
          },
          {
            name: "返老还童饼",
            year: "58",
            price: "199",
            oldprice: "299",
            imgurl: "../assets/goodsinfo/13.webp",
            num: 0,
            flag: false,
            id: 8
          }
        ],
      },
      {
        gid: 'g8',
        shopImg: "../assets/30.webp",//商店招牌图
        bannerurl: "string",//商店背景图
        shopName: '东北掌门烧烤',//商店名称
        Discount: Array,//优惠信息
        startVaule: '4.8',//星级
        year: '244',//月售数量
        goodslist: [
          {
            name: "东北掌门牛肉拉面",
            year: "58",
            price: "13",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/5.webp",
            num: 0,
            flag: false,
            id: 0
          },
          {
            name: "东北掌门番茄蛋汤",
            year: "14",
            price: "16",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/6.webp",
            num: 0,
            flag: false,
            id: 1
          },
          {
            name: "东北掌门番茄炒鸡蛋",
            year: "5",
            price: "21",
            oldprice: "26",
            imgurl: "../assets/goodsinfo/7.webp",
            num: 0,
            flag: false,
            id: 2
          },
          {
            name: "东北掌门牛肉粉",
            year: "78",
            price: "5",
            oldprice: "23",
            imgurl: "../assets/goodsinfo/8.webp",
            num: 0,
            flag: false,
            id: 3
          },
          {
            name: "东北掌门回魂汤",
            year: "1",
            price: "43",
            oldprice: "63",
            imgurl: "../assets/goodsinfo/9.webp",
            num: 0,
            flag: false,
            id: 4
          },
          {
            name: "东北掌门孟婆汤",
            year: "58",
            price: "20",
            oldprice: "27",
            imgurl: "../assets/goodsinfo/10.webp",
            num: 0,
            flag: false,
            id: 5
          },
          {
            name: "东北掌门黯然销魂饭",
            year: "58",
            price: "31",
            oldprice: "35",
            imgurl: "../assets/goodsinfo/11.webp",
            num: 0,
            flag: false,
            id: 6
          },
          {
            name: "东北掌门十全大补汤",
            year: "5",
            price: "313",
            oldprice: "355",
            imgurl: "../assets/goodsinfo/12.webp",
            num: 0,
            flag: false,
            id: 7
          },
          {
            name: "东北掌门返老还童饼",
            year: "58",
            price: "199",
            oldprice: "299",
            imgurl: "../assets/goodsinfo/13.webp",
            num: 0,
            flag: false,
            id: 8
          }
        ],
      },
    ]
  },
  mutations: {
    addcar(state, data) {//购物车数据处理

      var index = state.shopcar.findIndex(val => { return val.name == data.name })//判断数组中是否有该商品有返回索引值
      // console.log(index)
      if (index != "-1") {//购物车存在该商品
        let num = data.num;//得到该菜品数量
        // console.log(data.num)
        if (num == 0) {
          state.shopcar.splice(index, 1); //判断当前商品数量为0移出购物车
        } else {
          state.shopcar[index] = data; //更新该商品数量
        }
      } else {//购物车不存在该商品
        state.shopcar.push(data)  //将该商品添加进购物车
      }
      // console.log(state.shopcar);
    },
    addorder(state,data) {//订单列表

      // console.log("addorder"+state.shopcar)
      let obj = {};//定义一个对象
      obj=data;//赋上组件传递的值
      obj['shop1'] = state.shopcar;//将购买菜品数组记录到对象
      obj['time'] = new Date();//设置一个订单时间
      obj["price"] = state.allprice;//添加总价格
      // console.log(obj)

      state.order.unshift(obj)//将这个对象添加到菜品列表
      // console.log(state.order)
    }
  },
  actions: {}
});
