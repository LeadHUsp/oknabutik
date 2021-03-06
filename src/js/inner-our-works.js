document.addEventListener("DOMContentLoaded", () => {
  $(".inner-our-works__slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".inner-our-works__btn-prev"),
    nextArrow: $(".inner-our-works__btn-next"),
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
});
