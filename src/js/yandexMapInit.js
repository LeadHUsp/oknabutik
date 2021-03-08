document.addEventListener('DOMContentLoaded', () => {
  // Получаем нужный элемент
  const mapEl = document.querySelector('#map');
  if (mapEl !== null) {
    function listenerScroll() {
      Visible(mapEl);
    }
    // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
    function loadScript(url, callback) {
      var script = document.createElement('script');

      if (script.readyState) {
        // IE
        script.onreadystatechange = function () {
          if (script.readyState == 'loaded' || script.readyState == 'complete') {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        // Другие браузеры
        script.onload = function () {
          callback();
        };
      }

      script.src = url;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
    let Visible = function (target) {
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
        // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        loadScript(
          'https://api-maps.yandex.ru/2.1/?apikey=98211b84-7f08-45d8-abec-5f3f4575258b&lang=ru_RU',
          () => {
            ymaps.ready(init);
            function init() {
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
            }
          }
        );
        window.removeEventListener('scroll', listenerScroll);
      }
    };

    // Запускаем функцию при прокрутке страницы
    window.addEventListener('scroll', listenerScroll);
    // А также запустим функцию сразу. А то вдруг, элемент изначально видно
    /* Visible(mapEl); */
  }
});
