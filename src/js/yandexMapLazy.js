export class YandexMapLazy {
  constructor(options) {
    let defaultOptions = {
      mapContainerEl: document.querySelector('#map'),
      yandexMapUrl:
        'https://api-maps.yandex.ru/2.1/?apikey=98211b84-7f08-45d8-abec-5f3f4575258b&lang=ru_RU',
      yandexMapInitOptions: () => {
        var myMap = new ymaps.Map('map', {
          center: [59.943971, 30.447954],
          zoom: 17,
        });
        myMap.geoObjects.add(
          new ymaps.Placemark([59.944003, 30.449187], {
            preset: 'islands#icon',
            iconColor: '#0095b6',
          })
        );
      },
    };
    this.options = Object.assign(defaultOptions, options);
    this.addEventListenerOnWindowScroll = this.addEventListenerOnWindowScroll.bind(this);
    this.loadMapScript = this.loadMapScript.bind(this);
  }
  init() {
    if (this.options.mapContainerEl !== null) {
      window.addEventListener('scroll', this.addEventListenerOnWindowScroll);
    }
  }
  loadMapScript() {
    const script = document.createElement('script');
    let self = this;
    if (script.readyState) {
      // IE
      script.onreadystatechange = function () {
        if (script.readyState == 'loaded' || script.readyState == 'complete') {
          script.onreadystatechange = null;
          ymaps.ready(self.options.yandexMapInitOptions);
        }
      };
    } else {
      // Другие браузеры
      script.onload = function () {
        ymaps.ready(self.options.yandexMapInitOptions);
      };
    }
    script.src = this.options.yandexMapUrl;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  addEventListenerOnWindowScroll() {
    let target = this.options.mapContainerEl;

    // Все позиции элемента
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
      },
      // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };

    if (
      targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right
    ) {
      this.loadMapScript();
      window.removeEventListener('scroll', this.addEventListenerOnWindowScroll);
    }
  }
}
