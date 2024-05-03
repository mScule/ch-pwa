import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import SignIn from ".";

describe("SignIn", () => {
    it("renders the signin button", async () => {
        const component = render(<SignIn />);
        const result = await component.findAllByText("Sign in with Google");

        expect(result.length).eq(1);
    });
});