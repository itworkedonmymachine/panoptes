import { render } from '@testing-library/svelte';
import SearchBar from '../../src/component/SearchBar.svelte';

describe('Render search bar', () => {
  it('should render search bar', async () => {
    const { getByTestId } = render(SearchBar);

    const searchBar = getByTestId('search-bar');

    expect(searchBar).toBeVisible();
    expect(searchBar).toHaveAttribute('type', 'search');
    expect(searchBar).toHaveAttribute('placeholder', 'enter platform');
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

    const column = getByTestId('column');
    const box = getByTestId('box');
    const searchBox = getByTestId('search-box');
    const searchBar = getByTestId('search-bar');

    expect(column).toHaveClass('column');
    expect(box).toHaveClass('box');
    expect(searchBox).toHaveClass('search-box');
    expect(searchBar).toHaveClass('search-bar');
  });

  it('should render column styles', async () => {
    const { getByTestId } = render(SearchBar);

    const column = getByTestId('column');

    expect(column).toHaveStyle({
      'background-color': '#F6F792',
      height: '100vh',
      width: '100%',
      float: 'left',
      margin: 'auto',
      position: 'relative',
    });
  });

  it('should render box styles', async () => {
    const { getByTestId } = render(SearchBar);

    const box = getByTestId('box');
    expect(box).toHaveStyle({
      position: 'absolute',
      left: '0',
      right: '0',
      margin: 'auto',
      top: '20%',
      transform: 'translateY(-50%)',
      width: '100%',
      'text-align': 'center',
    });
  });

  it('should render search box styles', async () => {
    const { getByTestId } = render(SearchBar);

    const searchBox = getByTestId('search-box');

    expect(searchBox).toHaveStyle({
      width: '280px',
      position: 'relative',
      margin: '0 auto',
    });
  });

  it('should render search bar styles', async () => {
    const { getByTestId } = render(SearchBar);

    const searchBar = getByTestId('search-bar');

    expect(searchBar).toHaveStyle({
      width: '280px',
      padding: '20px',
      'border-color': '#448996',
      'text-indent': '30px',
      outline: 'none',
      border: '5px solid #448996',
      'border-radius': '5px',
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
