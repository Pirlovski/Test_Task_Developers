(() => {
  const infoBtnRefd4 = document.querySelector("[data-info-button4]");
  const mobileMenuRefd4 = document.querySelector(".info-item4");
  const cirkled4 = document.querySelector(".cirkle4");
  const svg4 = document.querySelector("[data-button4]");

  infoBtnRefd4.addEventListener("click", () => {
    const expanded =
      infoBtnRefd4.getAttribute("aria-expanded") === "true" || false;

    mobileMenuRefd4.classList.toggle("hidden");
    infoBtnRefd4.classList.toggle("indexSecondary");
    cirkled4.classList.toggle("blue");
    infoBtnRefd4.classList.toggle("is-open");
    svg4.classList.toggle("rotate");
    infoBtnRefd4.setAttribute("aria-expanded", !expanded);

    mobileMenuRefd4.classList.toggle("is-open");
    console.log("Click");
    console.log(mobileMenuRefd4);
    console.log(cirkled4);
    console.log(infoBtnRefd4);
  });
})();
