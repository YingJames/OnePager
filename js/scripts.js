gsap.registerPlugin(ScrollTrigger);

function animateHero(width) {
  gsap.fromTo(
    ".bg",
    {
      width: "100%",
      borderRadius: "0%",
    },
    {
      duration: 2,
      ease: "power1.inOut",
      borderRadius: "5%",
      width: width,
    }
  );
}

window.onload = function animateReload() {
  ScrollTrigger.matchMedia({
    "(max-width: 768px)": function () {
      animateHero("80%");
    },

    "(min-width: 769px)": function () {
      animateHero("70%");
    },
  });
};

function onArrowHover(element) {
  let navObject = document.getElementById(element);
  navObject.onmouseover = function () 
  {mouseOver(navObject)};
  navObject.onmouseout = function () 
  {mouseOut(navObject)};
}
function mouseOver(navObject) {
  gsap.to(navObject, {
    ease: "elastic.out",
    scale: 1.5,
  })
}
function mouseOut(navObject) {
  gsap.to(navObject, {
    ease: "elastic.out",
    scale: 1.0,
  })
}

function onDotHover() {
  let inactiveDot = document.querySelectorAll(".nav--circle--inactive");

}
onArrowHover("nav--arrows--previous");
onArrowHover("nav--arrows--next");