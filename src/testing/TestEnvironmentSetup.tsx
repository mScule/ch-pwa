import { ReactNode, useEffect } from "react";
import { changeLocale } from "../store/slices/intlSlice";

import TestEnvironmentVariables from "../types/TestEnvironmentVariables";
import useAppDispatch from "../hooks/useAppDispatch";

type Props = TestEnvironmentVariables & {
  children: ReactNode;
};

export default function TestEnvironmentSetup({
  children,
  //theme,
  locale,
}: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeLocale(locale ?? "en"));
  }, [dispatch, locale]);

  return children;
}
