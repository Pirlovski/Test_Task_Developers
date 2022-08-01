(() => {
  const infoBtnRef3 = document.querySelector("[data-info-button3]");
  const mobileMenuRef3 = document.querySelector(".info-item3");
  const cirkle3 = document.querySelector(".cirkle3");
  const svg3 = document.querySelector("[data-button3]");

  infoBtnRef3.addEventListener("click", () => {
    const expanded =
      infoBtnRef3.getAttribute("aria-expanded") === "true" || false;

    mobileMenuRef3.classList.toggle("hidden");
    infoBtnRef3.classList.toggle("indexSecondary");
    cirkle3.classList.toggle("blue");
    infoBtnRef3.classList.toggle("is-open");
    svg3.classList.toggle("rotate");
    infoBtnRef3.setAttribute("aria-expanded", !expanded);

    mobileMenuRef3.classList.toggle("is-open");
    console.log("Click3");
    console.log(mobileMenuRef3);
    console.log(cirkle3);
    console.log(infoBtnRef3);
  });
})();
