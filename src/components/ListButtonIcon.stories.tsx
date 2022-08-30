import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListButtonIcon from "./ListButtonIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ListButtonIcon",
  component: ListButtonIcon,
} as ComponentMeta<typeof ListButtonIcon>;

const Template: ComponentStory<typeof ListButtonIcon> = (args) => (
  <ListButtonIcon {...args} />
);

export const Inactive = Template.bind({});
Inactive.args = {};

export const InactiveHover = Template.bind({});
InactiveHover.args = {};
InactiveHover.parameters = {
  pseudo: {
    hover: true,
  },
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};

export const ActiveHover = Template.bind({});
ActiveHover.args = { active: true };
ActiveHover.parameters = {
  pseudo: {
    hover: true,
  },
};
