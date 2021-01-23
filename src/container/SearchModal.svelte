<script>
  import Modal from '../component/Modal.svelte';
  import SearchBar from '../component/SearchBar.svelte';
  import { showSearchBar } from '../store/modalStore';

  const closeSearchBar = () => {
    $showSearchBar = false;
  };
</script>

<style>
</style>

<Modal show={$showSearchBar} onClose={closeSearchBar}>
  <SearchBar />
</Modal>
