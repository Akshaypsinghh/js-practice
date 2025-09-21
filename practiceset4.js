// let name = "noone";
// console.log(`${name} is my crush`);

// console.log(name.slice(2, 4));
// console.log('har"'.length);

// let string = "akshay pratap";
// console.log(string.endsWith("pratap"));
// console.log(string.startsWith("akshay"));

// let p = "akshay";
// console.log(p.toUpperCase());

// let l = "Give Us Rs1000";
// console.log(l.length);

// let arr = [10, 23, 40, 5];
// let result = arr.map((n) => n * n);
// console.log(result);

// let arr = [10, 23, 40, 5];
// let ans = arr.reduce((n1, n2) => {
//   return n1 * n2;
// });

// console.log(ans);

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let num = random(1, 100);
let input = prompt("Enter the number");
