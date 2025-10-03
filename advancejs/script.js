//lexical and dynamic scoping=>
// let x = 10;
// function a() {
//   console.log(x);
// }
// function b() {
//   let x = 20;
//   a();
// }
// b();
// closures=>
// function a() {
//   let x = 10;
//   return function () {
//     console.log(x);
//   };
// }
// let c = a(); //yaha par function execution complete hone par memory stack se hat chuka hai jiske sath sath variable x bhii ..

// c(); //par ye print karega 10.. kyki jab bhi closure banta hai tab unke sath backlink banaya jata hai jiska naam hota hai [[environment]]..
