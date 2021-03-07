const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // 打包那个文件
  entry: {
    main: './src/index.js',
    // sub: './src/index.js'
  },
  // 遇到不同文件类型时
  module: {
    rules:[
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          // file-loader 也类似url-loader会把图片拷贝到dist目录下
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
        test: /\.scss$/,
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
        test: /\.css$/,
        use: [
          // 先是css-loader解析再整合到一个文件中，style-loader再挂载到heade上
          'style-loader', 
          'css-loader',
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
      {
        test: /\.js$/,
        // 忽略node-modules的目录下的文件
        exclude: /node_modules/,
        use: {
          // 建立与webpack的联系
          loader: "babel-loader",
          // 写在这里太多了，可以新建 .babelrc
          // options: {
          //   // 把es6解析成es5语法
          //   presets: [['@babel/preset-env',
          //   // 使用@babel/polyfill是把所有的语法都打包进去，设置我们使用到的语法才进行打包
            //  { 
            //   targets: {
            //     // 高于这个版本我们不做es6转es5
            //     chrome: "67",
            //   },
            //   // 按需引入"@babel/polyfill" ,记得也需在业务代码中加上import "@babel/polyfill";;
            //    useBuiltIns:'usage'
            //   }
           // ]]
          // }
        }
      }
    ]
  },
  
  plugins: [
    // HtmlWebpackPlugin会在打包结束后，自动生成一个html,并把生成的js文件自动引入到html中
    new HtmlWebpackPlugin({
      // 以这个模板生成html
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(['./dist'], {
      root: path.resolve(__dirname, '../')
    }),
  ],
  // optimization: {
  //   // 代码分割
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  output: {
    // 打包出来的index.html 带有cdn
    // publicPath: 'http://cdn.com.cn',
    // 打包完成生成的名字设置为bundle.js,默认是main.js
    filename: '[name].js',
    // 打包生成的文件放在那个文件夹bundle下
    // path: path.resolve(__dirname, 'dist')
    path: path.resolve(__dirname, '../dist')
  }
}