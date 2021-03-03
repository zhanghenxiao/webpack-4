const path = require('path')
module.exports = {
  // 去掉警告，production会被压缩 development打包出来的js会不被压缩
  mode: 'production',
  // 打包那个文件
  entry: {
    main: './src/index.js',
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
            // 打包的名字nav_hash.后缀
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
              modules: true
            }
          },
          
          'sass-loader',
          'postcss-loader',
        ]
      },
    ]
  },
  output: {
    // 打包完成生成的名字
    filename: 'bundle.js',
    // 打包生成的文件放在那个文件夹bundle下
    path: path.resolve(__dirname, 'dist')
  }
}