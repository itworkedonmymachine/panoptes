import { fireEvent, render } from '@testing-library/svelte';
import SearchModal from '../../src/container/SearchModal.svelte';
import { showSearchBar } from '../../src/store/modalStore';

describe('Show modals by store value', () => {
  it('should show modal when store value is set as false', async () => {
    showSearchBar.set(false);

    const { getByTestId } = render(SearchModal);

    const searchBar = getByTestId('search-bar');

    expect(searchBar).not.toBeVisible();
  });

  it('should show modal when store value is set as false', async () => {
    showSearchBar.set(true);

    const { getByTestId } = render(SearchModal);

    const searchBar = getByTestId('search-bar');

    expect(searchBar).toBeVisible();
  });

  it('should close modal when user clicks cancel', async () => {
    showSearchBar.set(true);

    const { getByTestId } = render(SearchModal);

    const searchBar = getByTestId('search-bar');
    const cancelButton = getByTestId('cancel-button');

    expect(searchBar).toBeVisible();
    await fireEvent.click(cancelButton);
    expect(searchBar).not.toBeVisible();
  });
});
