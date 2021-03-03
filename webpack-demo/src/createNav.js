import nav from './nav.jpg'
function createNav() {
  // 创建img标签
  let img = new Image()
  img.src = nav
  // img添加class 标签
  img.classList.add('nav')
  let root = document.querySelector('.root')
  root.append(img)
}
export default createNav