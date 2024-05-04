import React from "react";
import type { Preview } from "@storybook/react";
import GlobalsProvider from "../src/providers/GlobalsProvider";
import LocaleSwitch from "../src/components/LocaleSwitch";
import { Divider, Stack, Typography } from "@mui/material";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <GlobalsProvider>
        <Stack direction="column" gap={2}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography>Environment:</Typography>
            <LocaleSwitch />
          </Stack>
          <Divider />
          <Story />
        </Stack>
      </GlobalsProvider>
    ),
  ],
};

export default preview;
