import { fireEvent, render } from '@testing-library/svelte';
import SearchBar from '../../src/component/SearchBar.svelte';

describe('Render search bar', () => {
  it('should render search bar', async () => {
    const { getByTestId } = render(SearchBar);

    const searchBar = getByTestId('search-bar');

    expect(searchBar).toBeVisible();
    expect(searchBar).toHaveAttribute('type', 'search');
    expect(searchBar).toHaveAttribute('placeholder', 'SEARCH');
    expect(searchBar).toBeEnabled();
  });

  it('should render platform list properly', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        statusPlatforms: ['Docker', 'NPM'],
      },
    });

    const platformList = getByTestId('platform-list');

    expect(platformList.childElementCount).toBe(2);
    expect(platformList.children.item(0)).toHaveTextContent('Docker');
    expect(platformList.children.item(1)).toHaveTextContent('NPM');
  });

  it('should render platform list properly if user input is given', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        userInput: 'Dro',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const platformList = getByTestId('platform-list');

    expect(platformList.childElementCount).toBe(1);
    expect(platformList.children.item(0)).toHaveTextContent('Dropbox');
  });

  it('should render platform list if user input is given in lowercase', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        userInput: 'github',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox', 'GitHub'],
      },
    });

    const platformList = getByTestId('platform-list');
    expect(platformList.childElementCount).toBe(1);
    expect(platformList.children.item(0)).toHaveTextContent('GitHub');
  });
});

describe('Check Search Bar style', () => {
  it('should have classes for style', async () => {
    const { getByTestId } = render(SearchBar);

    const searchContainer = getByTestId('search-container');
    const searchBar = getByTestId('search-bar');

    expect(searchContainer).toHaveClass('search-container');
    expect(searchBar).toHaveClass('search-bar');
  });

  it('should render search container styles', async () => {
    const { getByTestId } = render(SearchBar);

    const searchContainer = getByTestId('search-container');

    expect(searchContainer).toHaveStyle({
      position: 'relative',
      margin: '0 auto',
    });
  });

  it('should render search bar component have default font setting as large & light', async () => {
    const { getByTestId } = render(SearchBar);

    const searchContainer = getByTestId('search-container');

    expect(searchContainer).toHaveStyle({
      'font-size': 'var(--font-size-large)',
      'font-weight': 'var(--font-weight-light)',
    });
  });

  it('should search bar render input w/ font setting as light', async () => {
    const { getByTestId } = render(SearchBar);

    const searchBar = getByTestId('search-bar');

    expect(searchBar).toHaveStyle({
      'font-weight': 'var(--font-weight-light)',
    });
  });

  it('should search bar have full width but clear button', async () => {
    const { getByTestId } = render(SearchBar);

    const searchBar = getByTestId('search-bar');

    expect(searchBar).toHaveStyle({
      flex: '1',
    });
  });

  it('should search bar have no border, outline, padding', async () => {
    const { getByTestId } = render(SearchBar);

    const searchBar = getByTestId('search-bar');

    expect(searchBar).toHaveStyle({
      border: 'none',
      outline: 'none',
      padding: '0',
    });
  });

  it("should clear button not show when there's no user input", async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    expect(() => getByTestId('clear-button')).toThrow();
  });

  it('should cursor be pointer when hover on clear button', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        userInput: 'n',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const clearButton = getByTestId('clear-button');

    expect(clearButton).toHaveStyle({
      cursor: 'pointer',
    });
  });

  it('should clear user input when clear is clicked', async () => {
    const { getByTestId, getAllByTestId } = render(SearchBar, {
      props: {
        userInput: 'd',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox', 'GitHub', 'Test'],
      },
    });

    const clearButton = getByTestId('clear-button');

    const platformsBeforeClear = getAllByTestId('platform');
    expect(platformsBeforeClear.length).toBe(2);

    await fireEvent.click(clearButton);

    const platformsAfterClear = getAllByTestId('platform');
    expect(platformsAfterClear.length).toBe(5);
  });

  it('should focus search bar after clear is clicked', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        userInput: 'd',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox', 'GitHub', 'Test'],
      },
    });

    const clearButton = getByTestId('clear-button');
    const searchBar = getByTestId('search-bar');

    await fireEvent.click(clearButton);

    expect(searchBar).toHaveFocus();
  });
});

describe('Check platform list style', () => {
  it('should have no margin or padding for platform list', () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        userInput: 'Dro',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const platformList = getByTestId('platform-list');

    expect(platformList).toHaveStyle({
      padding: '0',
      margin: '0',
    });
  });

  it('should cursor be pointer when hover on platform', async () => {
    const { getAllByTestId } = render(SearchBar, {
      props: {
        userInput: 'Dro',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const platforms = getAllByTestId('platform');

    platforms.forEach((label) => {
      expect(label).toHaveStyle({
        cursor: 'pointer',
      });
    });
  });

  it('should font for platform have fixed line-height', async () => {
    const { getAllByTestId } = render(SearchBar, {
      props: {
        userInput: 'Dro',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const platforms = getAllByTestId('platform');

    platforms.forEach((label) => {
      expect(label).toHaveStyle({
        'line-height': '1.2',
      });
    });
  });

  it('should font for selected platform be bold weight', async () => {
    const { getByText } = render(SearchBar, {
      props: {
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const dropbox = getByText('Dropbox');

    await fireEvent.click(dropbox);

    expect(dropbox).toHaveClass('selected');
    expect(dropbox).toHaveStyle({
      'font-weight': 'var(--font-weight-bold)',
    });
  });

  it('should undo-select-icon rendered when platform is selected', async () => {
    const { getByText } = render(SearchBar, {
      props: {
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const dropbox = getByText('Dropbox');

    await fireEvent.click(dropbox);

    expect(dropbox).toHaveClass('selected');
    expect(dropbox.lastElementChild).toHaveClass('undo-select-icon');
  });
});
