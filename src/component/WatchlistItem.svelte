<script>
  export let platform;
  export let fetching = true;
  export let minor = false;
  export let major = false;

  $: operational = !fetching && !minor && !major;
</script>

<style>
  .watchlist-item {
    font-size: var(--font-size-large);
    margin: 0;
  }

  .fetching {
    background: rgba(0, 0, 0, 0.2);
  }

  .minor {
    background: rgba(242, 153, 74, 0.5);
  }

  .major {
    background: rgba(235, 87, 87, 0.5);
  }

  .operational {
    background: rgba(39, 174, 96, 0.5);
  }
</style>

<p
  data-testid="watchlist-item"
  class="watchlist-item"
  class:fetching
  class:minor
  class:major
  class:operational>
  {platform}
</p>
