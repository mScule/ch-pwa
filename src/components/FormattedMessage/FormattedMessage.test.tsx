import { describe, it, expect, afterEach } from "vitest";

import FormattedMessage from ".";
import customRender from "../../testing/customRender";
import { cleanup } from "@testing-library/react";

describe("FormattedMessage", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders SignIn.Title", () => {
    const component = customRender(<FormattedMessage id="SignIn.Title" />);
    const message = component.getByText("SignIn.Title");

    expect(message).toBeTruthy();
  });

  it("renders SignIn.Guide", () => {
    const component = customRender(<FormattedMessage id="SignIn.Guide" />);
    const message = component.getByText("SignIn.Guide");

    expect(message).toBeTruthy();
  });

  it("renders SignIn.Guide", () => {
    const component = customRender(
      <FormattedMessage id="SignIn.Method.Google" />,
    );
    const message = component.getByText("SignIn.Method.Google");

    expect(message).toBeTruthy();
  });
});
