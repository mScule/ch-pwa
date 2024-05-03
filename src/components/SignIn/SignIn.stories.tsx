import { Meta, StoryObj } from "@storybook/react";

import SignIn from ".";

const meta: Meta<typeof SignIn> = {
  title: "Components/SignIn",
  component: SignIn,
};

export default meta;

type Story = StoryObj<typeof SignIn>;

export const Basic: Story = {
  args: {
    onClick: () => alert("Signing in ...")
  }
};
