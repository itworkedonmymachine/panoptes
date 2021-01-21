<script>
  import Header from './container/Header.svelte';
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
  }

  main {
    text-align: center;
    margin: 0 auto;

    padding-top: var(--header-height);
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

<Header />
<main>
  <StatusTicker />
  <Watchlist />
</main>
