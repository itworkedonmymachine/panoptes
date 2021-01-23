import { render } from '@testing-library/svelte';
import WatchlistItem from '../../src/component/WatchlistItem.svelte';

describe('Render Watchlist Item', () => {
  it('should render watchlist item', async () => {
    const { getByTestId } = render(WatchlistItem, {
      props: {
        platform: 'Platform',
      },
    });

    const watchlistItem = getByTestId('watchlist-item');

    expect(watchlistItem).toBeVisible();
  });

  it('should remove margin of itself', async () => {
    const { getByTestId } = render(WatchlistItem, {
      props: {
        platform: 'Platform',
      },
    });

    const watchlistItem = getByTestId('watchlist-item');

    expect(watchlistItem).toHaveStyle({
      margin: 0,
    });
  });

  it('should render watchlist item w/ large', async () => {
    const { getByTestId } = render(WatchlistItem, {
      props: {
        platform: 'Platform',
      },
    });

    const watchlistItem = getByTestId('watchlist-item');

    expect(watchlistItem).toHaveStyle({
      'font-size': 'var(--font-size-regular)',
    });
  });

  it('should render Fetching status w/ grey background', async () => {
    const { getByTestId } = render(WatchlistItem, {
      props: {
        platform: 'Platform',
        fetching: true,
      },
    });

    const watchlistItem = getByTestId('watchlist-item');

    expect(watchlistItem).toHaveTextContent('Platform');
    expect(watchlistItem).toHaveStyle({
      background: 'var(--fetching-color)',
    });
  });

  it('should render Minor Outage status w/ orange background', async () => {
    const { getByTestId } = render(WatchlistItem, {
      props: {
        platform: 'Platform',
        fetching: false,
        minor: true,
      },
    });

    const watchlistItem = getByTestId('watchlist-item');

    expect(watchlistItem).toHaveTextContent('Platform');
    expect(watchlistItem).toHaveStyle({
      background: 'var(--minor-outage-color)',
    });
  });

  it('should render Major Outage status w/ red background', async () => {
    const { getByTestId } = render(WatchlistItem, {
      props: {
        platform: 'Platform',
        fetching: false,
        major: true,
      },
    });

    const watchlistItem = getByTestId('watchlist-item');

    expect(watchlistItem).toHaveTextContent('Platform');
    expect(watchlistItem).toHaveStyle({
      background: 'var(--major-outage-color)',
    });
  });

  it('should render Operational status w/ green background', async () => {
    const { getByTestId } = render(WatchlistItem, {
      props: {
        platform: 'Platform',
        fetching: false,
      },
    });

    const watchlistItem = getByTestId('watchlist-item');

    expect(watchlistItem).toHaveTextContent('Platform');
    expect(watchlistItem).toHaveStyle({
      background: 'var(--operational-color)',
    });
  });

  it('should render Maintenance status w/ blue background', async () => {
    const { getByTestId } = render(WatchlistItem, {
      props: {
        platform: 'Platform',
        fetching: false,
        maintenance: true,
      },
    });

    const watchlistItem = getByTestId('watchlist-item');

    expect(watchlistItem).toHaveTextContent('Platform');
    expect(watchlistItem).toHaveStyle({
      background: 'var(--maintenance-color)',
    });
  });
});
