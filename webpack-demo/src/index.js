// const nav = require('./nav.jpg')
// console.log(nav); // c7ef824d7c45efa8657b62aae9352e80.jpg 同dist下面的

import nav from './nav.jpg'
// import './index.css'
import './nav.scss';

// 创建img标签
let img = new Image()
img.src = nav
// img添加class 标签
img.classList.add('nav')
let root = document.querySelector('.root')
root.append(img)