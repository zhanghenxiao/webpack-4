const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
// HMR使用
const webpack = require('webpack')

const devConfig = {
  // 去掉警告，production会被压缩 development打包出来的js会不被压缩
  mode: 'development',
  // 共性带有source-map会生成新的map文件
  // development环境 默认开启sourceMap ,我们现在关闭它devtool: 'none'，'cheap-module-eval-source-map'
  // cheap指的是只带列信息不带行信息只针对业务代码，module是也操作loader的文件，eval是种方式
  devtool: 'cheap-module-eval-source-map',
  //production环境使用这个devtool: 'cheap-module-source-map'比较好
  // devtool: 'cheap-module-source-map',

  // 开启一个web 服务
  devServer: {
    // 那个目录开启一个web 服务,方便做ajax请求
    contentBase:'./dist',
    // 自动打开浏览器
    open:true,
    // 端口号为8080
    port:8080,
    // HMR使用
    hot:true,
    // 设置需手动刷新浏览器，即使不生效也不让浏览器刷新
    // hotOnly:true
  },
  
  plugins: [
    // HtmlWebpackPlugin会在打包结束后，自动生成一个html,并把生成的js文件自动引入到html中
    // new HtmlWebpackPlugin({
    //   // 以这个模板生成html
    //   template: './src/index.html'
    // }),
    // new CleanWebpackPlugin(['./dist']),
    // HMR使用
    new webpack.HotModuleReplacementPlugin()
  ],
  // 开发环境设置tree shaking
  optimization: {
     usedExports : true
  },
  
}

module.exports = merge(commonConfig, devConfig)