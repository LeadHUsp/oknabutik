document.addEventListener("DOMContentLoaded", () => {
  const typeOfGlassNavEl = document.querySelectorAll(
    ".project-calc__label-type-glass"
  );
  const typeOfLightNavEl = document.querySelectorAll(
    '*[data-group="typeof-light"]'
  );
  const imgInsideEl = document.getElementById("project-calc__inside-img");
  const imgLightEl = document.getElementById("project-calc__light-img");

  typeOfGlassNavEl.forEach((item) => {
    item.addEventListener("click", () => {
      let dataSrc = item.getAttribute("data-src");
      imgInsideEl.setAttribute("src", dataSrc);
    });
  });
  typeOfLightNavEl.forEach((item) => {
    item.addEventListener("click", () => {
      let dataSrc = item.getAttribute("data-src");
      imgLightEl.setAttribute("src", dataSrc);
    });
  });
});
