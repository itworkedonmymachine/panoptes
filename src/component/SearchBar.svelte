<script>
  export let platforms = [
    { id: 'GitHub', status: 'Ok' },
    { id: 'Docker', status: 'Minor' },
    { id: 'NPM', status: 'Major' },
  ]; // any[]
  // https://svelte.dev/tutorial/each-blocks

  // input has come !
  // platform = platform.filter(platform => platform.includes(userInput));
  export let userInput = '';
  $: filteredPlatform = userInput
    ? platforms.filter((platform) => platform.id.startsWith(userInput))
    : platforms;
</script>

<input
  type="search"
  data-testid="searchbar"
  placeholder="enter platform"
  bind:value={userInput} />
<ul id="platforms">
  <form data-testid="platformList">
    {#each filteredPlatform as platform}
      <label><input
          type="checkbox"
          name="platform"
          value={platform.id} />{platform.id}</label>
    {/each}
  </form>
</ul>
