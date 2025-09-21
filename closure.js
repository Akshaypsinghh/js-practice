// function hello() {
//   var c = "hii";
//   function bye() {
//     console.log(c);
//     // ye apne lexical environment ki hard value nahi leta hai ye refrence leta hai unka yaha par hii nahi hlo print hoga kyuki ye hii nhi c leta hai or agar app c ki value ko update karte ho to updated value print karega!
//   }
//   var c = "hlo";
//   return bye;
// }

// let a = hello();
// a();

// example 2

function c() {
  let x = () => {
    let a = 10;
    console.log(a);
    let y = () => {
      //   let a = 20;
      console.log(a);
      let z = () => {
        // let a = 30;
        console.log(a);
      };
      z();
    };
    a = 99;
    y();
  };
  return x;
}
let a = c();
a();
