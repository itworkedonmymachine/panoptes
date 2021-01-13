import { writable, derived } from 'svelte/store';
// import statusStorePool from './statusStorePool';

export const setListLocalStorage = (platforms) => {
  localStorage.setItem('watchList', JSON.stringify(platforms));
};

const getListLocalStorage = () => {
  const watchListJsonString = localStorage.getItem('watchList');
  return JSON.parse(watchListJsonString);
};

const setSelectedPlatforms = () => {
  const localStorageList = getListLocalStorage();
  if (!localStorageList) {
    return [];
  }
  return localStorageList;
};

export const selectedPlatforms = writable([], setSelectedPlatforms());

export const watchListStore = derived(
  selectedPlatforms,
  ($selectedPlatforms, set) => {
    set($selectedPlatforms);
  }
);
