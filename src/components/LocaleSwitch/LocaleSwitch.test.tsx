import { describe, it, expect, afterEach } from "vitest";

import LocaleSwitch from ".";
import customRender from "../../testing/customRender";
import { cleanup } from "@testing-library/react";

describe("LocaleSwitch", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the switch and includes correct text", () => {
    const component = customRender(<LocaleSwitch />);

    const en = component.getByText("En");
    const fi = component.getByText("Fi");

    expect(en).toBeTruthy();
    expect(fi).toBeTruthy();
  });
});
