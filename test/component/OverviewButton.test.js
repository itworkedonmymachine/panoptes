import { render } from '@testing-library/svelte';
import Button from '../../src/component/OverviewButton.svelte';
import ButtonSlotTest from './OverviewButtonSlotTest.svelte';

describe('Render button color depend on status', () => {
  it('should render as green if status is ok', async () => {
    const { getByTestId } = render(Button);

    const button = getByTestId('button');

    expect(button).toBeVisible();
    expect(button).toHaveStyle('color: #28a745');
  });

  it("should render as yellow if it's minor incident", async () => {
    const { getByTestId } = render(Button, {
      props: {
        minor: true,
      },
    });

    const button = getByTestId('button');

    expect(button).toBeVisible();
    expect(button).toHaveClass('minor');
    expect(button).toHaveStyle('color: #df9913');
  });

  it("should render as red if it's major incident", async () => {
    const { getByTestId } = render(Button, {
      props: {
        major: true,
      },
    });

    const button = getByTestId('button');

    expect(button).toBeVisible();
    expect(button).toHaveClass('major');
    expect(button).toHaveStyle('color: #cb0000');
  });
});

describe('Show icon or logo if provided', () => {
  it('should render icon if provided', async () => {
    const { getByTestId } = render(ButtonSlotTest, {
      props: {
        component: Button,
        icon: true,
      },
    });

    expect(() => getByTestId('icon')).not.toThrow();

    const icon = getByTestId('icon');

    expect(icon).toBeVisible();
    expect(icon.nextElementSibling).toBeNull();
  });

  it('should render logo if provided', async () => {
    const { getByTestId } = render(ButtonSlotTest, {
      props: {
        component: Button,
        logo: true,
      },
    });

    expect(() => getByTestId('logo')).not.toThrow();

    const logo = getByTestId('logo');

    expect(logo).toBeVisible();
    expect(logo.nextElementSibling).toBeNull();
  });

  it('should render icon and logo if provided', async () => {
    const { getByTestId } = render(ButtonSlotTest, {
      props: {
        component: Button,
        icon: true,
        logo: true,
      },
    });

    expect(() => getByTestId('icon')).not.toThrow();
    expect(() => getByTestId('logo')).not.toThrow();

    const icon = getByTestId('icon');
    const logo = getByTestId('logo');

    expect(icon).toBeVisible();
    expect(logo).toBeVisible();
  });

  it('should render logo next to icon', async () => {
    const { getByTestId } = render(ButtonSlotTest, {
      props: {
        component: Button,
        icon: true,
        logo: true,
      },
    });

    expect(() => getByTestId('icon')).not.toThrow();
    expect(() => getByTestId('logo')).not.toThrow();

    const icon = getByTestId('icon');
    const logo = getByTestId('logo');

    expect(icon.nextElementSibling).toEqual(logo);
  });
});
