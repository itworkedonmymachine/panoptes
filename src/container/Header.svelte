<script>
  import Modal from '../component/Modal.svelte';
  import SearchBar from '../component/SearchBar.svelte';

  let showSearchBar = false;
  const toggleShowSearchBar = () => {
    showSearchBar = !showSearchBar;
  };
</script>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 99;
  }

  .container {
    width: 100%;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    text-align: center;

    border-bottom: 1px solid #000000;
  }

  .title {
    font-size: var(--font-size-xlarge);
    font-weight: var(--font-weight-bold);
    margin: auto 0;
  }

  .search {
    cursor: pointer;
  }

  .search,
  .settings {
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-light);
    color: rgba(0, 0, 0, 0.3);
    margin: auto 0;
  }

  @media (max-width: 759px) {
    .container {
      display: block;
    }

    .search,
    .settings {
      display: none;
    }
  }

  @media (min-width: 760px) {
    .container {
      width: 700px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1020px) {
    .container {
      width: 1000px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1280px) {
    .container {
      width: 1200px;
      margin: 0 auto;
    }
  }
</style>

<Modal show={showSearchBar} onClose={toggleShowSearchBar}>
  <SearchBar />
</Modal>
<div data-testid="header" class="header">
  <div data-testid="container" class="container">
    <!-- <slot name="search" /> -->
    <div data-testid="search" class="search" on:click={toggleShowSearchBar}>
      Search
    </div>
    <div data-testid="title" class="title">Panoptes</div>
    <!-- <slot name="settings" /> -->
    <div data-testid="settings" class="settings">Settings</div>
  </div>
</div>
