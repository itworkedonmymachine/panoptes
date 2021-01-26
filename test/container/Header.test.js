import { get } from 'svelte/store';
import { fireEvent, render } from '@testing-library/svelte';
import Header from '../../src/container/Header.svelte';
import { showSearchBar, showSettings } from '../../src/store/modalStore';

describe('Render Header', () => {
  it('should have background as global color', async () => {
    const { getByTestId } = render(Header);

    const header = getByTestId('header');

    expect(header).toHaveStyle({
      background: 'var(--background-color)',
    });
  });

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

  it('should make cursor as pointer if hovered on search, settings', async () => {
    const { getByTestId } = render(Header);

    const search = getByTestId('search');
    const settings = getByTestId('settings');

    expect(search).toHaveStyle({
      cursor: 'pointer',
    });
    expect(settings).toHaveStyle({
      cursor: 'pointer',
    });
  });
});

describe('Show modals when search | settings are clicked', () => {
  it('should set showSearchBar as true when user clicks search', async () => {
    showSearchBar.set(false);

    const { getByTestId } = render(Header);

    const search = getByTestId('search');

    expect(get(showSearchBar)).toBe(false);
    await fireEvent.click(search);
    expect(get(showSearchBar)).toBe(true);
  });

  it('should set showSettings as true when user clicks settings', async () => {
    showSettings.set(false);

    const { getByTestId } = render(Header);

    const settings = getByTestId('settings');

    expect(get(showSettings)).toBe(false);
    await fireEvent.click(settings);
    expect(get(showSettings)).toBe(true);
  });
});
