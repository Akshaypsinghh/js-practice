//4 pillers of DOM
//1.Selection of an element
//changing html
//changing css
//Event listener

// const a = document.querySelector("h1");
// // console.log(a);
// // a.innerHTML = "hello sir"; changing the html
// a.addEventListener("click", function () {
//   a.innerHTML = "kaise ho aap sir";
//   a.style.backgroundColor = "pink";
// });
var button = document.querySelector("button");
var cnt = 0;
button.addEventListener("click", function () {
  var bulb = document.getElementById("bulb");
  if (cnt == 0) {
    bulb.style.backgroundColor = "yellow";
    cnt = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    cnt = 0;
  }
});
