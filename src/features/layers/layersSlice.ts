import { createSlice } from "@reduxjs/toolkit";

interface Layer {
  name: string;
  title: string;
  favourite: boolean;
  toPreload: boolean;
  active: boolean;
}

type LayersState = Layer[];

const initialState: LayersState = [
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

const layersSlice = createSlice({
  name: "layers",
  initialState,
  reducers: {},
});

export const {} = layersSlice.actions;

export default layersSlice.reducer;
