import { describe, it, expect } from "vitest";

import LocaleSwitch from ".";
import customRender from "../../testing/customRender";

describe("LocaleSwitch", () => {
  it("renders the switch and includes correct text", async () => {
    const component = customRender(<LocaleSwitch />, { locale: "en" });

    const en = await component.findByText("En");
    const fi = await component.findByText("Fi");

    expect(en).toBeTruthy();
    expect(fi).toBeTruthy();

    component.unmount();
  });
});
