<script>
  export let platform;
  export let fetching = true;
  export let minor = false;
  export let major = false;

  $: operational = !fetching && !minor && !major;
  $: generateStatusMessage = () => {
    if (fetching) {
      return 'Fetching';
    }

    if (minor) {
      return 'Minor Outage';
    }

    if (major) {
      return 'Major Outage';
    }

    return 'Operational';
  };
</script>

<style>
  .status-ticker-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .platform {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    margin-right: 6px;
  }

  .status {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-light);
    padding: 1px 2px;
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

<div data-testid="status-ticker-item" class="status-ticker-item">
  <p data-testid="platform" class="platform">{platform}</p>
  <p
    data-testid="status"
    class="status"
    class:fetching
    class:minor
    class:major
    class:operational>
    {generateStatusMessage()}
  </p>
</div>
