import { Meta, StoryObj } from "@storybook/react";

import SignIn from ".";

const meta: Meta<typeof SignIn> = {
  title: "Components/SignIn",
  tags: ["autodocs"],
  component: SignIn,
};

export default meta;

type Story = StoryObj<typeof SignIn>;

export const Basic: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
  },
  args: {
    onClick: () => {
      alert("Signing in ...");
    },
  },
};
