//smooth scroll functionality
let parent = document.querySelector(".nav");
let children = document.querySelectorAll(".link");

children.forEach(function (li) {
  li.addEventListener("click", function (e) {
    e.preventDefault();
    let eacHref = this.getAttribute("href");
    // console.log(eacHref);
    document.querySelector(eacHref).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//bottom line functionality
parent.addEventListener("click", function (e) {
  targeted = e.target;
  children.forEach(function (el) {
    if (el == targeted) {
      el.classList.add("bottom");
    } else {
      el.classList.remove("bottom");
    }
  });
});

//opacity for navbar functionality
let handler = function (e, opacity1, opacity2) {
  let targeted = e.target;
  children.forEach(function (child) {
    if (child !== targeted) {
      child.style.opacity = opacity1;
    } else {
      child.style.opacity = opacity2;
    }
  });
};

parent.addEventListener("mouseover", function (e) {
  handler(e, 0.3, 1);
});
parent.addEventListener("mouseout", function (e) {
  handler(e, 1, 1);
});

//layer animation functionality
let linkx = document.querySelectorAll(".linkx");
let hover = document.querySelectorAll(".student");
let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let layer4 = document.getElementById("layer4");
let layer5 = document.getElementById("layer5");
let layer6 = document.getElementById("layer6");
console.log(linkx);
console.log(hover);

function layerx(layer, hovering) {
  layer.style.display = "block";
  hovering.classList.add("studenthover");
}

linkx[0].addEventListener("mouseover", function () {
  layerx(layer1, hover[0]);
});

linkx[1].addEventListener("mouseover", function () {
  layerx(layer2, hover[1]);
});

linkx[2].addEventListener("mouseover", function () {
  layerx(layer3, hover[2]);
});

linkx[3].addEventListener("mouseover", function () {
  layerx(layer4, hover[3]);
});

linkx[4].addEventListener("mouseover", function () {
  layerx(layer5, hover[4]);
});

linkx[5].addEventListener("mouseover", function () {
  layerx(layer6, hover[5]);
});

function hoverOff(layer, hovering) {
  layer.style.display = "none";
  hovering.classList.remove("studenthover");
}

linkx[0].addEventListener("mouseout", function () {
  hoverOff(layer1, hover[0]);
});

linkx[1].addEventListener("mouseout", function () {
  hoverOff(layer2, hover[1]);
});

linkx[2].addEventListener("mouseout", function () {
  hoverOff(layer3, hover[2]);
});

linkx[3].addEventListener("mouseout", function () {
  hoverOff(layer4, hover[3]);
});

linkx[4].addEventListener("mouseout", function () {
  hoverOff(layer5, hover[4]);
});

linkx[5].addEventListener("mouseout", function () {
  hoverOff(layer6, hover[5]);
});

//text reveal onscroll functionality
let aboutSection = document.querySelector(".about-section");
let aboutChildren = document.querySelectorAll(".about-child");
let testimonialSection = document.querySelector(".testimonial");
let testiomonialChildren = document.querySelectorAll(".testi-child");
console.log(testimonialSection);
console.log(testiomonialChildren);

function revealText(parent, pikins) {
  const sectionTop = parent.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight * 0.3) {
    pikins.forEach((child) => {
      child.classList.add("reveal");
    });
  }
}

window.addEventListener("scroll", function () {
  revealText(aboutSection, aboutChildren);
});

window.addEventListener("scroll", function () {
  revealText(testimonialSection, testiomonialChildren);
});
