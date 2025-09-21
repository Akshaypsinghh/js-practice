var h2 = document.querySelector("h2");
var btn = document.getElementById("addbtn");
let cnt = 0;
btn.addEventListener("click", function () {
  if (cnt == 0) {
    h2.textContent = "Pat Gayi!";
    h2.style.color = "green";
    btn.innerHTML = "Remove Friend";
    cnt = 1;
  } else {
    h2.textContent = "Stranger";
    h2.style.color = "black";
    btn.innerHTML = "Add Friend";
    cnt = 0;
  }
});
