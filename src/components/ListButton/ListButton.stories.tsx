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

export const InactiveWithIcons = Template.bind({});
InactiveWithIcons.args = {
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

export const HoveredInactiveWithIcons = Template.bind({});
HoveredInactiveWithIcons.args = {
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
HoveredInactiveWithIcons.parameters = { pseudo: { hover: true } };

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

export const ActiveWithIcons = Template.bind({});
ActiveWithIcons.args = {
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

export const HoveredActiveWithIcons = Template.bind({});
HoveredActiveWithIcons.args = {
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
HoveredActiveWithIcons.parameters = { pseudo: { hover: true } };
