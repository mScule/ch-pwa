import { Meta, StoryObj } from "@storybook/react";

import FormattedMessage from ".";
import { Typography } from "@mui/material";

const meta: Meta<typeof FormattedMessage> = {
  title: "Components/FormattedMessage",
  tags: ["autodocs"],
  component: FormattedMessage,
  decorators: [(Story) => <Typography>{Story()}</Typography>],
};

export default meta;

type Story = StoryObj<typeof FormattedMessage>;

export const SignInTitleMessage: Story = {
  args: {
    id: "SignIn.Title",
  },
};

export const SignInGuideMessage: Story = {
  args: {
    id: "SignIn.Guide",
  },
};

export const SignInGoogleMethodMessage: Story = {
  args: {
    id: "SignIn.Method.Google",
  },
};
