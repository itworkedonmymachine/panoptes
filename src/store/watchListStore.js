import { writable } from 'svelte/store';

export const setListLocalStorage = (platforms) => {
  localStorage.setItem('watchList', JSON.stringify(platforms));
};

const getListLocalStorage = () => {
  const watchListJsonString = localStorage.getItem('watchList');
  return JSON.parse(watchListJsonString);
};

export const watchListStore = writable([], (set) => {
  const localStorageList = getListLocalStorage();
  if (localStorageList) {
    set(localStorageList);
  }
});
