import nav from './nav.jpg'
import createNav from './createNav.js'
import  style from './index.css';

// 创建img标签
let img = new Image()
img.src = nav
// img添加class 标签
img.classList.add(style.nav)
let root = document.querySelector('.root')
root.append(img)

createNav()