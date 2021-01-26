<script>
  import Modal from '../component/Modal.svelte';
  import Settings from '../component/Settings.svelte';
  import { showSettings } from '../store/modalStore';

  const closeSettings = () => {
    $showSettings = false;
  };
</script>

<style>
</style>

<Modal show={$showSettings} onClose={closeSettings}>
  <Settings />
</Modal>
