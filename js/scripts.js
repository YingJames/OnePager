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

function onHover(element) {
  let inactiveDot = document.querySelectorAll(element);
  for (let i = 0; i < inactiveDot.length; i++) {
    let dotObject = inactiveDot[i];
    dotObject.onmouseover = function () {
      gsap.to(dotObject, {
        ease: "elastic.out",
        scale: 1.3,
      });
    };
    dotObject.onmouseout = function () {
      gsap.to(dotObject, {
        ease: "elastic.out",
        scale: 1.0,
      });
    };
  }
}
onHover(".nav--arrows");
onHover(".nav--circle--inactive");
