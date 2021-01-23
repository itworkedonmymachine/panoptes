<script>
  import { onDestroy } from 'svelte';
  import WatchlistItem from './WatchlistItem.svelte';
  import statusStorePool from '../store/statusStorePool';
  import { watchlistStore } from '../store/watchlistStore';

  export let watchlist = {};
  let trigger;

  $: platforms = Object.keys(watchlist);

  $: {
    $watchlistStore
      .filter((platform) => watchlist[platform] === undefined)
      .forEach((platform) => {
        watchlist[platform] = { data: {}, unsubscribe: null };
        const store = statusStorePool[platform].summarizedStatusStore;
        const unsubscribe = store.subscribe((watchlistData) => {
          watchlist[platform].data = watchlistData;
        });
        watchlist[platform].unsubscribe = unsubscribe;
      });

    Object.keys(watchlist)
      .filter((platform) => !$watchlistStore.includes(platform))
      .forEach((platform) => {
        watchlist[platform].unsubscribe();
        delete watchlist[platform];
        // since delete does not trigger re-render, do dummy assign for render
        trigger = trigger;
      });
  }

  onDestroy(() => {
    platforms.forEach((platform) => {
      watchlist[platform].unsubscribe();
      delete watchlist[platform];
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

  .indicator {
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-light);
    color: var(--secondary-font-color);
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
      data-testid="watchlist-length">{platforms.length
        .toString()
        .padStart(3, '0')}</span>
    <span>Watchlist</span>
  </div>
  <div data-testid="watchlist-contents" class="watchlist-contents">
    {#if platforms.length === 0}
      <span data-testid="watchlist-indicator" class="indicator">
        Go Search, Add platforms
      </span>
    {/if}
    {#each platforms as platform}
      <WatchlistItem {...watchlist[platform].data} />
    {/each}
  </div>
</div>
