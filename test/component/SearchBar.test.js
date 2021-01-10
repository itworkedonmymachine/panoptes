import { render } from '@testing-library/svelte';
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

    expect(platformList.childElementCount).toBe(4);
    expect(platformList.children.item(0)).toHaveAttribute('value', 'Docker');
    expect(platformList.children.item(2)).toHaveAttribute('value', 'NPM');
  });

  it('should render platform list properly if user input is given', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        userInput: 'Dro',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const platformList = getByTestId('platform-list');

    expect(platformList.childElementCount).toBe(2);
    expect(platformList.children.item(0)).toHaveAttribute('value', 'Dropbox');
  });

  it('should render platform list if user input is given in lowercase', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        userInput: 'github',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox', 'GitHub'],
      },
    });

    const platformList = getByTestId('platform-list');
    expect(platformList.childElementCount).toBe(2);
    expect(platformList.children.item(0)).toHaveAttribute('value', 'GitHub');
  });
});

describe('Check searchBar style', () => {
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
      width: '280px',
      position: 'relative',
      margin: '0 auto',
    });
  });

  it('should render search bar styles', async () => {
    const { getByTestId } = render(SearchBar);

    const searchBar = getByTestId('search-bar');

    expect(searchBar).toHaveStyle({
      border: 'none',
      color: '#C4C4C4',
    });
  });

  it('should render checkbox and label styles', async () => {
    const { getAllByTestId } = render(SearchBar, {
      props: {
        userInput: 'Dro',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const platformListCheckboxes = getAllByTestId('platform-list checkbox');
    const platformListLabels = getAllByTestId('platform-list label');
    platformListCheckboxes.forEach((checkbox) => {
      expect(checkbox).toHaveStyle({
        display: 'none',
      });
    });

    platformListLabels.forEach((label) => {
      expect(label).toHaveStyle({
        cursor: 'pointer',
      });
    });
  });
});
