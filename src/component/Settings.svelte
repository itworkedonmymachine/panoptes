<script>
  import MoonIcon from '../svg-icon/Moon.svelte';
  import SunIcon from '../svg-icon/Sun.svelte';

  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
</script>

<style>
  .container {
    margin: 0 auto;
    position: relative;
  }

  .title {
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);

    margin-bottom: 0.5em;
  }

  .option-list {
    padding: 0;
    margin: 0;
    height: calc(100vh - var(--header-height) - 70px);
    overflow: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .option-list::-webkit-scrollbar {
    display: none;
  }

  .option {
    position: relative;
    line-height: 1.2;

    font-size: var(--font-size-large);
    font-weight: var(--font-weight-light);
  }

  .option-icon {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;

    display: flex;
    align-items: center;
  }
</style>

<div class="container" data-testid="container">
  <div class="title" data-testid="title">Settings</div>
  <dl class="option-list" data-testid="option-list">
    <dt class="option" data-testid="option">
      Toggle Dark Mode
      <div class="option-icon" data-testid="option-icon">
        {#if isDarkMode}
          <MoonIcon width={48} height={48} />
        {:else}
          <SunIcon width={48} height={48} />
        {/if}
      </div>
    </dt>
  </dl>
</div>
