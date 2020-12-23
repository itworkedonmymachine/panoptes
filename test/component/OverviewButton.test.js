import { render } from "@testing-library/svelte";
import Button from "../../src/component/OverviewButton.svelte";

describe("Overview Button color rendering by status", () => {
  it("button should render as green if status is ok", async () => {
    const { getByTestId } = render(Button);

    const button = getByTestId("button");

    expect(button).toBeVisible();
    expect(button).toHaveStyle("color: #28a745");
  });

  it("button should render as yellow if it's minor incident", async () => {
    const { getByTestId } = render(Button, {
      props: {
        minor: true,
      },
    });

    const button = getByTestId("button");

    expect(button).toBeVisible();
    expect(button).toHaveClass("minor");
    expect(button).toHaveStyle("color: #df9913");
  });

  it("button should render as red if it's major incident", async () => {
    const { getByTestId } = render(Button, {
      props: {
        major: true,
      },
    });

    const button = getByTestId("button");

    expect(button).toBeVisible();
    expect(button).toHaveClass("major");
    expect(button).toHaveStyle("color: #cb0000");
  });
});