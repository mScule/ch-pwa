import { Stack, Switch, Typography } from "@mui/material";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { changeLocale } from "../../store/slices/intlSlice";

export default function LocaleSwitch() {
  const dispatch = useAppDispatch();
  const locale = useAppSelector((state) => state.intl.locale);

  function switchLanguage() {
    dispatch(changeLocale(locale === "fi" ? "en" : "fi"));
  }

  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Typography>En</Typography>
      <Switch checked={locale === "fi"} onChange={switchLanguage} />
      <Typography>Fi</Typography>
    </Stack>
  );
}
