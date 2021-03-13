import { tab } from './tab';

document.addEventListener('DOMContentLoaded', () => {
  //control
  const typeOfGlassNavEl = document.querySelectorAll('.project-calc__label-type-glass');
  const typeOfLightNavEl = document.querySelectorAll('#typeof-lighting button');
  const typeOfWarmingNavEl = document.querySelectorAll('#typeof-warming button');
  const typeOfSidingNavEl = document.querySelectorAll('#typeof-siding-control button');
  const typeOfFurnitureNavEl = document.querySelectorAll('#typeof-furniture button');
  const typeOfWalssNavEl = document.querySelectorAll('#typeof-walls-control button');
  const typeOfFloorNavEl = document.querySelectorAll('#typeof-floor-control button');
  const typeOfWarmFloor = document.querySelectorAll('*[data-group="typeof-warm-floor"]');
  const typeOfSidingBlockEl = document.getElementById('typeof-siding-control');
  //view
  const imgInsideEl = document.getElementById('project-calc__inside-img');
  const imgLightEl = document.getElementById('project-calc__light-img');
  const imgWarmingEl = document.getElementById('project-calc__warming-img');
  const imgSidingEl = document.getElementById('project-calc__siding-img');
  const imgFurnitureEl = document.getElementById('project-calc__shkaf-img');
  const imgWalssEl = document.getElementById('project-calc__walls-img');
  const imgFloorEl = document.getElementById('project-calc__floor-img');
  const imgWarmFloor = document.getElementById('project-calc__floor-warm-img');
  //output
  const typeofGlassOutpPut = document.getElementById('typeof-glass-output');
  const typeofLightOutPut = document.getElementById('typeof-light-output');
  const typeofWarmingOutPut = document.getElementById('typeof-warming-output');
  const typeofFurnitureOutPut = document.getElementById('typeof-furniture-output');
  const typeofSidingTypeOutPut = document.getElementById('typeof-siding-type-output');
  const typeofSidingColorOutPut = document.getElementById('typeof-siding-color-output');
  const typeofWarmFloorOutPut = document.getElementById('typeof-warm-floor-output');
  const typeofWallsTypeOutPut = document.getElementById('typeof-walls-type-output');
  const typeofWallsColorOutPut = document.getElementById('typeof-walls-color-output');
  const typeofFloorTypeOutPut = document.getElementById('typeof-floor-type-output');
  const typeofFloorColorOutPut = document.getElementById('typeof-floor-color-output');
  const typeOfSidingOutPutGroup = document.querySelectorAll(
    '*[data-group="typeof-siding-switch"]'
  );
  //Определяет выбран ли сейчас французский тип остекления
  let flagOfFranceGlassType = false;
  // Меняет картинку из data-src-v2, т.е. специфичную для французского остекления
  const swapDataSrcOnChange = (items, imgEl) => {
    items.forEach((item) => {
      if (
        item.classList.contains('project-calc__label-active') ||
        item.classList.contains('project-calc__round-active')
      ) {
        let dataSrc = item.getAttribute('data-src-v2');
        imgEl.setAttribute('src', dataSrc);
      }
    });
  };
  // Меняет картинку из data-src
  const reverseSwapDataSrcOnChange = (items, imgEl) => {
    items.forEach((item) => {
      if (
        item.classList.contains('project-calc__label-active') ||
        item.classList.contains('project-calc__round-active')
      ) {
        let dataSrc = item.getAttribute('data-src');
        imgEl.setAttribute('src', dataSrc);
      }
    });
  };
  // Меняет картинку
  const changeImage = (item, imgEl, src = 'data-src') => {
    let dataSrc = item.getAttribute(src);
    imgEl.setAttribute('src', dataSrc);
  };
  const setValueToOutPut = (itemEl, outputEl) => {
    let dataValue = itemEl.getAttribute('data-value');
    outputEl.value = dataValue;
  };
  const clearOutPutValue = (outPutEl) => {
    outPutEl.value = 'Не выбрано';
  };
  // Активация группы контроля
  const activateControlGroup = (
    group,
    groupId,
    imgEl,
    dependence = false,
    activeClassName,
    tabs = false,
    outputEl
  ) => {
    const btnClear = document.querySelector(`${groupId} .project-calc__btn-clear`);
    if (tabs) {
      let tabsOptions = {
        tabsControl: `${groupId} .project-calc__label`,
        tabsContent: `${groupId} .project-calc__tab-item`,
        navActive: 'project-calc__label-active',
        contentActive: 'project-calc__tab-active',
      };
      document.querySelectorAll(tabsOptions.tabsControl).forEach((item) => {
        item.addEventListener('click', () => {
          btnClear.classList.add('project-calc__btn-visible');
          setValueToOutPut(item, outputEl[0]);
        });
      });
      document.querySelectorAll(tabsOptions.tabsControl).forEach((item) => {
        item.addEventListener('click', (e) => {
          if (e.target.classList.contains(tabsOptions.navActive) === false) {
            clearOutPutValue(outputEl[1]);
          }
        });
      });
      tab(
        tabsOptions.tabsControl,
        tabsOptions.tabsContent,
        'project-calc__label-active',
        'project-calc__tab-active',
        false
      );
      clearVariantsInput(btnClear, group, imgEl, activeClassName, tabsOptions, outputEl);
    } else {
      clearVariantsInput(btnClear, group, imgEl, activeClassName, false, outputEl);
    }
    group.forEach((item) => {
      item.addEventListener('click', () => {
        tabs ? setValueToOutPut(item, outputEl[1]) : setValueToOutPut(item, outputEl);
        if (btnClear.classList.contains('project-calc__btn-visible') === false) {
          btnClear.classList.add('project-calc__btn-visible');
        }
        group.forEach((navEl) => {
          navEl.classList.remove(activeClassName);
        });
        item.classList.add(activeClassName);
        if (dependence === true) {
          if (flagOfFranceGlassType === true) {
            changeImage(item, imgEl, 'data-src-v2');
          } else {
            changeImage(item, imgEl);
          }
        } else {
          changeImage(item, imgEl);
        }
      });
    });
  };
  // Функция очистки
  const clearVariantsInput = (
    btnClear,
    controlEls,
    imgEl,
    activeClassName,
    tabs = null,
    outputEl
  ) => {
    btnClear.addEventListener('click', () => {
      if (tabs) {
        document.querySelectorAll(tabs.tabsControl).forEach((item) => {
          item.classList.remove(tabs.navActive);
          clearOutPutValue(outputEl[0]);
        });
        document.querySelectorAll(tabs.tabsContent).forEach((item) => {
          item.classList.remove(tabs.contentActive);
          clearOutPutValue(outputEl[1]);
        });
      }
      controlEls.forEach((controlEl) => {
        controlEl.classList.remove(activeClassName);
      });
      clearOutPutValue(outputEl);
      imgEl.setAttribute('src', '');
      btnClear.classList.remove('project-calc__btn-visible');
    });
  };

  if (document.querySelector('.project-calc') !== null) {
    //Управление группами
    typeOfGlassNavEl.forEach((item) => {
      item.addEventListener('click', () => {
        changeImage(item, imgInsideEl);
        setValueToOutPut(item, typeofGlassOutpPut);
        if (item.getAttribute('for') === 'radio-typeof-balcony-france') {
          imgSidingEl.style.display = 'none';
          typeOfSidingBlockEl.style.display = 'none';
          typeOfSidingOutPutGroup.forEach((item) => {
            item.classList.add('project-form__group-hidden');
          });
          flagOfFranceGlassType = true;
          swapDataSrcOnChange(typeOfWarmingNavEl, imgWarmingEl);
          swapDataSrcOnChange(typeOfFurnitureNavEl, imgFurnitureEl);
          swapDataSrcOnChange(typeOfWalssNavEl, imgWalssEl);
          swapDataSrcOnChange(typeOfFloorNavEl, imgFloorEl);
        } else {
          imgSidingEl.style.display = 'block';
          typeOfSidingBlockEl.style.display = 'block';
          typeOfSidingOutPutGroup.forEach((item) => {
            item.classList.remove('project-form__group-hidden');
          });
          flagOfFranceGlassType = false;
          reverseSwapDataSrcOnChange(typeOfWarmingNavEl, imgWarmingEl);
          reverseSwapDataSrcOnChange(typeOfFurnitureNavEl, imgFurnitureEl);
          reverseSwapDataSrcOnChange(typeOfWalssNavEl, imgWalssEl);
          reverseSwapDataSrcOnChange(typeOfFloorNavEl, imgFloorEl);
        }
      });
    });
    // активация группы освещение
    activateControlGroup(
      typeOfLightNavEl,
      '#typeof-lighting',
      imgLightEl,
      false,
      'project-calc__label-active',
      false,
      typeofLightOutPut
    );
    // активация группы утепление
    activateControlGroup(
      typeOfWarmingNavEl,
      '#typeof-warming',
      imgWarmingEl,
      true,
      'project-calc__label-active',
      false,
      typeofWarmingOutPut
    );
    // активация группы мебель
    activateControlGroup(
      typeOfFurnitureNavEl,
      '#typeof-furniture',
      imgFurnitureEl,
      true,
      'project-calc__label-active',
      false,
      typeofFurnitureOutPut
    );
    // активация группы обшивка
    activateControlGroup(
      typeOfSidingNavEl,
      '#typeof-siding-control',
      imgSidingEl,
      false,
      'project-calc__round-active',
      true,
      [typeofSidingTypeOutPut, typeofSidingColorOutPut]
    );
    // активация группы отделка стен
    activateControlGroup(
      typeOfWalssNavEl,
      '#typeof-walls-control',
      imgWalssEl,
      true,
      'project-calc__round-active',
      true,
      [typeofWallsTypeOutPut, typeofWallsColorOutPut]
    );
    // активация группы отделка пола
    activateControlGroup(
      typeOfFloorNavEl,
      '#typeof-floor-control',
      imgFloorEl,
      true,
      'project-calc__round-active',
      true,
      [typeofFloorTypeOutPut, typeofFloorColorOutPut]
    );
    // Опция теплый пол
    typeOfWarmFloor.forEach((item) => {
      item.addEventListener('click', () => {
        if (item.getAttribute('for') === 'radio-typeof-floor-no') {
          imgWarmFloor.style.display = 'none';
          typeofWarmFloorOutPut.value = 'Нет';
        } else {
          imgWarmFloor.style.display = 'block';
          typeofWarmFloorOutPut.value = 'Да';
        }
      });
    });
    const checkOutBtn = document.querySelector('.project-calc__btn');
    const checkOutForm = document.querySelector('.project-calc__form');
    const goBackBtn = document.querySelector('.project-form__back');
    checkOutBtn.addEventListener('click', () => {
      checkOutForm.classList.add('project-calc__form-show');
    });
    goBackBtn.addEventListener('click', (e) => {
      e.preventDefault();
      checkOutForm.classList.remove('project-calc__form-show');
    });
  }
});
