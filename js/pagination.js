let offset = 0; //смещение от левого края
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset = offset + 339;
  if (offset > 1356) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});
document.querySelector(".slider-prev").addEventListener("click", function () {
  offset = offset - 339;
  if (offset < 0) {
    offset = 1356;
  }
  sliderLine.style.left = -offset + "px";
});
