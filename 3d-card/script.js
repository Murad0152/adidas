const block = document.querySelector(".container");
const card = document.querySelector(".card");

const img = document.querySelector(".image-box img");
const mmg = document.querySelector(".image-box .gmg");
const jgg = document.querySelector(".image-box .jgg");
const ggj = document.querySelector(".image-box .ggj");
const circle = document.querySelector(".image-box .circle");
const title = document.querySelector("h3");
const text = document.querySelector("p");
const btns = document.querySelector(".btn-box");
const link = document.querySelector("a");

const image = document.querySelectorAll(".container .image-box img");
const dots = document.querySelectorAll(".container .btn-box .dot");
// const colorb = document.querySelectorAll(".btn-box .dot");

let index = 0;

card.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const x = windowWidth / 2 - mouseX;
  const y = windowHeight / 2 - mouseY;

  card.style.transform = `rotateX(${y / 50}deg) rotateY(${x / 50}deg)`;
  card.style.transition = "0s";

  img.style.transform = `translateZ(70px) rotate(45deg)`;
  mmg.style.transform = `translateZ(70px) rotate(45deg)`;
  jgg.style.transform = `translateZ(70px) rotate(45deg)`;
  ggj.style.transform = `translateZ(70px) rotate(45deg)`;
  circle.style.transform = `scale(0.8)`;
  // title.style.transform = "translateZ(60px)";
  text.style.transform = "translateZ(30px)";
  btns.style.transform = "translateZ(40px)";
  link.style.transform = "translateZ(50px)";
});

card.addEventListener("mouseleave", () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  img.style.transform = `translateZ(0px) rotate(0deg)`;
  mmg.style.transform = `translateZ(00px) rotate(0deg)`;
  jgg.style.transform = `translateZ(00px) rotate(0deg)`;
  ggj.style.transform = `translateZ(00px) rotate(0deg)`;

  card.style.transition = "0.5s";
  circle.style.transform = `scale(1)`;
  // title.style.transform = "translateZ(0px)";
  text.style.transform = "translateZ(0px)";
  btns.style.transform = "translateZ(0px)";
  link.style.transform = "translateZ(0px)";
});

dots.forEach(function (dot, idx) {
  dot.addEventListener("click", function () {
    dots[index].classList.remove("active");
    image[index].classList.remove("active");

    index = idx;

    image[index].classList.add("active");
    dots[index].classList.add("active");

    dot.addEventListener("mouseout", function () {
      circle.style.background = "black";
    });
    dot.addEventListener("mouseover", function () {
      circle.style.background = "#fa3535d2";
    });
    circle.style.background = "#fa3535d2";
  });
});

// dots.addEventListener("click", function () {
//   circle.stye.background = "black";
// });
