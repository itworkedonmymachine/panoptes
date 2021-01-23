<script>
  import Header from './container/Header.svelte';
  import SearchModal from './container/SearchModal.svelte';
  import StatusTicker from './component/StatusTicker.svelte';
  import Watchlist from './component/Watchlist.svelte';
</script>

<style>
  :root {
    --header-height: 120px;

    --font-size-xlarge: 64px;
    --font-size-large: 48px;
    --font-size-regular: 24px;
    --font-size-small: 14px;

    --font-weight-bold: 700;
    --font-weight-light: 300;

    --font-color: #333333;
    --secondary-font-color: #c4c4c4;
    --background-color: #ffffff;
    --border-color: #000000;

    --operational-color: rgba(39, 174, 96, 0.5);
    --minor-outage-color: rgba(242, 153, 74, 0.5);
    --major-outage-color: rgba(235, 87, 87, 0.5);
    --maintenance-color: rgba(45, 156, 219, 0.5);
    --fetching-color: rgba(0, 0, 0, 0.2);
  }

  main {
    text-align: center;
    margin: 0 auto;

    padding-top: var(--header-height);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --font-color: #cccccc;
      --secondary-font-color: #737373;
      --background-color: #000000;
      --border-color: #ffffff;

      --fetching-color: rgba(255, 255, 255, 0.2);
    }
  }

  @media (max-width: 759px) {
    :root {
      --header-height: 80px;
    }

    main {
      display: block;
    }
  }

  @media (min-width: 760px) {
    main {
      width: 700px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1020px) {
    main {
      width: 1000px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1280px) {
    main {
      width: 1200px;
      margin: 0 auto;
    }
  }
</style>

<SearchModal />
<Header />
<main>
  <StatusTicker />
  <Watchlist />
</main>
