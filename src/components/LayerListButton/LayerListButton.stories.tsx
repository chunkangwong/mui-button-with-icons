import { ComponentStory, ComponentMeta } from "@storybook/react";

import LayerListButton from "./index";

export default {
  title: "LayerListButton",
  component: LayerListButton,
} as ComponentMeta<typeof LayerListButton>;

const Template: ComponentStory<typeof LayerListButton> = (args) => (
  <LayerListButton {...args} />
);

export const Inactive = Template.bind({});
Inactive.args = {
  label: "LayerListButton",
  active: false,
  favorite: false,
  toPreload: false,
};

export const InactiveWithActiveIcon = Template.bind({});
InactiveWithActiveIcon.args = {
  label: "LayerListButton",
  active: false,
  favorite: true,
  toPreload: false,
};

export const Active = Template.bind({});
Active.args = {
  label: "LayerListButton",
  active: true,
  favorite: false,
  toPreload: false,
};

export const ActiveWithActiveIcon = Template.bind({});
ActiveWithActiveIcon.args = {
  label: "LayerListButton",
  active: true,
  favorite: false,
  toPreload: true,
};
