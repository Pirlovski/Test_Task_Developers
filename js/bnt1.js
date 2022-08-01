(() => {
  const infoBtnRef = document.querySelector("[ data-info-button]");
  const mobileMenuRef = document.querySelector(".info-item");
  const cirkle = document.querySelector(".cirkle");
  const svg1 = document.querySelector("[data-button1]");
  infoBtnRef.addEventListener("click", () => {
    const expanded =
      infoBtnRef.getAttribute("aria-expanded") === "true" || false;

    mobileMenuRef.classList.toggle("hidden");
    infoBtnRef.classList.toggle("indexSecondary");
    cirkle.classList.toggle("blue");
    infoBtnRef.classList.toggle("is-open");
    svg1.classList.toggle("rotate");
    infoBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    console.log("Click");
    console.log(mobileMenuRef);
    console.log(cirkle);
    console.log(infoBtnRef);
  });
})();
