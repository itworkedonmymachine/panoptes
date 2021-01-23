<script>
  export let platform;
  export let fetching = true;
  export let minor = false;
  export let major = false;
  export let maintenance = false;

  $: operational = !fetching && !minor && !major && !maintenance;
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

    if (maintenance) {
      return 'Maintenance';
    }

    return 'Operational';
  };
</script>

<style>
  .status-ticker-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
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
</style>

<div data-testid="status-ticker-item" class="status-ticker-item">
  <p data-testid="platform" class="platform">{platform}</p>
  <p
    data-testid="status"
    class="status"
    class:fetching
    class:minor
    class:major
    class:maintenance
    class:operational>
    {generateStatusMessage()}
  </p>
</div>
