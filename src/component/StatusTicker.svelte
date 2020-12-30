<script>
  import StatusTickerItem from './StatusTickerItem.svelte';

  /* eslint-disable-next-line import/prefer-default-export */
  export let statusTickerDatas = [];
</script>

<style>
  @keyframes ticker {
    0% {
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .status-ticker-viewport {
    height: 40px;

    overflow: hidden;

    box-sizing: border-box;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
  }

  .status-ticker {
    display: flex;
    flex-direction: row;
    height: 100%;

    animation: ticker 10s linear;
    animation-iteration-count: infinite;
  }
</style>

<div data-testid="status-ticker-viewport" class="status-ticker-viewport">
  <div data-testid="status-ticker" class="status-ticker">
    {#each statusTickerDatas as statusTickerData}
      <StatusTickerItem {...statusTickerData} />
    {/each}
  </div>
</div>
