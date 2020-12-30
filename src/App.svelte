<script>
  import Header from './container/Header.svelte';

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
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Header />
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
