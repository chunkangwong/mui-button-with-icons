import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListButton from "./index";
import ListButtonIcon from "../ListButtonIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
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
};

export const InactiveWithInactiveIcon = Template.bind({});
InactiveWithInactiveIcon.args = {
  label: "ListButton",
  active: false,
  icons: [
    {
      active: false,
      iconName: "star",
    },
  ],
};

export const InactiveWithActiveIcon = Template.bind({});
InactiveWithActiveIcon.args = {
  label: "ListButton",
  active: false,
  icons: [
    {
      active: true,
      iconName: "star",
    },
  ],
};

export const Active = Template.bind({});
Active.args = {
  label: "ListButton",
  active: true,
};

export const ActiveWithInactiveIcon = Template.bind({});
ActiveWithInactiveIcon.args = {
  label: "ListButton",
  active: true,
  icons: [
    {
      active: false,
      iconName: "star",
    },
  ],
};

export const ActiveWithActiveIcon = Template.bind({});
ActiveWithActiveIcon.args = {
  label: "ListButton",
  active: true,
  icons: [
    {
      active: true,
      iconName: "star",
    },
  ],
};
