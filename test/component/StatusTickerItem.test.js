import { render } from '@testing-library/svelte';
import StatusTickerItem from '../../src/component/StatusTickerItem.svelte';

describe('Render Container', () => {
  it('should render platform and status in row direction & align center', async () => {
    const { getByTestId } = render(StatusTickerItem, {
      props: {
        platform: 'Test',
      },
    });

    const statusTickerItem = getByTestId('status-ticker-item');

    expect(statusTickerItem).toHaveStyle({
      display: 'flex',
      'flex-direction': 'row',
      'align-items': 'center',
    });
  });

  it('should render Ticker Item container w/ padding', async () => {
    const { getByTestId } = render(StatusTickerItem, {
      props: {
        platform: 'Test',
      },
    });

    const statusTickerItem = getByTestId('status-ticker-item');

    expect(statusTickerItem).toHaveStyle({
      padding: '0 10px',
    });
  });
});

describe('Render Platform', () => {
  it('should render platform w/ font-weight bold', async () => {
    const { getByTestId } = render(StatusTickerItem, {
      props: {
        platform: 'Test',
      },
    });

    const platform = getByTestId('platform');

    expect(platform).toBeVisible();
    expect(platform).toHaveStyle({
      'font-weight': 'var(--font-weight-bold)',
    });
  });
});

describe('Render Status', () => {
  it('should render status w/ font-weight light', async () => {
    const { getByTestId } = render(StatusTickerItem, {
      props: {
        platform: 'Test',
      },
    });

    const status = getByTestId('status');

    expect(status).toBeVisible();
    expect(status).toHaveStyle({
      'font-weight': 'var(--font-weight-light)',
    });
  });

  it('should render status next to platform w/ 6px gap', async () => {
    const { getByTestId } = render(StatusTickerItem, {
      props: {
        platform: 'Test',
      },
    });

    const platform = getByTestId('platform');
    const status = getByTestId('status');

    expect(platform.nextElementSibling).toEqual(status);
    expect(platform).toHaveStyle({
      'margin-right': '6px',
    });
  });

  it('should render status w/ padding', async () => {
    const { getByTestId } = render(StatusTickerItem, {
      props: {
        platform: 'Test',
        fetching: true,
      },
    });

    const status = getByTestId('status');

    expect(status).toHaveTextContent('Fetching');
    expect(status).toHaveStyle({
      padding: '1px 2px',
    });
  });

  it('should render Fetching status w/ text', async () => {
    const { getByTestId } = render(StatusTickerItem, {
      props: {
        platform: 'Test',
        fetching: true,
      },
    });

    const status = getByTestId('status');

    expect(status).toHaveTextContent('Fetching');
    expect(status).toHaveStyle({
      background: 'var(--fetching-color)',
    });
  });

  it('should render Minor Outage status w/ text', async () => {
    const { getByTestId } = render(StatusTickerItem, {
      props: {
        platform: 'Test',
        fetching: false,
        minor: true,
      },
    });

    const status = getByTestId('status');

    expect(status).toHaveTextContent('Minor Outage');
    expect(status).toHaveStyle({
      background: 'var(--minor-outage-color)',
    });
  });

  it('should render Major Outage status w/ text', async () => {
    const { getByTestId } = render(StatusTickerItem, {
      props: {
        platform: 'Test',
        fetching: false,
        major: true,
      },
    });

    const status = getByTestId('status');

    expect(status).toHaveTextContent('Major Outage');
    expect(status).toHaveStyle({
      background: 'var(--major-outage-color)',
    });
  });

  it('should render Operational status w/ text', async () => {
    const { getByTestId } = render(StatusTickerItem, {
      props: {
        platform: 'Test',
        fetching: false,
      },
    });

    const status = getByTestId('status');

    expect(status).toHaveTextContent('Operational');
    expect(status).toHaveStyle({
      background: 'var(--operational-color)',
    });
  });
});
