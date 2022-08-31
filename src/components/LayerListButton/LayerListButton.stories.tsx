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

export const InactiveFavourite = Template.bind({});
InactiveFavourite.args = {
  label: "LayerListButton",
  active: false,
  favorite: true,
  toPreload: false,
};

export const InactivePreload = Template.bind({});
InactivePreload.args = {
  label: "LayerListButton",
  active: false,
  favorite: false,
  toPreload: true,
};

export const InactiveFavouritePreload = Template.bind({});
InactiveFavouritePreload.args = {
  label: "LayerListButton",
  active: false,
  favorite: true,
  toPreload: true,
};

export const Active = Template.bind({});
Active.args = {
  label: "LayerListButton",
  active: true,
  favorite: false,
  toPreload: false,
};

export const ActiveFavourite = Template.bind({});
ActiveFavourite.args = {
  label: "LayerListButton",
  active: true,
  favorite: true,
  toPreload: false,
};

export const ActivePreload = Template.bind({});
ActivePreload.args = {
  label: "LayerListButton",
  active: true,
  favorite: false,
  toPreload: true,
};

export const ActiveFavouritePreload = Template.bind({});
ActiveFavouritePreload.args = {
  label: "LayerListButton",
  active: true,
  favorite: true,
  toPreload: true,
};
