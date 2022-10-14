// webpack 配置文件
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname,"./src/index.ts"),

    output:{
        filename:"index.js",
        path:path.resolve(__dirname,"./dist"),
        clean:true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use:["style-loader","css-loader"],
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.ts$/,
                use:[ {
                    loader:"babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                // 配置信息
                                {
                                    // 要兼容的目标浏览器及版本
                                    targets: {
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    //指定corejs的版本
                                    "corejs": "3",
                                    //使用corejs的方式 "usage"  表示按需加载
                                    "useBuiltIns": "usage" 
                                } 
                            ]
                        ]
                    },                 
                },
                "ts-loader"
            ]
            }
         
        ]

    },
    plugins: [
        new HTMLWebpackPlugin({
            template:path.resolve(__dirname,"./index.html"),
        }),
    ],

    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        open: true, // 是否自动打开浏览器

        // HotModuleReplacement（HMR/热模块替换）：
        // 在程序运行中，替换、添加或删除模块，而无需重新加载整个页面
        hot: true, //开启HMR功能 （只用于开发环境）
    },

    resolve: {
        // 匹配不带后缀的文件
        extensions: ['.js','.tsx','.ts'],
    },

    mode:"development",
    
    devtool: "cheap-module-source-map",

}