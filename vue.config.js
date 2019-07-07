const webpack = require('webpack');
const path = require('path'); 

module.exports = {
    devServer: {
        host: "0.0.0.0",//ip
        port: 10000//端口

    },
    lintOnSave: false, //取消eslint验证
    chainWebpack: (config) => {//配置mui组件js
        config.resolve.alias
            .set('@', path.resolve(__dirname, './public'))
            .set('mui', path.resolve(__dirname, './public/dist/js/mui.js'))
    },
    configureWebpack: {
        // 增加一个plugins  
        plugins: [
            new webpack.ProvidePlugin({
                mui: "mui",
                "window.mui": "mui"
            })
        ]
    },  

}