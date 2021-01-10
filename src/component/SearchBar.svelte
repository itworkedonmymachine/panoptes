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
  .column {
    background-color: #f6f792;
    height: 100vh;
    width: 100%;
    float: left;
    margin: auto;
    position: relative;
  }

  .box {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 20%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
  }

  .search_box {
    width: 280px;
    position: relative;
    margin: 0 auto;
  }

  .searchbar {
    width: 280px;
    padding: 20px;
    border-color: #448996;
    text-indent: 30px;
    outline: none;
    border: 5px solid #448996;
    border-radius: 5px;
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

<div class="column" data-testid="column">
  <div class="box" data-testid="box">
    <div class="search_box" data-testid="search_box">
      <input
        type="search"
        data-testid="searchbar"
        placeholder="enter platform"
        bind:value={userInput}
        class="searchbar" />
      <ul id="platforms">
        <form data-testid="platformList">
          {#each filteredPlatforms as filteredPlatform}
            <input
              type="checkbox"
              name={filteredPlatform}
              value={filteredPlatform}
              id={filteredPlatform}
              data-testid="platformList_checkbox" />
            <label for={filteredPlatform} data-testid="platformList_label">
              {filteredPlatform}
            </label>
          {/each}
        </form>
      </ul>
    </div>
  </div>
</div>
