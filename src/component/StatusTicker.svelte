<script>
  import StatusTickerItem from './StatusTickerItem.svelte';

  /* eslint-disable-next-line import/prefer-default-export */
  export let statusTickerDatas = [];
</script>

<style>
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
  }
</style>

<div data-testid="status-ticker-viewport" class="status-ticker-viewport">
  <div data-testid="status-ticker" class="status-ticker">
    {#each statusTickerDatas as statusTickerData}
      <StatusTickerItem {...statusTickerData} />
    {/each}
  </div>
</div>
