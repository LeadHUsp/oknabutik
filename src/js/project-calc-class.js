export class ProjectCalc {
  constructor() {
    this.view = document.querySelectorAll('.project-calc__view img');
    this.controlTypeOfGlasses = document.querySelectorAll('*[data-atr-group="inside"]');
    this.options = {
      typeOfGlasses: null,
      typeOfLight: null,
      typeOfWarming: null,
      typeOfSiding: null,
      typeOfFurniture: null,
      typeOfWalls: null,
      typeOfFloor: null,
      warmFloor: null,
    };
  }
  init() {
    this.setOptions();
    console.log(this.controlTypeOfGlasses);
  }
  setView(item, imgEl) {
    let dataSrc = item.getAttribute('data-src');
    imgEl.setAttribute('src', dataSrc);
  }
  setOptions(newOption) {
    this.options = Object.assign(this.options, newOption);
  }
}
