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

  it("should inner viewport have enough width and viewport's height", async () => {
    const { getByTestId } = render(StatusTicker);

    const statusTickerViewportInner = getByTestId(
      'status-ticker-viewport-inner'
    );

    expect(statusTickerViewportInner).toHaveStyle({
      width: '10000px',
      height: '100%',
    });
  });

  it('should have two ticker item list for loop seamlessly', async () => {
    const { getByTestId } = render(StatusTicker);

    const statusTickerViewportInner = getByTestId(
      'status-ticker-viewport-inner'
    );

    expect(statusTickerViewportInner.childElementCount).toBe(2);
  });
});

describe('Render Status Ticker', () => {
  it('should render status ticker items in row direction', async () => {
    const { getAllByTestId } = render(StatusTicker);

    const statusTickers = getAllByTestId('status-ticker');

    statusTickers.forEach((statusTicker) => {
      expect(statusTicker).toHaveStyle({
        display: 'flex',
        'flex-direction': 'row',
      });
    });
  });

  it('number of status ticker items should equal to provided data length', async () => {
    const { getAllByTestId } = render(StatusTicker, {
      props: {
        statusTickerDatas: statusTickerMockDatas,
      },
    });

    const statusTickers = getAllByTestId('status-ticker');

    statusTickers.forEach((statusTicker) => {
      expect(statusTicker.childElementCount).toBe(statusTickerMockDatas.length);
    });
  });

  it('number of status ticker animates infinitely', async () => {
    const { getAllByTestId } = render(StatusTicker, {
      props: {
        statusTickerDatas: statusTickerMockDatas,
      },
    });

    const statusTickers = getAllByTestId('status-ticker');

    statusTickers.forEach((statusTicker) => {
      expect(statusTicker).toHaveStyle({
        'animation-iteration-count': 'infinite',
      });
    });
  });
});
