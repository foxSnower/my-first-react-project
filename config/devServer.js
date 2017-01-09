//加载Node的Path模块
const path = require('path');
//加载webpack模块
const webpack = require('webpack');
//加载webpack 热加载服务器模块
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
//加载webpack-dashboard监控视窗模块
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
//加载webpack配置文件
const config = require('./webpack.config.dev');
//加载koa服务器模块
const koa = require('koa');

//配置及初始化Koa服务器
var creatServer = () => {
    //创建koa服务器应用
    let app = koa();
    //初始化webpack应用
    let compiler = webpack(config);
    //初始化webpack-dashboard应用
    let dashboard = new Dashboard();
    //调用webpack-dashboard应用
    compiler.apply(new DashboardPlugin(dashboard.setData));
    //调用webpack热加载模块及对应参数
    app.use(webpackDevMiddleware(compiler, {
        quiet: true,
        noInfo: true,
        publicPath: config.output.publicPath,
        hot: true,
        lazy: false,
        historyApiFallback: true
    }));
    app.use(webpackHotMiddleware(compiler), {
        log: () => {}
    });
    //调用koa静态文件
    app.use(require('koa-static')(path.join(process.cwd(), '/assets')));
    //调用koa列出开发目录
    app.use(require('koa-serve-index')(path.join(process.cwd(), '/src')));
    //调用开启5000端口用来测试和开发
    app.listen(5000, function(err) {
        if (err) { console.log(err); }
        console.log('Listening at localhost:5000');
    });
};

//调用创建koa服务器方法
creatServer();
