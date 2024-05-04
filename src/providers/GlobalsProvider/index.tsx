import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../store";
import IntlProvider from "../IntlProvider";

type Props = {
  children: ReactNode;
};

export default function GlobalsProvider({ children }: Props) {
  return (
    <ReduxProvider store={store}>
      <IntlProvider>{children}</IntlProvider>
    </ReduxProvider>
  );
}
