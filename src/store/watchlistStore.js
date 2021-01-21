import { writable } from 'svelte/store';

export const saveWatchlistToLocalStorage = (platforms) => {
  localStorage.setItem('watchlist', JSON.stringify(platforms));
};

const restoreWatchlistFromLocalStorage = () => {
  const watchlistJsonString = localStorage.getItem('watchlist');
  return JSON.parse(watchlistJsonString);
};

export const watchlistStore = writable([], (set) => {
  const localStorageList = restoreWatchlistFromLocalStorage();
  if (localStorageList) {
    set(localStorageList);
  }

  return () => set([]);
});
