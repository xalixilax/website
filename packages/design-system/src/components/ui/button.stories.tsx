import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./button";
import { Sun } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: "select" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Single: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Button variant="default">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="indigo">Button</Button>
      <Button variant="ghost">Button</Button>
    </div>
  ),
  args: {
    variant: "destructive",
    children: "Button",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Button size="sm">Button</Button>
      <Button size="default">Button</Button>
    </div>
  ),
  args: {
    variant: "indigo",
    children: "Button",
  },
};

export const Icons: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Button size="icon">
        <Sun />
      </Button>
    </div>
  ),
  args: {
    variant: "ghost",
    children: "Button",
  },
};
