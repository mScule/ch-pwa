import { describe, it, expect } from "vitest";

import SignIn from ".";
import customRender from "../../testing/customRender";

describe("SignIn", () => {
  it("renders the signin button in english", async () => {
    const component = customRender(<SignIn />, { locale: "en" });
    const button = await component.findByText("Sign in with Google");

    expect(button).toBeTruthy();
    component.unmount();
  });

  it("renders the signin button in finnish", async () => {
    const component = customRender(<SignIn />, { locale: "fi" });
    const button = await component.findByText("Kirjaudu Google tunnuksella");

    expect(button).toBeTruthy();
    component.unmount();
  });
});
