export const quizeInit = () => {
  //init slick slider
  $('.quize-form__steps').slick({
    infinite: false,
    swipe: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  const radioInputsEl = document.querySelectorAll('.quize-form__input');
  const slides = document.querySelectorAll('.quize-form__step');
  const dotsWrapperEl = document.querySelector('.quize-form__dots');
  const stepCountEl = document.querySelector('#quize-form-count');
  stepCountEl.textContent = slides.length;
  //render dots
  for (let i = 0; i < slides.length; i++) {
    dotsWrapperEl.insertAdjacentHTML(
      'beforeend',
      `<div class="quize-form__dot" data-tab-index=${i}></div>`
    );
  }
  const dotsEl = document.querySelectorAll('.quize-form__dot');
  /*  radioInputsEl.forEach((input) => {
    input.addEventListener('click', () => {
        
    });
  }); */
};
