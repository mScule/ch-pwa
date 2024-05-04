import { ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";

import TestEnvironment from "./TestEnvironment";
import TestEnvironmentVariables from "../types/TestEnvironmentVariables";

export default function customRender(
  ui: ReactElement,
  environment?: TestEnvironmentVariables,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, {
    wrapper: TestEnvironment(environment ?? { locale: "en", theme: "dark" }),
    ...options,
  });
}
