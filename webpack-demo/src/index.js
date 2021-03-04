// 在业务代码可以使用polyfill，如果开发插件会污染全局
// import "@babel/polyfill";
const arr = [
  new Promise(()=>{}),
  new Promise(()=>{})
]

arr.map(item=>{
  console.log(item);
})
