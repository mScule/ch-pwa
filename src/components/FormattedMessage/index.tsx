import { FormattedMessage as IntlFormattedMessage } from "react-intl";
import Messages from "../../types/Messages";

type Props = {
  id: keyof Messages;
  values?: Record<string, string | number | boolean>;
};

export default function FormattedMessage({ id, values }: Props) {
  return <IntlFormattedMessage id={id} values={values} defaultMessage=" " />;
}
