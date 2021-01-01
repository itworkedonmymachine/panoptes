<script>
  export let watchlistDatas = [];
</script>

<style>
  .watchlist {
    text-align: left;
  }

  .watchlist-header {
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-light);
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
    {#each watchlistDatas as watchlistData}<span>{watchlistData}</span>{/each}
  </div>
</div>
