<script>
  import { onDestroy } from 'svelte';
  import StatusTickerItem from './StatusTickerItem.svelte';
  import { statuspageSummaryStores } from '../store/statuspageStore';

  export let statusTickerDatas = [];

  let unsubscribes;

  // if it's not test
  if (statusTickerDatas.length === 0) {
    unsubscribes = statuspageSummaryStores.forEach((store, i) => {
      store.subscribe((statusTickerData) => {
        statusTickerDatas[i] = statusTickerData;
      });
    });
  }

  onDestroy(() => {
    if (unsubscribes) {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    }
  });
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
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
  }

  .status-ticker-viewport-inner {
    display: flex;

    width: 10000px;
    height: 100%;
  }

  .status-ticker {
    display: flex;
    flex-direction: row;

    animation: ticker 30s linear;
    animation-iteration-count: infinite;
  }
</style>

<div data-testid="status-ticker-viewport" class="status-ticker-viewport">
  <div
    data-testid="status-ticker-viewport-inner"
    class="status-ticker-viewport-inner">
    <div data-testid="status-ticker" class="status-ticker">
      {#each statusTickerDatas as statusTickerData}
        <StatusTickerItem {...statusTickerData} />
      {/each}
    </div>
    <div data-testid="status-ticker" class="status-ticker">
      {#each statusTickerDatas as statusTickerData}
        <StatusTickerItem {...statusTickerData} />
      {/each}
    </div>
  </div>
</div>
