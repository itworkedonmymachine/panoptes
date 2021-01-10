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

  it('should search bar have large font size & light weight', async () => {
    const { getByTestId } = render(SearchBar);

    const searchBar = getByTestId('search-bar');

    expect(searchBar).toHaveStyle({
      'font-size': 'var(--font-size-large)',
      'font-weight': 'var(--font-weight-light)',
    });
  });

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

  it('should cursor be pointer when hover on clear button', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const clearButton = getByTestId('clear-button');

    expect(clearButton).toHaveStyle({
      cursor: 'pointer',
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

  it('should font for platform be large & light weight', async () => {
    const { getAllByTestId } = render(SearchBar, {
      props: {
        userInput: 'Dro',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const platforms = getAllByTestId('platform');

    platforms.forEach((label) => {
      expect(label).toHaveStyle({
        'font-size': 'var(--font-size-large)',
        'font-weight': 'var(--font-weight-light)',
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

  it('should clear selection when clear is clicked', async () => {
    const { getByTestId, getAllByTestId } = render(SearchBar, {
      props: {
        statusPlatforms: ['Docker', 'NPM', 'Dropbox', 'GitHub', 'Test'],
      },
    });

    const platforms = getAllByTestId('platform');
    const clearButton = getByTestId('clear-button');

    await fireEvent.click(platforms[0]);
    await fireEvent.click(platforms[1]);
    await fireEvent.click(platforms[3]);

    expect(platforms[0]).toHaveClass('selected');
    expect(platforms[1]).toHaveClass('selected');
    expect(platforms[3]).toHaveClass('selected');

    await fireEvent.click(clearButton);

    expect(platforms[0]).not.toHaveClass('selected');
    expect(platforms[1]).not.toHaveClass('selected');
    expect(platforms[3]).not.toHaveClass('selected');
  });
});
