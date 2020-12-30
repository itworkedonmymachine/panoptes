<script>
  import StatusTickerItem from './StatusTickerItem.svelte';

  /* eslint-disable-next-line import/prefer-default-export */
  export let statusTickerDatas = [];
</script>

<style>
  .status-ticker {
    height: 40px;

    display: flex;
    flex-direction: row;

    box-sizing: border-box;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
  }
</style>

<div data-testid="status-ticker" class="status-ticker">
  {#each statusTickerDatas as statusTickerData}
    <StatusTickerItem {...statusTickerData} />
  {/each}
</div>
