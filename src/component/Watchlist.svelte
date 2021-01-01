<script>
  import { onDestroy } from 'svelte';
  import WatchlistItem from './WatchlistItem.svelte';
  import { statuspageTickerStores } from '../store/statuspageStore';

  export let watchlistDatas = [];

  let unsubscribes;

  // if it's not test
  if (watchlistDatas.length === 0) {
    unsubscribes = statuspageTickerStores.forEach((store, i) => {
      store.subscribe((statusTickerData) => {
        watchlistDatas[i] = statusTickerData;
      });
    });
  }

  onDestroy(() => {
    if (unsubscribes) {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    }
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
      data-testid="watchlist-length">{watchlistDatas.length
        .toString()
        .padStart(3, '0')}</span>
    <span>Watchlist</span>
  </div>
  <div data-testid="watchlist-contents" class="watchlist-contents">
    {#each watchlistDatas as watchlistData}
      <WatchlistItem {...watchlistData} />
    {/each}
  </div>
</div>
