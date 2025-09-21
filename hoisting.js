console.log(a);
greet();
function greet() {
  console.log("hello");
}

var a = 10; //only declaration is hoisted but initialization is not..
console.log(a);

// console.log(b);
// let b = 10; it will throw an reference error kyuki b variable temporal dead zone me chala gya hai ....
// jab tak let , const ka declaration line execute nahi hota hai tabtak variable accesible nahi hota hai....
