import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import { readdir } from "fs";

Vue.use(Router);//引入路由

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      component: () =>
        import("./views/yindao.vue")
    },
    {
      name: "ggao",
      path: "/ggao",
      component: () =>
        import("./views/ggao.vue")
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/goods",
      component: () =>
        import("./views/goods.vue")
    },
    {
      path: "/category",
      component: () =>
        import("./views/category.vue")
    },
    {
      path: "/my",
      component: () =>
        import("./views/my.vue")
    },
    {
      name: "search",
      path: "/search",
      component: () =>
        import("./views/search.vue"),
      children: [
        {
          path: "shop", component: () =>
            import("./views/shop.vue")
          },
      ]
    },
    {
      name: "goodsinfo",
      path: "/goodsinfo",
      component: () =>
        import("./views/goodsinfo.vue"),
     
    },
    {
      name: "fenlei",
      path: "/fenlei",
      component: () =>
        import("./views/fenlei.vue"),

    },
    {
      name: "Settlement",
      path: "/Settlement",
      component: () =>
        import("./views/Settlement.vue")
    },
    {
      name: "address",
      path: "/address",
      component: () =>
        import("./views/address.vue")
    },
    {
      name: "login",
      path: "/login",
      component: () =>
        import("./views/login.vue")
    },
     {
      name: "myinfo",
      path: "/myinfo",
      component: () =>
        import("./views/myinfo.vue")
    }

  ]
});
