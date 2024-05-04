import { ReactElement, ReactNode, useEffect } from "react";
import { RenderOptions, render } from "@testing-library/react";
import GlobalsProvider from "../providers/GlobalsProvider";

import Locale from "../types/Locale";
import Theme from "../types/Theme";
import useAppDispatch from "../hooks/useAppDispatch";
import { changeLocale } from "../store/slices/intlSlice";

type Environment = { theme?: Theme; locale?: Locale };

type Props = Environment & { children: ReactNode };

function TestEnvironmentSetup({ children, theme, locale }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeLocale(locale ?? "en"));
  }, []);

  return children;
}

function TestEnvironment(props: Environment) {
  return function ({ children }: { children: ReactNode }) {
    return (
      <GlobalsProvider>
        <TestEnvironmentSetup {...props}>{children}</TestEnvironmentSetup>
      </GlobalsProvider>
    );
  };
}

export default function customRender(
  ui: ReactElement,
  environment?: Environment,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, {
    wrapper: TestEnvironment(environment ?? { locale: "en", theme: "dark" }),
    ...options,
  });
}
