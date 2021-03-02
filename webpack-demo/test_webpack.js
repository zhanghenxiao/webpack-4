const path = require('path')
module.exports = {
  // 打包那个文件
  entry: './index.js',
  output: {
    // 打包完成生成的名字
    filename: 'bundle.js',
    // 打包生成的文件放在那个文件夹bundle下
    path: path.resolve(__dirname, 'bundle')
  }
}