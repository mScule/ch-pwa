import { ReactNode, useEffect } from "react";
import { IntlProvider as Provider } from "react-intl";

import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";

import { changeMessages } from "../../store/slices/intlSlice";

import Messages from "../../types/Messages";
import Locale from "../../types/Locale";

type Props = {
  children: ReactNode;
};

async function loadMessages(locale: Locale): Promise<Messages> {
  switch (locale) {
    case "en":
      return (await import("../../lang/en")).default;
    case "fi":
      return (await import("../../lang/fi")).default;
  }
}

export default function IntlProvider({ children }: Props) {
  const dispatch = useAppDispatch();
  const { locale, messages } = useAppSelector((state) => state.intl);

  useEffect(() => {
    loadMessages(locale).then((messages: Messages) => {
      dispatch(changeMessages(messages));
    });
  }, [locale]);

  return (
    <Provider locale={locale} messages={messages}>
      {children}
    </Provider>
  );
}
