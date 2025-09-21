var icon = document.querySelector("i");
var con = document.getElementById("container");

con.addEventListener("dblclick", function () {
  icon.style.transform = " translate(45%, -35%) scale(1)";
  icon.style.opacity = "0.8";
  setTimeout(() => {
    icon.style.opacity = "0";
  }, 1000);
  setTimeout(() => {
    icon.style.transform = " translate(45%, -35%) scale(0)";
  }, 2000);
});
