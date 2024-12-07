import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Accordion",
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Single: Story = {
  args: {
    type: "single",
  },
  render: ({ type }) => (
    <Accordion type={type} collapsible className="w-[600px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>File explorer</AccordionTrigger>
        <AccordionContent>
          minecraft This is the namespace. Most of the time, this will not be
          changed since you want to change the base game textures. You might
          want to create a new namespace if you are creating textures for a mod.
          blockstates This is the first folder that is read by the game. You
          will change it if you want to create variated textures for a block or
          when you want to modify how some blocks react. For example if you want
          to create a custom model when the fence post has a tag
          waterlogged=true. font Contain properties for font. You will modify it
          when you want to create custom font or icons. An original use of this
          is if you want to create a guide for brewing when you open the brewing
          stand GUI, like this by WeNAN Studios. lang This is where you go to
          change anything that is written in the game. You will modify it if you
          want to create a new language, change a button text or modify the name
          of an item. models This is where all your block models are. This
          section with blockstates are the most complicated to understand and
          use propely. At first it will be used mostly to create variated
          textures, but it could allow you to create 3D items or custom block
          models. particle Will tell which textures to use for each particles.
          It could allow you to use more particle for the campfire if you want.
          shaders This is pretty new stuff and haven't had much time to play
          with it, but basically since 1.17, minecraft had some shader
          capability and this is where you go to change it. texts Contain some
          of the longer texts like the end credit or the splashes. textures This
          is where most of the fun is for texture pack creators. Contains every
          textures, except some of the realms one, that you can modify placed by
          categories. realms Some of the language files and textures that are
          specific to the realm.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
