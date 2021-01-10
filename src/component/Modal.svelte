<script>
</script>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: #ffffff;
    opacity: 0.9;

    z-index: 139;
  }

  .container {
    z-index: 140;
  }
</style>

<div data-testid="overlay" class="modal-overlay">
  <div data-testid="container" class="container">
    <slot />
    <!-- to get rid of received an unexpected slot "default" -->
    <!-- ref: https://github.com/sveltejs/svelte/issues/4546 -->
    {#if false}
      <slot />
    {/if}
  </div>
</div>
