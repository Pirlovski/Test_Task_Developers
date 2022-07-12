(() => {
  const infoBtnRef = document.querySelector("[data-info-button]");
  const mobileMenuRef = document.querySelector("[data-info]");
  const btn = document.querySelector("[data-button-closed]");

  infoBtnRef.addEventListener("click", () => {
    const expanded =
      infoBtnRef.getAttribute("aria-expanded") === "true" || false;
    infoBtnRef.classList.toggle("is-open");
    infoBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true" || false;
    btn.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();
