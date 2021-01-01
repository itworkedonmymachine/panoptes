import { render } from '@testing-library/svelte';
import Watchlist from '../../src/component/Watchlist.svelte';

const watchlistMockData = [
  {
    platform: 'Test1',
    fetching: true,
    minor: false,
    major: false,
  },
  {
    platform: 'Test2',
    fetching: false,
    minor: true,
    major: false,
  },
  {
    platform: 'Test3',
    fetching: false,
    minor: false,
    major: false,
  },
  {
    platform: 'Test4',
    fetching: false,
    minor: false,
    major: false,
  },
];

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

  it('should render header w/ regular light', async () => {
    const { getByTestId } = render(Watchlist);

    const header = getByTestId('watchlist-header');

    expect(header).toHaveStyle({
      'font-size': 'var(--font-size-regular)',
      'font-weight': 'var(--font-weight-light)',
    });
  });

  it('should show length of watchlist', async () => {
    const { getByTestId } = render(Watchlist, {
      props: {
        watchlistDatas: watchlistMockData,
      },
    });

    const watchlist = getByTestId('watchlist-length');

    expect(watchlist).toHaveTextContent('004');
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
