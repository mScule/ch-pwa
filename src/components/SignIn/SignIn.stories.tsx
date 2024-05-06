import { Meta, StoryObj } from "@storybook/react";

import SignIn from ".";

export default {
  title: "Components/SignIn",
  tags: ["autodocs"],
  component: SignIn,
} as Meta<typeof SignIn>;

export const Basic: StoryObj<typeof SignIn> = {
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
