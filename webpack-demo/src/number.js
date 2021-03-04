function number() {
  let dom = document.createElement('div')
  dom.setAttribute('id','number')
  dom.innerHTML = 8000
  document.body.appendChild(dom)
}

export default number