<script>
  export let show = true;
  export let onClose = () => {
    show = false;
  };

  const toggleBodyScroll = (disable) => {
    if (disable) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = '';
  };

  $: toggleBodyScroll(show);
</script>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: var(--background-color);
    opacity: 0.9;

    z-index: 139;
  }

  .container {
    position: relative;
    z-index: 140;
  }

  .cancel-button-container {
    position: relative;
    height: calc((var(--header-height) + var(--font-size-regular)) / 2);
  }

  .cancel-button {
    position: absolute;
    bottom: 0;

    cursor: pointer;
    display: inline-block;

    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-light);
    line-height: 1;
  }

  .closed {
    display: none;
  }

  .header-ticker-cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    height: calc(var(--header-height) + 40px);
    background: var(--background-color);
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

<div data-testid="overlay" class="modal-overlay" class:closed={!show}>
  <div data-testid="container" class="container">
    <div data-testid="header-ticker-cover" class="header-ticker-cover" />
    <div data-testid="cancel-button-container" class="cancel-button-container">
      <div data-testid="cancel-button" class="cancel-button" on:click={onClose}>
        CANCEL
      </div>
    </div>
    <slot />
    <!-- to get rid of received an unexpected slot "default" -->
    <!-- ref: https://github.com/sveltejs/svelte/issues/4546 -->
    {#if false}
      <slot />
    {/if}
  </div>
</div>
