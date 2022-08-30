import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListButton from "./ListButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ListButton",
  component: ListButton,
} as ComponentMeta<typeof ListButton>;

const Template: ComponentStory<typeof ListButton> = (args) => (
  <ListButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "ListButton",
};

export const DefaultHover = Template.bind({});
DefaultHover.args = {
  label: "ListButton",
};
DefaultHover.parameters = {
  pseudo: {
    hover: true,
  },
};

export const Active = Template.bind({});
Active.args = {
  label: "ListButton",
  active: true,
};

export const ActiveHover = Template.bind({});
ActiveHover.args = {
  label: "ListButton",
  active: true,
};
ActiveHover.parameters = {
  pseudo: {
    hover: true,
  },
};
