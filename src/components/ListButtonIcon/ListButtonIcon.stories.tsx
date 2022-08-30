import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListButtonIcon from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ListButtonIcon",
  component: ListButtonIcon,
} as ComponentMeta<typeof ListButtonIcon>;

const Template: ComponentStory<typeof ListButtonIcon> = (args) => (
  <ListButtonIcon {...args} />
);

export const Inactive = Template.bind({});
Inactive.args = {
  children: "star",
  active: false,
};

export const InactiveHover = Template.bind({});
InactiveHover.args = { children: "star" };
InactiveHover.parameters = {
  pseudo: {
    hover: true,
  },
};

export const Active = Template.bind({});
Active.args = {
  children: "star",
  active: true,
};

export const ActiveHover = Template.bind({});
ActiveHover.args = { children: "star", active: true };
ActiveHover.parameters = {
  pseudo: {
    hover: true,
  },
};
