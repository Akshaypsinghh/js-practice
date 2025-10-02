var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var imagediv = document.querySelector("#image");
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    ease: "back.out(1.7)",
  });
});

imagediv.addEventListener("mouseenter", function (dets) {
  cursor.innerHTML = "More Text";

  gsap.to(cursor, {
    backgroundColor: "#ffffff8a",
    scale: 3,
  });
});

imagediv.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    backgroundColor: "white",
    scale: 1,
  });
});
