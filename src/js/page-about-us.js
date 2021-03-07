document.addEventListener('DOMContentLoaded', () => {
  $('.about-us-reviews__wrapper').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#about-us-reviews-prev'),
    nextArrow: $('#about-us-reviews-next'),
  });
});
