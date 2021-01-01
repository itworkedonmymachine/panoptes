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
    const { getByTestId } = render(SearchBar);

    const platformlist = getByTestId('platformList');

    expect(platformlist.childElementCount).toBe(3);
    expect(platformlist.children.item(0).children.item(0)).toHaveAttribute(
      'value',
      'GitHub'
    );
  });

  it('should render platform list properly if list is given', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        platforms: [
          { id: 'Docker', status: 'Bad' },
          { id: 'NPM', status: 'Good' },
        ],
      },
    });

    const platformlist = getByTestId('platformList');

    expect(platformlist.childElementCount).toBe(2);
    expect(platformlist.children.item(0).children.item(0)).toHaveAttribute(
      'value',
      'Docker'
    );
    expect(platformlist.children.item(1).children.item(0)).toHaveAttribute(
      'value',
      'NPM'
    );
  });

  it('should render platform list properly if user input is given', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        userInput: 'Doc',
      },
    });

    const platformlist = getByTestId('platformList');

    expect(platformlist.childElementCount).toBe(1);
    expect(platformlist.children.item(0).children.item(0)).toHaveAttribute(
      'value',
      'Docker'
    );
  });

  it('should render platform list if user input is given in lowercase', async () => {
    const { getByTestId } = render(SearchBar, {
      props: {
        userInput: 'github',
      },
    });

    const platformlist = getByTestId('platformList');
    expect(platformlist.childElementCount).toBe(1);
    expect(platformlist.children.item(0).children.item(0)).toHaveAttribute(
      'value',
      'GitHub'
    );
  });
});
