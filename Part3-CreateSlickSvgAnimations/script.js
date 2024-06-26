var path= "M 10 150 Q 400 150 790 150";
var finalPath = "M 10 150 Q 400 150 790 150";

var string = document.querySelector("#string");


string.addEventListener("mousemove", function (dets) {
  (path = `M 10 150 Q ${dets.x} ${dets.y} 790 150"`),
    gsap.to("svg path", {
      attr: { d: path },
      duration:0.4,
      ease: "power3.out",
    });
});



string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 2.5,
    ease: "elastic.out(1,0.1)",
  });
});
