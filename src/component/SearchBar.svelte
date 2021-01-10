<script>
  import { platforms } from '../store/statusStorePool';

  export let statusPlatforms = []; // any[]

  export let userInput = '';
  // in real case
  if (statusPlatforms.length === 0) {
    statusPlatforms = platforms;
  }

  $: filteredPlatforms = userInput
    ? statusPlatforms.filter((statusPlatform) =>
        statusPlatform.toLowerCase().startsWith(userInput.toLowerCase())
      )
    : statusPlatforms;
</script>

<style>
  .search-container {
    position: relative;
    margin: 0 auto;
  }

  .search-bar {
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-light);

    border: none;
    outline: none;

    padding: 0;
    width: 100%;
  }

  .search-bar::placeholder {
    color: #c4c4c4;
  }

  .platform-list {
    padding: 0;
    margin: 0;
  }

  .platform {
    cursor: pointer;
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-light);
  }
</style>

<div class="search-container" data-testid="search-container">
  <input
    type="search"
    data-testid="search-bar"
    placeholder="SEARCH"
    bind:value={userInput}
    class="search-bar" />
  <dl data-testid="platform-list" class="platform-list">
    {#each filteredPlatforms as filteredPlatform}
      <dt data-testid="platform" class="platform">{filteredPlatform}</dt>
    {/each}
  </dl>
</div>
