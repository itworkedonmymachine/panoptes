import { render } from '@testing-library/svelte';
import SearchBar from '../../src/component/SearchBar.svelte';

describe('Render search bar', () => {
  it('should render search bar', async () => {
    const { getByTestId } = render(SearchBar);

    const searchbar = getByTestId('searchbar');

    expect(searchbar).toBeVisible();
    expect(searchbar).toHaveAttribute('type', 'search');
    expect(searchbar).toHaveAttribute('placeholder', 'enter platform');
    expect(searchbar).toBeEnabled();
  });

  it('should render platform list properly', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        statusPlatforms: ['Docker', 'NPM'],
      },
    });

    const platformlist = getByTestId('platformList');

    expect(platformlist.childElementCount).toBe(4);
    expect(platformlist.children.item(0)).toHaveAttribute('value', 'Docker');
    expect(platformlist.children.item(2)).toHaveAttribute('value', 'NPM');
  });

  it('should render platform list properly if user input is given', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        userInput: 'Dro',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox'],
      },
    });

    const platformlist = getByTestId('platformList');

    expect(platformlist.childElementCount).toBe(2);
    expect(platformlist.children.item(0)).toHaveAttribute('value', 'Dropbox');
  });

  it('should render platform list if user input is given in lowercase', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        userInput: 'github',
        statusPlatforms: ['Docker', 'NPM', 'Dropbox', 'GitHub'],
      },
    });

    const platformlist = getByTestId('platformList');
    expect(platformlist.childElementCount).toBe(2);
    expect(platformlist.children.item(0)).toHaveAttribute('value', 'GitHub');
  });
});

describe('Check searchbar style', () => {
  it('should have classes for style', async () => {
    const { getByTestId } = render(SearchBar);

    const column = getByTestId('column');
    const box = getByTestId('box');
    const searchbox = getByTestId('search_box');
    const searchbar = getByTestId('searchbar');

    expect(column).toHaveClass('column');
    expect(box).toHaveClass('box');
    expect(searchbox).toHaveClass('search_box');
    expect(searchbar).toHaveClass('searchbar');
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

  it('should redner box sytles', async () => {
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

  it('should render search box sytles', async () => {
    const { getByTestId } = render(SearchBar);

    const searchBox = getByTestId('search_box');

    expect(searchBox).toHaveStyle({
      width: '280px',
      position: 'relative',
      margin: '0 auto',
    });
  });

  it('should render seach bar styles', async () => {
    const { getByTestId } = render(SearchBar);

    const searchbar = getByTestId('searchbar');

    expect(searchbar).toHaveStyle({
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

    const platformListCheckboxes = getAllByTestId('platformList_checkbox');
    const platformListLabels = getAllByTestId('platformList_label');
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
