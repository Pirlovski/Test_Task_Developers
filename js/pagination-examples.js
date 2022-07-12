let offsetExamples = 339; //смещение от левого края
const sliderLineExamples = document.querySelector(".slider-examples-line");
const examplesNext = document.querySelector(".slider-examples-next");

examplesNext.addEventListener("click", function () {
  sliderLineExamples.style.left = -offsetExamples + "px";
  offsetExamples = offsetExamples + 339;
  console.log("Click");
  if (offsetExamples > 339) {
    offsetExamples = 0;
  }
});
const examplesPrev = document.querySelector(".slider-examples-prev");

examplesPrev.addEventListener("click", function () {
  offsetExamples = offsetExamples - 339;
  console.log("Click");
  if (offsetExamples < 0) {
    offsetExamples = 339;
  }
  sliderLineExamples.style.left = -offsetExamples + "px";
});
