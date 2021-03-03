const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
const { NONAME } = require('dns')
module.exports = {
  // 去掉警告，production会被压缩 development打包出来的js会不被压缩
  mode: 'development',
  // 共性带有source-map会生成新的map文件
  // development环境 默认开启sourceMap ,我们现在关闭它devtool: 'none'，'cheap-module-eval-source-map'
  devtool: 'source-map',
  // production环境使用这个devtool: 'cheap-module-source-map'比较好
  // devtool: 'cheap-module-source-map',
  // 打包那个文件
  entry: {
    main: './src/index.js',
    // sub: './src/index.js'
  },
  module: {
    rules:[
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          // file-loader 也类似url-loader
          // loader: 'file-loader',
          loader: 'url-loader',
          // loader配置
          options: {
            // 打包的名字nav_hash.后缀，我们叫做是占位符
            name: '[name]_[hash].[ext]',
            // 打包在images文件下
            outputPath: 'images/',
            // 限制大小判断是否打包成base64 或单独生成图片
            limit: 10240
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // 先是css-loader解析再整合到一个文件中，style-loader再挂载到heade上
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              // 设置互相引用的css文件也需要走下面的二个loader
              importLoaders: 2,
              // 开启css moudle的模块化打包 设置css moudle样式不冲突
              // modules: true
            }
          },
          
          'sass-loader',
          'postcss-loader',
        ]
      },
      {
        // 打包字体文件
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: 'file-loader'
        }
      },
    ]
  },
  plugins: [
    // HtmlWebpackPlugin会在打包结束后，自动生成一个html,并把生成的js文件自动引入到html中
    new HtmlWebpackPlugin({
      // 以这个模板生成html
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(['./dist'])
  ],
  output: {
    // 打包出来的index.html 带有cdn
    // publicPath: 'http://cdn.com.cn',
    // 打包完成生成的名字设置为bundle.js,默认是main.js
    filename: '[name].js',
    // 打包生成的文件放在那个文件夹bundle下
    path: path.resolve(__dirname, 'dist')
  }
}