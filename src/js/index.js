import "./color-solutions";
import { quizeInit } from "./quize";

document.addEventListener("DOMContentLoaded", () => {
  $(".stellarnav").stellarNav({
    breakpoint: 1280,
    menuLabel: "",
    closeBtn: true,
    closeLabel: "",
    position: "right",
  });
  $("input[type='tel']").inputmask("+7(999)-999-99-99");
  //tabs
  let tab = (
    controlSelector,
    contentSelector,
    controlActiveClass,
    contentActiveClass,
    parent
  ) => {
    const tabControl = document.querySelectorAll(controlSelector);
    const tabContent = document.querySelectorAll(contentSelector);
    let tabName;
    tabControl.forEach((item) => {
      item.addEventListener("click", selectNavTab);
    });

    function selectNavTab() {
      tabControl.forEach((tab) => {
        tab.classList.remove(controlActiveClass);
      });
      this.classList.add(controlActiveClass);
      tabName = this.getAttribute("data-tab");
      selectTabContent(tabName, parent);
    }
    function selectTabContent(tabName, parentParam) {
      if (parentParam) {
        tabContent.forEach((item) => {
          if (item.getAttribute("data-tab-content") == tabName) {
            item.classList.add(contentActiveClass);
            let childTabNavEl = item.querySelectorAll(".child-tabs__btn");
            let childTabContent = item.querySelectorAll(".child-tabs__item");
            childTabNavEl.forEach((childNav) => {
              childNav.classList.remove("child-tabs__btn-active");
            });
            childTabNavEl[0].classList.add("child-tabs__btn-active");
            childTabContent.forEach((child) => {
              child.classList.remove("child-tabs__item-active");
            });
            childTabContent[0].classList.add("child-tabs__item-active");
          } else {
            item.classList.remove(contentActiveClass);
          }
        });
      } else {
        tabContent.forEach((item) => {
          item.getAttribute("data-tab-content") == tabName
            ? item.classList.add(contentActiveClass)
            : item.classList.remove(contentActiveClass);
        });
      }
    }
  };
  tab(
    ".tabs-nav__elem",
    ".tabs-content__item",
    "tabs-nav__elem-active",
    "tabs-content__item-active",
    true
  );
  tab(
    ".child-tabs__btn",
    ".child-tabs__item",
    "child-tabs__btn-active",
    "child-tabs__item-active",
    false
  );

  $(".furniture-slider__wrapper").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".slider__btn-prev"),
    nextArrow: $(".slider__btn-next"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
  //quize init
  quizeInit();
  //advantages tabs
  tab(
    "#advantages-tabs .advantages-tabs__link",
    "#advantages-tabs .advantages-tabs__item",
    "advantages-tabs__link-active",
    "advantages-tabs__item-active",
    false
  );
  //reviews slider
  $(".gallery-parent").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: false,
    prevArrow: $("#reviews-prev"),
    nextArrow: $("#reviews-next"),
    asNavFor: ".gallery-child, .reviews__text",
  });
  $(".gallery-child").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    infinite: false,
    asNavFor: ".gallery-parent, .reviews__text",
  });
  $(".reviews__text").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    infinite: false,
    asNavFor: ".gallery-parent, .gallery-child",
  });
  //Наше производство
  $(".creation__gallery").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
    appendDots: $(".creation__dots"),
    prevArrow: $("#creation-prev"),
    nextArrow: $("#creation-next"),
  });
  //Сертефикаты
  $(".certeficate__gallery").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    prevArrow: $("#certeficate-prev"),
    nextArrow: $("#certeficate-next"),
  });
  $(".certeficate__slide").fancybox({
    buttons: ["zoom", "close"],
    /* thumbs: {
      autoStart: true,
    }, */
  });
  //Вопросы
  tab(
    "#questions-tabs .advantages-tabs__link",
    "#questions-tabs .advantages-tabs__item",
    "advantages-tabs__link-active",
    "advantages-tabs__item-active",
    false
  );
});
