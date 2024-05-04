import { describe, it, expect } from "vitest";

import FormattedMessage from ".";
import customRender from "../../testing/customRender";

describe("FormattedMessage", () => {
  it("renders correct message in english for id SignIn.Title", async () => {
    const component = customRender(<FormattedMessage id="SignIn.Title" />, {
      locale: "en",
    });
    const message = await component.findByText("Sign in");

    expect(message).toBeTruthy();
    component.unmount();
  });

  it("renders correct message in english for id SignIn.Guide", async () => {
    const component = customRender(<FormattedMessage id="SignIn.Guide" />, {
      locale: "en",
    });
    const message = await component.findByText("Please sign in");

    expect(message).toBeTruthy();
    component.unmount();
  });

  it("renders correct message in finnish for id SignIn.Title", async () => {
    const component = customRender(<FormattedMessage id="SignIn.Title" />, {
      locale: "fi",
    });
    const message = await component.findByText("Kirjautuminen");

    expect(message).toBeTruthy();
    component.unmount();
  });

  it("renders correct message in finnish for id SignIn.Guide", async () => {
    const component = customRender(<FormattedMessage id="SignIn.Guide" />, {
      locale: "fi",
    });
    const message = await component.findByText("Kirjaudu sisään");

    expect(message).toBeTruthy();
    component.unmount();
  });
});
