<script>
  export let minor = false;
  export let major = false;
</script>

<style>
  button {
    color: #28a745;
  }

  .minor {
    color: #df9913;
  }

  .major {
    color: #cb0000;
  }
</style>

<button data-testid="button" class:minor class:major>
  <slot name="icon" />
  <slot name="logo" />
  <!-- to get rid of received an unexpected slot "default" -->
  <!-- ref: https://github.com/sveltejs/svelte/issues/4546 -->
  {#if false}
    <slot />
  {/if}
</button>
