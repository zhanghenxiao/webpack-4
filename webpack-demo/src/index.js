// 1.同步代码
// import _ from 'lodash' //1mb 同步代码

// // 我们的业务代码1mb
// console.log(_.join(['a', 'b', 'c'], '***'));
// console.log(_.join(['a', 'd', 'c'], '***'));

// 2.异步代码
function getComponent() {
  // default做兼容性处理
  return import('lodash').then(({ default: _})=> {
    var element = document.createElement('div')
    element.innerHTML = _.join(['zhang', 'cookie'], '-');
    return element
  })
}
getComponent().then(element => {
  document.body.appendChild(element);
})

// 分析
// 我们首次加载页面时，需要加载2mb
// 当我们的业务代码发生改变时，用户需要获取最新的页面，需再次重新加载页面2mb
// 但是第三库lodash 是没有发生改变的， 我们需要对它进行代码分割

// 代码分割二种方式
// 1，同步代码（从上至下），我们需要配置optimization即可
// 2，异步加载代码时（improt），我们无需做任何配置  貌似不需要安装"babel-plugin-dynamic-import-webpack": "^1.1.0",
