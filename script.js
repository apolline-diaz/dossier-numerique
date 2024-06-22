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

  // Bouton Portfolio
  document.addEventListener("DOMContentLoaded", function () {
    const pdfButton = document.getElementById("pdf-button");
    pdfButton.addEventListener("click", function () {
      window.open("assets/Experience_Cinema_Multimedia.pdf", "_blank");
    });
  });

  // Archive de séance
  document.addEventListener("DOMContentLoaded", function () {
    const archiveScreening = document.getElementById("archive-screening");
    archiveScreening.addEventListener("click", function () {
      window.open(
        "https://laclefrevival.org/project/jennifers-body-carte-blanche-a-la-clef-revival/",
        "_blank"
      );
    });
  });

  // Récupération des données de projets
  let projectData = {};

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      projectData = data.projects;
    })
    .catch((error) => console.error("Error loading JSON data:", error));

  // Récupérer les éléments nécessaires
  const boxes = document.querySelectorAll(".box");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popup-close");
  const popupContent = document.getElementById("popup-content");
  const popupTitle = document.getElementById("popup-title");
  const popupTech = document.getElementById("popup-tech");
  const popupDescription = document.getElementById("popup-description");

  // Écouter les clics sur chaque boîte
  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      const projectId = box.getAttribute("data-id");
      const project = projectData[projectId];

      popupContent.src = project.image;
      popupTitle.textContent = project.title;
      popupTech.textContent = project.tech;
      popupDescription.textContent = project.description;

      // Afficher le popup lorsque la boîte est cliquée
      popup.style.display = "block";
    });
  });

  // Écouter les clics pour fermer le popup
  popupClose.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Fermer le popup si l'utilisateur clique en dehors de celui-ci
  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
