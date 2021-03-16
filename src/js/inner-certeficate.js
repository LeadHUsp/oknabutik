document.addEventListener("DOMContentLoaded", () => {
  //Сертефикаты
  $(".inner-certeficate__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow: $(".inner-certeficate__btn-prev"),
    nextArrow: $(".inner-certeficate__btn-next"),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".inner-certeficate__slide").fancybox({
    buttons: ["zoom", "close"],
    /* thumbs: {
      autoStart: true,
    }, */
  });
});
