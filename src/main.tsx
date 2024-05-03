import React from "react";
import ReactDOM from "react-dom/client";

import { Stack } from "@mui/material";
import SignIn from "./components/SignIn";

import "./globals.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Stack direction="column" justifyContent="center" alignItems="center">
      <SignIn />
    </Stack>
  </React.StrictMode>
);
