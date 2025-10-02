var path = `M 50 100 Q 600 0 1100 100`;
var finalpath = `M 50 100 Q 600 100 1100 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 50 100 Q ${dets.x} ${dets.y} 1100 100`;
  gsap.to("#string path", {
    attr: {
      d: path,
    },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function (dets) {
  gsap.to("#string path", {
    attr: {
      d: finalpath,
    },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});
