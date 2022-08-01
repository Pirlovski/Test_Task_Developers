(() => {
  const infoBtnRef2 = document.querySelector("[data-info-button2]");
  const mobileMenuRef2 = document.querySelector(".info-item2");
  const cirkle2 = document.querySelector(".cirkle2");
  const svg2 = document.querySelector("[data-button2]");

  infoBtnRef2.addEventListener("click", () => {
    const expanded =
      infoBtnRef2.getAttribute("aria-expanded") === "true" || false;

    mobileMenuRef2.classList.toggle("hidden");
    infoBtnRef2.classList.toggle("indexSecondary");
    cirkle2.classList.toggle("blue");
    infoBtnRef2.classList.toggle("is-open");
    svg2.classList.toggle("rotate");

    infoBtnRef2.setAttribute("aria-expanded", !expanded);

    mobileMenuRef2.classList.toggle("is-open");
    console.log("Click");
    console.log(mobileMenuRef2);
    console.log(cirkle2);
    console.log(infoBtnRef2);
  });
})();
