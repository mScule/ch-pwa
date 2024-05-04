import React from "react";
import ReactDOM from "react-dom/client";

import GlobalsProvider from "./providers/GlobalsProvider";
import "./globals.css";

import { Stack } from "@mui/material";
import SignIn from "./components/SignIn";
import LocaleSwitch from "./components/LocaleSwitch";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <GlobalsProvider>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <SignIn />
          <LocaleSwitch />
        </Stack>
      </GlobalsProvider>
    </React.StrictMode>,
  );
}
