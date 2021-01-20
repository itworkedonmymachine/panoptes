<script>
  import { onDestroy } from 'svelte';
  import WatchlistItem from './WatchlistItem.svelte';
  import statusStorePool from '../store/statusStorePool';

  export let watchlist = {};

  $: subscribedPlatforms = Object.keys(watchlist).filter(
    (platform) => watchlist[platform].unsubscribe
  );

  // if it's not test
  if (watchlist.length === 0) {
    Object.keys(statusStorePool).forEach((platform) => {
      const store = statusStorePool[platform].summarizedStatusStore;
      const unsubscribe = store.subscribe((watchlistData) => {
        watchlist[platform].data = watchlistData;
      });
      watchlist[platform].unsubscribe = unsubscribe;
    });
  }

  onDestroy(() => {
    Object.keys(watchlist).forEach((platform) => {
      if (watchlist[platform].unsubscribe) {
        watchlist[platform].unsubscribe();
      }
    });
  });
</script>

<style>
  .watchlist {
    text-align: left;
    padding: 30px 0;
  }

  .watchlist-header {
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-light);
  }

  @media (max-width: 759px) {
    .watchlist {
      padding: 10px 0;
    }
  }
</style>

<div data-testid="watchlist" class="watchlist">
  <div data-testid="watchlist-header" class="watchlist-header">
    <span
      data-testid="watchlist-length">{subscribedPlatforms.length
        .toString()
        .padStart(3, '0')}</span>
    <span>Watchlist</span>
  </div>
  <div data-testid="watchlist-contents" class="watchlist-contents">
    {#each Object.keys(watchlist) as platform}
      <WatchlistItem {...watchlist[platform].data} />
    {/each}
  </div>
</div>
