const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine1 = document.querySelector(".slider-line");
let count = 0;
let width;
let marg = 25;
function init() {
  widthDiv = document.querySelector(".development-secondary-item").offsetWidth;
  width = widthDiv + marg;
  sliderLine1.style.width = width * images.length + "px";

  console.log(width);
  console.log("resize");
  rollSlider();
}
window.addEventListener("resize", init);
init();

document.querySelector(".slider-next").addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  console.log("Click Rignth");

  rollSlider();
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  console.log("Click Left");
  rollSlider();
});

function rollSlider() {
  sliderLine1.style.transform = "translate(-" + count * width + "px )";
}
