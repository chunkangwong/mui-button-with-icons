import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { Widget } from "../../features/widgets/widgetsSlice";
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
        widgets: createSlice({
          name: "widgets",
          initialState: initialState,
          reducers: {},
        }).reducer,
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
  decorators: [(story) => <div style={{ width: "200px" }}>{story()}</div>],
} as ComponentMeta<typeof WidgetList>;

const Template: ComponentStory<typeof WidgetList> = (args) => (
  <WidgetList {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (story) => {
    return <Mockstore initialState={MockedState}>{story()}</Mockstore>;
  },
];
