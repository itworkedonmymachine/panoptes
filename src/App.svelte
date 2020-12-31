<script>
  import Header from './container/Header.svelte';
  import StatusTicker from './component/StatusTicker.svelte';

  let name;
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
  }

  main {
    text-align: center;
    margin: 0 auto;

    padding-top: var(--header-height);
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (max-width: 759px) {
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
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
