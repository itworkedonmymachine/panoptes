<script>
  export let platform;
  export let fetching = true;
  export let minor = false;
  export let major = false;
  export let maintenance = false;

  export let statusPageLink = '';

  $: operational = !fetching && !minor && !major && !maintenance;
</script>

<style>
  .watchlist-item {
    font-size: var(--font-size-large);
    margin: 0;
  }

  .fetching {
    background: var(--fetching-color);
  }

  .minor {
    background: var(--minor-outage-color);
  }

  .major {
    background: var(--major-outage-color);
  }

  .operational {
    background: var(--operational-color);
  }

  .maintenance {
    background: var(--maintenance-color);
  }

  a {
    color: var(--font-color);
  }
</style>

<p
  data-testid="watchlist-item"
  class="watchlist-item"
  class:fetching
  class:minor
  class:major
  class:maintenance
  class:operational>
  <a data-testid="watchlist-link" href={statusPageLink} target="_blank">
    {platform}
  </a>
</p>
