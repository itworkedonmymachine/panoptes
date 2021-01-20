import { get } from 'svelte/store';
import {
  saveWatchlistToLocalStorage,
  watchlistStore,
} from '../../src/store/watchListStore';

const clearWatchlistInLocalStorage = () => localStorage.removeItem('watchlist');

describe('Manage watchlist store', () => {
  beforeEach(() => {
    clearWatchlistInLocalStorage();
  });

  afterAll(() => {
    clearWatchlistInLocalStorage();
  });

  it('should have empty list when local storage is empty', () => {
    expect(get(watchlistStore)).toEqual([]);
  });

  it('should restore list when local storage is set', () => {
    const testPlatforms = ['platform1', 'platform2'];
    saveWatchlistToLocalStorage(testPlatforms);

    expect(get(watchlistStore)).toEqual(testPlatforms);
  });
});
