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
    width: 280px;
    position: relative;
    margin: 0 auto;
  }

  .search-bar {
    color: #c4c4c4;
    border: none;
  }

  #platforms input[type='checkbox'] {
    display: none;
  }

  #platforms label {
    cursor: pointer;
  }

  #platforms input[type='checkbox']:checked + label {
    font-weight: var(--font-weight-bold);
  }
</style>

<div class="search-container" data-testid="search-container">
  <input
    type="search"
    data-testid="search-bar"
    placeholder="SEARCH"
    bind:value={userInput}
    class="search-bar" />
  <ul id="platforms">
    <form data-testid="platform-list">
      {#each filteredPlatforms as filteredPlatform}
        <input
          type="checkbox"
          name={filteredPlatform}
          value={filteredPlatform}
          id={filteredPlatform}
          data-testid="platform-list checkbox" />
        <label for={filteredPlatform} data-testid="platform-list label">
          {filteredPlatform}
        </label>
      {/each}
    </form>
  </ul>
</div>
