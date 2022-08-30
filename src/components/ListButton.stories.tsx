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

export const Active = Template.bind({});
Active.args = {
  label: "ListButton",
  active: true,
};
