import { ComponentStory, ComponentMeta } from "@storybook/react";

import WidgetListButton from "./index";

export default {
  title: "WidgetListButton",
  component: WidgetListButton,
} as ComponentMeta<typeof WidgetListButton>;

const Template: ComponentStory<typeof WidgetListButton> = (args) => (
  <WidgetListButton {...args} />
);

export const Inactive = Template.bind({});
Inactive.args = {
  label: "WidgetListButton",
  active: false,
  favorite: false,
};

export const InactiveWithActiveIcon = Template.bind({});
InactiveWithActiveIcon.args = {
  label: "WidgetListButton",
  active: false,
  favorite: true,
};

export const Active = Template.bind({});
Active.args = {
  label: "WidgetListButton",
  active: true,
  favorite: false,
};

export const ActiveWithActiveIcon = Template.bind({});
ActiveWithActiveIcon.args = {
  label: "WidgetListButton",
  active: true,
  favorite: true,
};
