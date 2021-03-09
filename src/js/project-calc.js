import { tab } from './tab';

document.addEventListener('DOMContentLoaded', () => {
  const typeOfGlassNavEl = document.querySelectorAll('.project-calc__label-type-glass');
  const typeOfLightNavEl = document.querySelectorAll('*[data-group="typeof-light"]');
  const typeOfWarmingNavEl = document.querySelectorAll('*[data-group="typeof-warming"]');
  const imgInsideEl = document.getElementById('project-calc__inside-img');
  const imgLightEl = document.getElementById('project-calc__light-img');
  const imgWarmingEl = document.getElementById('project-calc__warming-img');
  typeOfGlassNavEl.forEach((item) => {
    item.addEventListener('click', () => {
      let dataSrc = item.getAttribute('data-src');
      imgInsideEl.setAttribute('src', dataSrc);
    });
  });
  typeOfLightNavEl.forEach((item) => {
    item.addEventListener('click', () => {
      let dataSrc = item.getAttribute('data-src');
      imgLightEl.setAttribute('src', dataSrc);
    });
  });
  typeOfWarmingNavEl.forEach((item) => {
    item.addEventListener('click', () => {
      let dataSrc = item.getAttribute('data-src');
      imgWarmingEl.setAttribute('src', dataSrc);
    });
  });
  tab(
    '.project-calc__tab-nav .project-calc__label',
    '.project-calc__tab-content .project-calc__tab-item',
    'child-tabs__btn-active',
    'project-calc__tab-active',
    false
  );
});
