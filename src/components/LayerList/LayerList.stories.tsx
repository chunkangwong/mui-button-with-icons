import { configureStore } from "@reduxjs/toolkit";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { getLayersSlice, LayerGroup } from "../../features/layers/layersSlice";
import LayerList from "./index";

export const MockedState: LayerGroup[] = [
  {
    name: "layerGroup1",
    title: "Layer Group 1",
    layers: [
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
    ],
  },
];

const Mockstore = ({
  initialState,
  children,
}: {
  initialState: LayerGroup[];
  children: React.ReactNode;
}) => (
  <Provider
    store={configureStore({
      reducer: {
        layers: getLayersSlice(initialState).reducer,
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
  decorators: [
    (story) => (
      <Mockstore initialState={MockedState}>
        <div style={{ width: "300px" }}>{story()}</div>
      </Mockstore>
    ),
  ],
} as ComponentMeta<typeof LayerList>;

const Template: ComponentStory<typeof LayerList> = (args) => (
  <LayerList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  groupName: "layerGroup1",
  groupTitle: "Layer Group 1",
};
