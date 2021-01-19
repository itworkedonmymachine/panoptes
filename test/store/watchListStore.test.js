import { get } from 'svelte/store';
import {
  saveWatchListToLocalStorage,
  watchListStore,
} from '../../src/store/watchListStore';

const clearWatchListInLocalStorage = () => localStorage.removeItem('watchList');

describe('Manage watchlist store', () => {
  beforeEach(() => {
    clearWatchListInLocalStorage();
  });

  afterAll(() => {
    clearWatchListInLocalStorage();
  });

  it('should have empty list when local storage is empty', () => {
    expect(get(watchListStore)).toEqual([]);
  });

  it('should restore list when local storage is set', () => {
    const testPlatforms = ['platform1', 'platform2'];
    saveWatchListToLocalStorage(testPlatforms);

    expect(get(watchListStore)).toEqual(testPlatforms);
  });
});
