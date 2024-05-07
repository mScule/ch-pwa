import { ReactNode } from "react";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { store } from "../store";

import TestEnvironmentVariables from "../types/TestEnvironmentVariables";
import testMessages from "./testMessages";

export default function TestEnvironment({ locale }: TestEnvironmentVariables) {
  return function ({ children }: { children: ReactNode }) {
    return (
      <Provider store={store}>
        <IntlProvider locale={locale ?? "en"} messages={testMessages}>
          {children}
        </IntlProvider>
      </Provider>
    );
  };
}
