function Content() {
  let root = document.querySelector('.root')
  let h = document.createElement('div')
  h.innerText = 'content'
  root.append(h)
}

export default Content