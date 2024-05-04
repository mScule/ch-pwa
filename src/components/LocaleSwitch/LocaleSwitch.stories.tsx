import { Meta, StoryObj } from "@storybook/react";

import LocaleSwitch from ".";

const meta: Meta<typeof LocaleSwitch> = {
  title: "Components/LocaleSwitch",
  tags: ["autodocs"],
  component: LocaleSwitch,
};

export default meta;

type Story = StoryObj<typeof LocaleSwitch>;

export const Basic: Story = {};
