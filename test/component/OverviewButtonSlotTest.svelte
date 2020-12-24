<script>
  export let component;
  export let icon = false;
  export let logo = false;
</script>

{#if icon && logo}
  <svelte:component this={component}>
    <img data-testid="icon" slot="icon" alt="slot-test-icon" />
    <img data-testid="logo" slot="logo" alt="slot-test-logo" />
  </svelte:component>
{:else if icon}
  <svelte:component this={component}>
    <img data-testid="icon" slot="icon" alt="slot-test-icon" />
  </svelte:component>
{:else if logo}
  <svelte:component this={component}>
    <img data-testid="logo" slot="logo" alt="slot-test-logo" />
  </svelte:component>
{/if}
