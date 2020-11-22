gsap.registerPlugin(ScrollTrigger);

function animateHero(width){
  gsap.fromTo(".bg", {
    width: "100%",
    borderRadius: "0%",
  },
  {
    duration: 2,
    ease: "power1.inOut",
    borderRadius: "5%",
    width: width
  });
}

window.onload = function animateReload() {
  ScrollTrigger.matchMedia({
    "(max-width: 768px)": function() {
      animateHero("80%");
    },

    "(min-width: 769px)": function() {
      animateHero("70%");
    }
  });
}