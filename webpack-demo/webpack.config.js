const path = require('path')
module.exports = {
  // 去掉警告，production会被压缩 development打包出来的js会不被压缩
  mode: 'production',
  // 打包那个文件
  entry: {
    main: './index.js',
  },
  output: {
    // 打包完成生成的名字
    filename: 'bundle.js',
    // 打包生成的文件放在那个文件夹bundle下
    path: path.resolve(__dirname, 'bundle')
  }
}