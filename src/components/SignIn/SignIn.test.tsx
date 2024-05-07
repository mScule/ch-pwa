import { describe, it, expect, afterEach } from "vitest";

import SignIn from ".";
import customRender from "../../testing/customRender";
import { cleanup } from "@testing-library/react";

describe("SignIn", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the signin button", () => {
    const component = customRender(<SignIn />);
    const button = component.getByText("SignIn.Method.Google");

    expect(button).toBeTruthy();
  });
});
