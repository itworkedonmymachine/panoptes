import { render } from '@testing-library/svelte';
import Watchlist from '../../src/component/Watchlist.svelte';

const watchlistMockData = ['Platform1', 'Platform2', 'Platform3', 'Platform4'];

describe('Render Watchlist', () => {
  it('should render watchlist', async () => {
    const { getByTestId } = render(Watchlist);

    const watchlist = getByTestId('watchlist');

    expect(watchlist).toBeVisible();
  });

  it('should left-aligned', async () => {
    const { getByTestId } = render(Watchlist);

    const watchlist = getByTestId('watchlist');

    expect(watchlist).toHaveStyle({
      'text-align': 'left',
    });
  });

  it('should show length of watchlist', async () => {
    const { getByTestId } = render(Watchlist, {
      props: {
        watchlistDatas: watchlistMockData,
      },
    });

    const watchlist = getByTestId('watchlist-length');

    expect(watchlist.textContent).toBe('004');
  });

  it('should render watchlist items', async () => {
    const { getByTestId } = render(Watchlist, {
      props: {
        watchlistDatas: watchlistMockData,
      },
    });

    const contents = getByTestId('watchlist-contents');

    expect(contents.childElementCount).toBe(4);
  });
});
