import { render } from '@testing-library/svelte';
import StatusTicker from '../../src/component/StatusTicker.svelte';

const statusTickerMockDatas = [
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
];

describe('Render Viewport', () => {
  it('should hide contents which overflows viewport', async () => {
    const { getByTestId } = render(StatusTicker);

    const statusTickerViewport = getByTestId('status-ticker-viewport');

    expect(statusTickerViewport).toHaveStyle({
      overflow: 'hidden',
    });
  });

  it('should sizing w/ border-box', async () => {
    const { getByTestId } = render(StatusTicker);

    const statusTickerViewport = getByTestId('status-ticker-viewport');

    expect(statusTickerViewport).toHaveStyle({
      'box-sizing': 'border-box',
    });
  });

  it('should have 2px border on top & bottom of viewport', async () => {
    const { getByTestId } = render(StatusTicker);

    const statusTickerViewport = getByTestId('status-ticker-viewport');

    expect(statusTickerViewport).toHaveStyle({
      'border-top': '2px solid #000000',
      'border-bottom': '2px solid #000000',
    });
  });
});

describe('Render Status Ticker', () => {
  it('should render status ticker items in row direction', async () => {
    const { getByTestId } = render(StatusTicker);

    const statusTicker = getByTestId('status-ticker');

    expect(statusTicker).toHaveStyle({
      display: 'flex',
      'flex-direction': 'row',
    });
  });

  it('number of status ticker items should equal to provided data length', async () => {
    const { getByTestId } = render(StatusTicker, {
      props: {
        statusTickerDatas: statusTickerMockDatas,
      },
    });

    const statusTicker = getByTestId('status-ticker');

    expect(statusTicker.children.length).toBe(statusTickerMockDatas.length);
  });
});
