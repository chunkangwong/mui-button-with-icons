import { configureStore } from "@reduxjs/toolkit";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { getWidgetsSlice, Widget } from "../../features/widgets/widgetsSlice";
import WidgetList from "./index";

export const MockedState: Widget[] = [
  { name: "widget1", title: "Widget 1", favourite: false, active: false },
  { name: "widget2", title: "Widget 2", favourite: true, active: false },
  { name: "widget3", title: "Widget 3", favourite: false, active: true },
  { name: "widget4", title: "Widget 4", favourite: true, active: true },
];

const Mockstore = ({
  initialState,
  children,
}: {
  initialState: Widget[];
  children: React.ReactNode;
}) => (
  <Provider
    store={configureStore({
      reducer: {
        widgets: getWidgetsSlice(initialState).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export default {
  title: "WidgetList",
  component: WidgetList,
  excludeStories: /.*MockedState$/,
  decorators: [
    (story) => (
      <Mockstore initialState={MockedState}>
        <div style={{ width: "200px" }}>{story()}</div>
      </Mockstore>
    ),
  ],
} as ComponentMeta<typeof WidgetList>;

const Template: ComponentStory<typeof WidgetList> = (args) => (
  <WidgetList {...args} />
);

export const Default = Template.bind({});
