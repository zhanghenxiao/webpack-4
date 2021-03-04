// import './style.css'
// let dom = document.createElement('button')
// dom.innerHTML = '新增'
// dom.onclick = function() {
//   const item = document.createElement('div')
//   item.innerHTML = 'item'
//   document.body.appendChild(item)
// }
// document.body.appendChild(dom)

import counter from './counter'
import number from './number'

counter()
number()
// 我们在js中也实现了HMR，CSS那部分为什么没这样写的原因是 css-loader底层已经做了这样的处理，vue-loader也是
if (module.hot){
  // 依赖的文件
  module.hot.accept('./number.js',()=>{
    let num = document.querySelector('#number')
    document.body.removeChild(num)
    number()
  })
}
