import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { Layer } from "../../features/layers/layersSlice";
import LayerList from "./index";

export const MockedState: Layer[] = [
  {
    name: "layer1",
    title: "Layer 1",
    favourite: false,
    toPreload: false,
    active: false,
  },
  {
    name: "layer2",
    title: "Layer 2",
    favourite: true,
    toPreload: false,
    active: false,
  },
  {
    name: "layer3",
    title: "Layer 3",
    favourite: false,
    toPreload: true,
    active: false,
  },
  {
    name: "layer4",
    title: "Layer 4",
    favourite: true,
    toPreload: true,
    active: false,
  },
  {
    name: "layer5",
    title: "Layer 5",
    favourite: false,
    toPreload: false,
    active: true,
  },
  {
    name: "layer6",
    title: "Layer 6",
    favourite: true,
    toPreload: false,
    active: true,
  },
  {
    name: "layer7",
    title: "Layer 7",
    favourite: false,
    toPreload: true,
    active: true,
  },
  {
    name: "layer8",
    title: "Layer 8",
    favourite: true,
    toPreload: true,
    active: true,
  },
];

const Mockstore = ({
  initialState,
  children,
}: {
  initialState: Layer[];
  children: React.ReactNode;
}) => (
  <Provider
    store={configureStore({
      reducer: {
        layers: createSlice({
          name: "layers",
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
  title: "LayerList",
  component: LayerList,
  excludeStories: /.*MockedState$/,
  decorators: [(story) => <div style={{ width: "200px" }}>{story()}</div>],
} as ComponentMeta<typeof LayerList>;

const Template: ComponentStory<typeof LayerList> = (args) => (
  <LayerList {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (story) => {
    return <Mockstore initialState={MockedState}>{story()}</Mockstore>;
  },
];
