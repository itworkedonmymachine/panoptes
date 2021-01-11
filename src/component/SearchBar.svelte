<script>
  import { platforms } from '../store/statusStorePool';

  export let statusPlatforms = []; // any[]
  let selectedPlatforms = [];

  export let userInput = '';
  // in real case
  if (statusPlatforms.length === 0) {
    statusPlatforms = platforms;
  }

  const handlePlatformClick = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      selectedPlatforms = selectedPlatforms.filter((p) => p !== platform);
      return;
    }
    selectedPlatforms = [...selectedPlatforms, platform];
  };

  const handleClear = () => {
    selectedPlatforms = [];
  };

  $: filteredPlatforms = userInput
    ? statusPlatforms.filter((statusPlatform) =>
        statusPlatform.toLowerCase().startsWith(userInput.toLowerCase())
      )
    : statusPlatforms;

  $: isPlatformSelectd = (platform) => selectedPlatforms.includes(platform);
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
      class="search-bar" />
    <div class="clear-button" data-testid="clear-button" on:click={handleClear}>
      CLEAR
    </div>
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
