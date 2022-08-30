import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListButton from "./index";

export default {
  title: "ListButton",
  component: ListButton,
} as ComponentMeta<typeof ListButton>;

const Template: ComponentStory<typeof ListButton> = (args) => (
  <ListButton {...args} />
);

export const Inactive = Template.bind({});
Inactive.args = {
  label: "ListButton",
  active: false,
  icons: [
    {
      active: false,
      iconName: "preload",
    },
    {
      active: false,
      iconName: "favourite",
    },
  ],
};

export const InactiveWithActiveIcon = Template.bind({});
InactiveWithActiveIcon.args = {
  label: "ListButton",
  active: false,
  icons: [
    {
      active: false,
      iconName: "preload",
    },
    {
      active: true,
      iconName: "favourite",
    },
  ],
};

export const Active = Template.bind({});
Active.args = {
  label: "ListButton",
  active: true,
  icons: [
    {
      active: false,
      iconName: "preload",
    },
    {
      active: false,
      iconName: "favourite",
    },
  ],
};

export const ActiveWithActiveIcon = Template.bind({});
ActiveWithActiveIcon.args = {
  label: "ListButton",
  active: true,
  icons: [
    {
      active: false,
      iconName: "preload",
    },
    {
      active: true,
      iconName: "favourite",
    },
  ],
};
