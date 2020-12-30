import { render } from '@testing-library/svelte';
import Header from '../../src/container/Header.svelte';

describe('Render Header', () => {
  it('should render search, title, setting', async () => {
    const { getByTestId } = render(Header);

    const title = getByTestId('title');
    const search = getByTestId('search');
    const settings = getByTestId('settings');

    expect(title).toBeVisible();
    expect(search).toBeVisible();
    expect(settings).toBeVisible();
  });

  it('should render search, title, setting sequentially', async () => {
    const { getByTestId } = render(Header);

    const title = getByTestId('title');
    const search = getByTestId('search');
    const settings = getByTestId('settings');

    expect(search.nextElementSibling).toEqual(title);
    expect(title.nextElementSibling).toEqual(settings);
  });

  it('should render title w/ xlarge bold, others w/ regular light', async () => {
    const { getByTestId } = render(Header);

    const title = getByTestId('title');
    const search = getByTestId('search');
    const settings = getByTestId('settings');

    expect(title).toHaveStyle({
      'font-size': 'var(--font-size-xlarge)',
      'font-weight': 'var(--font-weight-bold)',
    });
    expect(search).toHaveStyle({
      'font-size': 'var(--font-size-regular)',
      'font-weight': 'var(--font-weight-light)',
    });
    expect(settings).toHaveStyle({
      'font-size': 'var(--font-size-regular)',
      'font-weight': 'var(--font-weight-light)',
    });
  });

  it('should render search, title, settings at vertically center', async () => {
    const { getByTestId } = render(Header);

    const title = getByTestId('title');
    const search = getByTestId('search');
    const settings = getByTestId('settings');

    expect(title).toHaveStyle({
      margin: 'auto 0',
    });
    expect(search).toHaveStyle({
      margin: 'auto 0',
    });
    expect(settings).toHaveStyle({
      margin: 'auto 0',
    });
  });
});
