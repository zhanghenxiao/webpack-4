function Header() {
  let root = document.querySelector('.root')
  let h = document.createElement('div')
  h.innerText = 'header'
  root.append(h)
}

export default Header