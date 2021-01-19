import { writable, derived } from 'svelte/store';
// import statusStorePool from './statusStorePool';

export const setListLocalStorage = (platforms) => {
  localStorage.setItem('watchList', JSON.stringify(platforms));
};

const getListLocalStorage = () => {
  const watchListJsonString = localStorage.getItem('watchList');
  return JSON.parse(watchListJsonString);
};

export const selectedPlatforms = writable([], (set) => {
  const localStorageList = getListLocalStorage();
  if (localStorageList) {
    set(localStorageList);
  }
});

export const watchListStore = derived(
  selectedPlatforms,
  ($selectedPlatforms, set) => {
    set($selectedPlatforms);
  }
);
