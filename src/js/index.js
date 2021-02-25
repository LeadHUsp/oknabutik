$(document).ready(function ($) {
  $('.stellarnav').stellarNav({
    breakpoint: 1280,
  });
  $("input[type='tel']").inputmask('+9(999)-999-99-99');
  //tabs
  let tab = (
    controlSelector,
    contentSelector,
    controlActiveClass,
    contentActiveClass
  ) => {
    const tabControl = document.querySelectorAll(controlSelector);
    const tabContent = document.querySelectorAll(contentSelector);
    let tabName;
    tabControl.forEach((item) => {
      item.addEventListener('click', selectNavTab);
    });

    function selectNavTab() {
      tabControl.forEach((tab) => {
        tab.classList.remove(controlActiveClass);
      });
      this.classList.add(controlActiveClass);
      tabName = this.getAttribute('data-tab');
      selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
      tabContent.forEach((item) => {
        item.getAttribute('data-tab-content') == tabName
          ? item.classList.add(contentActiveClass)
          : item.classList.remove(contentActiveClass);
      });
    }
  };
  tab(
    '.tabs-nav__elem',
    '.tabs-content__item',
    'tabs-nav__elem-active',
    'tabs-content__item-active'
  );
  /*  tab(
    '#profile-tabs .tab-control__btn',
    '#profile-tabs .profile-tab',
    'tab-control__btn-active-secondary',
    'profile-tab-active'
  ); */
});
