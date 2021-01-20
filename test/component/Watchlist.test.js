import { render } from '@testing-library/svelte';
import Watchlist from '../../src/component/Watchlist.svelte';

const watchlistMockData = {
  Test1: {
    data: {
      platform: 'Test1',
      fetching: true,
      minor: false,
      major: false,
    },
    unsubscribe: () => {},
  },
  Test2: {
    data: {
      platform: 'Test2',
      fetching: false,
      minor: true,
      major: false,
    },
    unsubscribe: () => {},
  },
  Test3: {
    data: {
      platform: 'Test3',
      fetching: false,
      minor: false,
      major: false,
    },
    unsubscribe: () => {},
  },
  Test4: {
    data: {
      platform: 'Test4',
      fetching: false,
      minor: false,
      major: false,
    },
    unsubscribe: () => {},
  },
};

describe('Render Watchlist', () => {
  it('should render watchlist', async () => {
    const { getByTestId } = render(Watchlist, {
      props: {
        watchlist: watchlistMockData,
      },
    });

    const watchlist = getByTestId('watchlist');

    expect(watchlist).toBeVisible();
  });

  it('should left-aligned', async () => {
    const { getByTestId } = render(Watchlist, {
      props: {
        watchlist: watchlistMockData,
      },
    });

    const watchlist = getByTestId('watchlist');

    expect(watchlist).toHaveStyle({
      'text-align': 'left',
    });
  });

  it('should render header w/ regular light', async () => {
    const { getByTestId } = render(Watchlist, {
      props: {
        watchlist: watchlistMockData,
      },
    });

    const header = getByTestId('watchlist-header');

    expect(header).toHaveStyle({
      'font-size': 'var(--font-size-regular)',
      'font-weight': 'var(--font-weight-light)',
    });
  });

  it('should show length of watchlist', async () => {
    const { getByTestId } = render(Watchlist, {
      props: {
        watchlist: watchlistMockData,
      },
    });

    const watchlist = getByTestId('watchlist-length');

    expect(watchlist).toHaveTextContent('004');
  });

  it('should render watchlist items', async () => {
    const { getByTestId } = render(Watchlist, {
      props: {
        watchlist: watchlistMockData,
      },
    });

    const contents = getByTestId('watchlist-contents');

    expect(contents.childElementCount).toBe(4);
  });
});
