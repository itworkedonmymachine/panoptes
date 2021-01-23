<script>
  import { showSearchBar } from '../store/modalStore';

  const openSearchBar = () => {
    $showSearchBar = true;
  };

  let isPullToShowActionBar = false;
  let isActionBarVisible = false;
  let pullStartY = 0;
  let pullEndY = 0;
  let moveY = 0;

  let container;

  const screenY = (e) => e.touches[0].screenY;

  const onTouchStart = (e) => {
    isPullToShowActionBar = !window.scrollY;
    pullStartY = screenY(e);

    container.style.transition = 'none';
  };

  const onTouchMove = (e) => {
    if (!isPullToShowActionBar || $showSearchBar) {
      return;
    }

    pullEndY = screenY(e);

    if (pullStartY && pullEndY) {
      moveY = pullEndY - pullStartY;
    }

    if (isActionBarVisible) {
      moveY += 50;
    }

    container.style['min-height'] = `${moveY}px`;
  };

  const onTouchEnd = () => {
    container.style.transition = 'min-height 0.3s';

    if (moveY < 50) {
      container.style['min-height'] = `0px`;
      isActionBarVisible = false;
    }

    if (moveY > 50) {
      container.style['min-height'] = `50px`;
      isActionBarVisible = true;
    }

    isPullToShowActionBar = false;
    pullStartY = 0;
    pullEndY = 0;
    moveY = 0;
  };

  window.addEventListener('touchstart', onTouchStart);
  window.addEventListener('touchmove', onTouchMove);
  window.addEventListener('touchend', onTouchEnd);
</script>

<style>
  .action-bar {
    top: 0;
    height: 0;

    display: flex;
    align-items: flex-end;
  }

  .search {
    cursor: pointer;
  }

  .search,
  .settings {
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-light);
    color: var(--secondary-font-color);
    margin: auto 0;
  }

  .container {
    flex: 1;

    display: flex;
    justify-content: space-between;
    text-align: center;

    padding: 10px 0;
  }

  @media (min-width: 760px) {
    .action-bar {
      display: none;
    }
  }
</style>

<div data-testid="action-bar" class="action-bar" bind:this={container}>
  <div data-testid="container" class="container">
    <div data-testid="search" class="search" on:click={openSearchBar}>
      Search
    </div>
    <div data-testid="settings" class="settings">Settings</div>
  </div>
</div>
