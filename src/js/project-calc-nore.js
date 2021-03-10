state = {
  groups: [
    {
      control: [nodelist],
      view: imgElem,
    },
  ],
};
let groupLight = {
  constrol: [nodelist],
  view: imgElem,
};
let groupWarming = {
  controls: [nodelist],
  view: imgElem,
};

/* 
1. Добавить активный класс, и снять активный класс у других элементов этой группы
2. из data-src подставить в src view из этой группы
3. при изменениии флага менять значения зависимых от флага групп 
4. сгруппировать view-control через data-group in html
Проблемы:
При том опция сайдинг скрывается вообще,
при выборе v3 зависимые опции должны переключаться на data-src-v2, 
сможет искать выбранный элемент по активному классу 
*/
