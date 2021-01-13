import { writable, derived, get } from 'svelte/store';
// import statusStorePool from './statusStorePool';
/*
1. statusStorePool => parameter로 넘기지 말고 호출만 하는걸로
2. 
*/
export const setListLocalStorage = (platforms) => {
  // in object type
  // localStorage.setItem('watchList', JSON.stringify(selectedPlatrorms));
  // in array type
  localStorage.setItem('watchList', get(platforms));
};

const getListLocalStorage = () =>
  // in object type
  // JSON.parse(localStorage.getItem('watchList'));
  // in array type
  localStorage.getItem('watchList');

/*
1. local storage에 저장된 watchlist (selected list)가 있는지 확인한다

2. 유저가 선택한 플랫폼을 반영한다
3. 유저가 선택한 플랫폼을 local storage에 반영한다
*/

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
