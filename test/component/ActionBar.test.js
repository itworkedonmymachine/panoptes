import { render } from '@testing-library/svelte';
import ActionBar from '../../src/component/ActionBar.svelte';

describe('Render search bar', () => {
  it('should placed at top, w/ 0 height', () => {
    const { getByTestId } = render(ActionBar);

    const actionBar = getByTestId('action-bar');

    expect(actionBar).toHaveStyle({
      top: 0,
      height: 0,
    });
  });

  it('should locate contents to upper side', () => {
    const { getByTestId } = render(ActionBar);

    const actionBar = getByTestId('action-bar');

    expect(actionBar).toHaveStyle({
      display: 'flex',
      'align-items': 'flex-end',
    });
  });

  it('should container locate actions at both sides', () => {
    const { getByTestId } = render(ActionBar);

    const container = getByTestId('container');

    expect(container).toHaveStyle({
      flex: 1,
      display: 'flex',
      'justify-content': 'space-between',
    });
  });

  it('should container have 10px padding on top & bottom', () => {
    const { getByTestId } = render(ActionBar);

    const container = getByTestId('container');

    expect(container).toHaveStyle({
      padding: '10px 0',
    });
  });

  it('should render actions w/ regular light secondary color', async () => {
    const { getByTestId } = render(ActionBar);

    const search = getByTestId('search');
    const settings = getByTestId('settings');

    expect(search).toHaveStyle({
      'font-size': 'var(--font-size-regular)',
      'font-weight': 'var(--font-weight-light)',
      color: 'var(--secondary-font-color)',
    });
    expect(settings).toHaveStyle({
      'font-size': 'var(--font-size-regular)',
      'font-weight': 'var(--font-weight-light)',
      color: 'var(--secondary-font-color)',
    });
  });

  it('should render actions at vertically center', async () => {
    const { getByTestId } = render(ActionBar);

    const search = getByTestId('search');
    const settings = getByTestId('settings');

    expect(search).toHaveStyle({
      margin: 'auto 0',
    });
    expect(settings).toHaveStyle({
      margin: 'auto 0',
    });
  });

  it('should make cursor as pointer if hovered on search', async () => {
    const { getByTestId } = render(ActionBar);

    const search = getByTestId('search');

    expect(search).toHaveStyle({
      cursor: 'pointer',
    });
  });
});
