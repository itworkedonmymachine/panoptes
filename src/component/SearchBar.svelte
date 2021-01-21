<script>
  import { platforms } from '../store/statusStorePool';
  import {
    watchlistStore,
    saveWatchlistToLocalStorage,
  } from '../store/watchlistStore';

  export let statusPlatforms = []; // any[]
  export let userInput = '';

  let searchBar;

  // in real case
  if (statusPlatforms.length === 0) {
    statusPlatforms = platforms;
  }

  const handlePlatformClick = (platform) => {
    if ($watchlistStore.includes(platform)) {
      $watchlistStore = $watchlistStore.filter((p) => p !== platform);
      return;
    }
    $watchlistStore = [...$watchlistStore, platform];
  };

  const handleClear = () => {
    userInput = '';
    searchBar.focus();
  };

  $: filteredPlatforms = userInput
    ? statusPlatforms.filter((statusPlatform) =>
        statusPlatform.toLowerCase().startsWith(userInput.toLowerCase())
      )
    : statusPlatforms;

  $: isPlatformSelectd = (platform) => $watchlistStore.includes(platform);

  $: saveWatchlistToLocalStorage($watchlistStore);
</script>

<style>
  .search-container {
    position: relative;
    margin: 0 auto;

    font-size: var(--font-size-large);
    font-weight: var(--font-weight-light);
  }

  .search-bar-container {
    display: flex;
    flex-direction: row;
  }

  .search-bar {
    font-weight: var(--font-weight-light);

    border: none;
    outline: none;

    padding: 0;
    width: 100%;
    flex: 1;

    background: var(--background-color);
    color: var(--font-color);
  }

  .search-bar::placeholder {
    color: #c4c4c4;
    font-weight: var(--font-weight-light);
  }

  .clear-button {
    cursor: pointer;
  }

  .platform-list {
    padding: 0;
    margin: 0;
    height: calc(100vh - var(--header-height) - 70px);
    overflow: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .platform-list::-webkit-scrollbar {
    display: none;
  }
  .platform {
    position: relative;
    cursor: pointer;
    line-height: 1.2;
  }

  .undo-select-icon {
    position: absolute;
    top: 0;
    right: 0;
  }

  .selected {
    font-weight: var(--font-weight-bold);
  }

  @media (max-width: 759px) {
    .search-bar-container {
      font-size: 0.9em;
    }

    .undo-select-icon {
      display: none;
    }
  }

  /* remove clear icon in search bar */
  /* for chrome */
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
  /* for ie */
  input[type='search']::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  input[type='search']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
</style>

<div class="search-container" data-testid="search-container">
  <div class="search-bar-container">
    <input
      type="search"
      data-testid="search-bar"
      placeholder="SEARCH"
      bind:value={userInput}
      bind:this={searchBar}
      class="search-bar" />
    {#if userInput.length}
      <div
        class="clear-button"
        data-testid="clear-button"
        on:click={handleClear}>
        CLEAR
      </div>
    {/if}
  </div>
  <dl data-testid="platform-list" class="platform-list">
    {#each filteredPlatforms as platform}
      <dt
        data-testid="platform"
        class="platform"
        on:click={handlePlatformClick(platform)}
        class:selected={isPlatformSelectd(platform)}>
        {platform}
        {#if isPlatformSelectd(platform)}
          <div class="undo-select-icon">X</div>
        {/if}
      </dt>
    {/each}
  </dl>
</div>
