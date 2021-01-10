import { fireEvent, render } from '@testing-library/svelte';
import Modal from '../../src/component/Modal.svelte';
import ModalSlotTest from './ModalSlotTest.svelte';

describe('Render Modal overlay', () => {
  it('should overlay covers whole screen', async () => {
    const { getByTestId } = render(Modal);

    const overlay = getByTestId('overlay');

    expect(overlay).toHaveStyle({
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    });
  });

  it('should overlay have white background color', () => {
    const { getByTestId } = render(Modal);

    const overlay = getByTestId('overlay');

    expect(overlay).toHaveStyle({
      background: '#FFFFFF',
    });
  });

  it('should overlay have little transparency', () => {
    const { getByTestId } = render(Modal);

    const overlay = getByTestId('overlay');

    expect(overlay).toHaveStyle({
      opacity: 0.9,
    });
  });

  it('should have high z-index', () => {
    const { getByTestId } = render(Modal);

    const overlay = getByTestId('overlay');
    const overlayStyle = getComputedStyle(overlay);
    const zIndex = parseInt(overlayStyle.zIndex, 10);

    expect(zIndex).toBeGreaterThan(99);
  });
});

describe('Render Modal', () => {
  it('should container have greater z-index than overlay', async () => {
    const { getByTestId } = render(Modal);

    const overlay = getByTestId('overlay');
    const container = getByTestId('container');
    const overlayStyle = getComputedStyle(overlay);
    const containerStyle = getComputedStyle(container);
    const overlayZIndex = parseInt(overlayStyle.zIndex, 10);
    const containerZIndex = parseInt(containerStyle.zIndex, 10);

    expect(containerZIndex).toBeGreaterThan(overlayZIndex);
  });
});

describe('Render Cancel button', () => {
  it('should cancel button be visible', () => {
    const { getByTestId } = render(Modal);

    const cancelButton = getByTestId('cancel-button');

    expect(cancelButton).toBeVisible();
  });

  it('should render cancel button at bottom of button container', () => {
    const { getByTestId } = render(Modal);

    const cancelButton = getByTestId('cancel-button');
    const cancelButtonContainer = getByTestId('cancel-button-container');

    expect(cancelButtonContainer).toHaveStyle({
      position: 'relative',
    });
    expect(cancelButton).toHaveStyle({
      position: 'absolute',
      bottom: '0',
    });
  });

  it('should close modal if cancel button is clicked', async () => {
    const { getByTestId } = render(Modal);

    const cancelButton = getByTestId('cancel-button');
    const overlay = getByTestId('overlay');

    await fireEvent.click(cancelButton);

    expect(overlay).not.toBeVisible();
  });
});

describe('Render Modal Slot', () => {
  it('should rendered slot visible', async () => {
    const { getByTestId } = render(ModalSlotTest, {
      props: {
        component: Modal,
      },
    });

    expect(() => getByTestId('slot')).not.toThrow();

    const slot = getByTestId('slot');

    expect(slot).toBeVisible();
  });
});
