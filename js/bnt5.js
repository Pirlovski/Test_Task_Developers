(() => {
  const infoBtnRef5 = document.querySelector("[data-info-button5]");
  const mobileMenuRef5 = document.querySelector(".info-item5");
  const cirkle5 = document.querySelector(".cirkle5");
  const svg5 = document.querySelector("[data-button5]");

  infoBtnRef5.addEventListener("click", () => {
    const expanded =
      infoBtnRef5.getAttribute("aria-expanded") === "true" || false;

    mobileMenuRef5.classList.toggle("hidden");
    infoBtnRef5.classList.toggle("indexSecondary");
    cirkle5.classList.toggle("blue");
    infoBtnRef5.classList.toggle("is-open");
    svg5.classList.toggle("rotate");
    infoBtnRef5.setAttribute("aria-expanded", !expanded);

    mobileMenuRef5.classList.toggle("is-open");
    console.log("Click");
    console.log(mobileMenuRef5);
    console.log(cirkle5);
    console.log(infoBtnRef5);
  });
})();
