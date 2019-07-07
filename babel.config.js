module.exports = {
  presets: ["@vue/app"],
  "plugins": [["component", 
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]],
  "ignore": [//配置mui.js
    "./public/dist/js/mui.js"
  ]

};
