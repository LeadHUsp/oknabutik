import { tab } from "./tab";

$(document).ready(function () {
  const glassTypeEl = document.querySelectorAll(
    ".glass-type .tabs-content__item"
  );
  if (glassTypeEl.length > 0) {
    tab(
      ".glass-type .tabs-nav__elem",
      ".glass-type .tabs-content__item",
      "tabs-nav__elem-active",
      "tabs-content__item-active",
      false,
      ".child-tabs__cards"
    );
    glassTypeEl.forEach((item) => {
      let tabId = item.getAttribute("id");
      $(`#${tabId} .child-tabs__cards`).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $(`#${tabId} .glass-type__slider  .slider__btn-prev`),
        nextArrow: $(`#${tabId} .glass-type__slider  .slider__btn-next`),
        responsive: [
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 430,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  }
});
