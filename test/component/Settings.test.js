import { render } from '@testing-library/svelte';
import Settings from '../../src/component/Settings.svelte';

describe('Render settings', () => {
  it('should render container at center', async () => {
    const { getByTestId } = render(Settings);

    const settings = getByTestId('container');

    expect(settings).toBeVisible();
    expect(settings).toHaveStyle({
      position: 'relative',
      margin: '0 auto',
    });
  });

  it('should show settings title w/ large bold font', () => {
    const { getByTestId } = render(Settings);

    const title = getByTestId('title');

    expect(title).toBeVisible();
    expect(title).toHaveStyle({
      'font-size': 'var(--font-size-large)',
      'font-weight': 'var(--font-weight-bold)',
    });
  });
});

describe('Render options lists', () => {
  it('should show options w/ large light font', () => {
    const { getAllByTestId } = render(Settings);

    const options = getAllByTestId('option');

    options.forEach((option) => {
      expect(option).toBeVisible();
      expect(option).toHaveStyle({
        'font-size': 'var(--font-size-large)',
        'font-weight': 'var(--font-weight-light)',
      });
    });
  });

  it('should show option list', () => {
    const { getByTestId } = render(Settings);

    const optionList = getByTestId('option-list');

    expect(optionList).toBeVisible();
    expect(optionList).toHaveStyle({
      padding: '0',
      margin: '0',
    });
  });

  it('should option list have height of watch list & scrollable', () => {
    const { getByTestId } = render(Settings);

    const optionList = getByTestId('option-list');

    expect(optionList).toHaveStyle({
      height: 'calc(100vh - var(--header-height) - 70px)',
      overflow: 'scroll',
    });
  });

  it('should font for option have fixed line-height', async () => {
    const { getAllByTestId } = render(Settings);

    const options = getAllByTestId('option');

    options.forEach((option) => {
      expect(option).toHaveStyle({
        'line-height': '1.2',
      });
    });
  });

  it('should render icon at right-most & align vertically center if any', async () => {
    const { getAllByTestId } = render(Settings);

    const optionIcons = getAllByTestId('option-icon');

    optionIcons.forEach((optionIcon) => {
      expect(optionIcon).toHaveStyle({
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        display: 'flex',
        'align-items': 'center',
      });
    });
  });
});
