gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const contentHolderHeight =
    document.querySelector(".content-holder").offsetHeight;
  const imgHolderHeight = window.innerHeight;
  const additionalScrollHeight = window.innerHeight;
  const totalBodyHeight =
    contentHolderHeight + imgHolderHeight + additionalScrollHeight;
  document.body.style.height = `${totalBodyHeight}px`;
});

//Cela crée un déclencheur qui fixe la position de .website-content en fonction de la progression du défilement.

ScrollTrigger.create({
  trigger: ".website-content",
  start: "-0.1% top",
  end: "bottom bottom",
  onEnter: () => {
    gsap.set(".website-content", { position: "absolute", top: "200%" });
  },
  onLeaveBack: () => {
    gsap.set(".website-content", { position: "fixed", top: "0" });
  },
});

//Ces deux animations gèrent le mouvement et l'agrandissement des lettres lorsque l'utilisateur fait défiler la page.
gsap.to(".header .letters:first-child", {
  x: () => -innerWidth * 3,
  scale: 10,
  ease: "power2.inOut",
  scrollTrigger: {
    start: "top top",
    end: `+=200%`,
    scrub: 1,
  },
});

gsap.to(".header .letters:last-child", {
  x: () => innerWidth * 3,
  scale: 10,
  ease: "power2.inOut",
  scrollTrigger: {
    start: "top top",
    end: `+=200%`,
    scrub: 1,
  },
});
gsap.to(".img-holder ", {
  rotation: 0,
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power2.inout",
  scrollTrigger: {
    start: "top top",
    end: `+=200%`,
    scrub: 1,
  },
});
gsap.to(".img-holder img", {
  scale: 1,
  ease: "power2.inout",
  scrollTrigger: {
    start: "top top",
    end: `+=200%`,
    scrub: 1,
  },
});

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";
});

var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    crsr.style.width = "470px";
    crsr.style.height = "370px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});
