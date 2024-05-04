import { ReactNode } from "react";
import GlobalsProvider from "../providers/GlobalsProvider";
import TestEnvironmentVariables from "../types/TestEnvironmentVariables";
import TestEnvironmentSetup from "./TestEnvironmentSetup";

export default function TestEnvironment(props: TestEnvironmentVariables) {
  return function ({ children }: { children: ReactNode }) {
    return (
      <GlobalsProvider>
        <TestEnvironmentSetup {...props}>{children}</TestEnvironmentSetup>
      </GlobalsProvider>
    );
  };
}
