'use strict';
//加载Node的Path模块
var path = require('path');
//加载Node的fs模块
var fs = require('fs');
//加载webpack模块
var webpack = require('webpack');
//srcDir为当前开发目录(/src)
var srcDir = path.resolve(process.cwd(), 'src');
//srcDir为当前建立目录(/assets)
var assetsDir = path.resolve(process.cwd(), 'assets');
//加载自动化css独立加载插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//加载自动化HTML自动化编译插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
//加载JS模块压缩编译插件
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
//加载公用组件插件
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
//设置需要排除单独打包的插件
var singleModule = ['react', 'react-dom', 'jquery', 'Raphael'];
//排除的页面入口js
var jsExtract = [];

//获取本级IP 以方便手机端测试使用
function getIPAdress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

//加载webpack目录参数配置
var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: getEntry(),
    output: {
        path: path.join(process.cwd(), 'assets'),
        filename: 'dist/js/[name].js',
        publicPath: 'http://' + getIPAdress() + ':5000/'
    },
    plugins: [
        //排除css压缩加载在页面
        new ExtractTextPlugin('dist/css/[name].css'),
        //合并额外的js包
        new CommonsChunkPlugin('lib', './dist/js/lib.js', jsExtract),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    module: {
        //加载器配置
        loaders: [{
            test: /\.css$/,
            exclude: [path.resolve(process.cwd(), 'src/dist/css/common'), path.resolve(process.cwd(), 'src/dist/css/components')],
            loaders: [
                'style-loader',
                'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&importLoaders=1',
                'postcss-loader?sourceMap=true'
            ]
        }, {
            test: /\.css$/,
            include: [path.resolve(process.cwd(), 'src/dist/css/common'), path.resolve(process.cwd(), 'src/dist/css/components')],
            loaders: [
                'style-loader',
                'css-loader?sourceMap&importLoaders=1',
                'postcss-loader?sourceMap=true'
            ]
        }, {
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/, // 匹配不希望处理文件的路径
            include: path.join(process.cwd(), 'src')
        }, {
            test: /\.(png|jpeg|jpg|gif)$/,
            loader: 'file?name=dist/img/[name].[ext]'
        }, {
            test: /\.(woff|eot|ttf)$/i,
            loader: 'url?limit=10000&name=dist/fonts/[name].[ext]'
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    postcss: function(webpack) {
        return {
            plugins: [
                require('postcss-import')({
                    addDependencyTo: webpack
                }),
                require('postcss-display-inline-block'),
                require('autoprefixer'),
                require('precss'),
                require('postcss-easysprites')({
                    imagePath: '../img',
                    spritePath: './assets/dist/img'
                })
            ]
        };
    }
};

//设置入口文件
function getEntry() {
    var jsDir = path.resolve(srcDir, 'dist/js');
    var names = fs.readdirSync(jsDir);
    var map = {};
    names.forEach(function(name) {
        var m = name.match(/(.+)\.js$/);
        var entry = m ? m[1] : '';
        var entryPath = entry ? path.resolve(jsDir, name) : '';
        var entryArr = [];
        entryArr.push(entryPath);
        entryArr.push('eventsource-polyfill');
        entryArr.push('webpack-hot-middleware/client');
        jsExtract.push(name);
        if (entry) {
            jsExtract.push(name.substring(0, name.length - 3));
            map[entry] = entryArr;
        }
    });
    //自定义额外加载包,不会合并在页面对应js中
    map['lib'] = singleModule;
    return map;
}

var pages = fs.readdirSync(srcDir);
pages.forEach(function(filename) {
    var m = filename.match(/(.+)\.html$/);
    if (m) {
        var conf = {
            template: path.resolve(srcDir, filename),
            inject: true, //允许插件修改哪些内容，包括head与body
            hash: true, //为静态资源生成hash值
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            },
            filename: filename
        };

        if (m[1] in config.entry) {
            conf.chunks = ['vendors', m[1]];
        }

        config.plugins.push(new HtmlWebpackPlugin(conf));
    }
});

module.exports = config;
