import { Meta, StoryObj } from "@storybook/react";

import FormattedMessage from ".";
import { Typography } from "@mui/material";

export default {
  title: "Components/FormattedMessage",
  tags: ["autodocs"],
  component: FormattedMessage,
  decorators: [(Story) => <Typography>{Story()}</Typography>],
} as Meta<typeof FormattedMessage>;

export const SignInTitleMessage: StoryObj<typeof FormattedMessage> = {
  args: {
    id: "SignIn.Title",
  },
};

export const SignInGuideMessage: StoryObj<typeof FormattedMessage> = {
  args: {
    id: "SignIn.Guide",
  },
};

export const SignInGoogleMethodMessage: StoryObj<typeof FormattedMessage> = {
  args: {
    id: "SignIn.Method.Google",
  },
};
