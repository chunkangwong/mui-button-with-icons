import { createSlice } from "@reduxjs/toolkit";

interface Layer {
  name: string;
  favourite: boolean;
  toPreload: boolean;
  active: boolean;
}

type LayersState = Layer[];

const initialState: LayersState = [
  { name: "Layer 1", favourite: false, toPreload: false, active: false },
  { name: "Layer 2", favourite: true, toPreload: false, active: false },
  { name: "Layer 3", favourite: false, toPreload: true, active: false },
  { name: "Layer 4", favourite: true, toPreload: true, active: false },
  { name: "Layer 5", favourite: false, toPreload: false, active: true },
  { name: "Layer 6", favourite: true, toPreload: false, active: true },
  { name: "Layer 7", favourite: false, toPreload: true, active: true },
  { name: "Layer 8", favourite: true, toPreload: true, active: true },
];

const layersSlice = createSlice({
  name: "layers",
  initialState,
  reducers: {},
});

export const {} = layersSlice.actions;

export default layersSlice.reducer;
