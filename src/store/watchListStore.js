import { writable } from 'svelte/store';

export const saveWatchListToLocalStorage = (platforms) => {
  localStorage.setItem('watchList', JSON.stringify(platforms));
};

const restoreWatchListFromLocalStorage = () => {
  const watchListJsonString = localStorage.getItem('watchList');
  return JSON.parse(watchListJsonString);
};

export const watchListStore = writable([], (set) => {
  const localStorageList = restoreWatchListFromLocalStorage();
  if (localStorageList) {
    set(localStorageList);
  }
});
