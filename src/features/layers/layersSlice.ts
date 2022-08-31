import { createSlice } from "@reduxjs/toolkit";

export interface Layer {
  name: string;
  title: string;
  favourite: boolean;
  toPreload: boolean;
  active: boolean;
}

type LayersState = Layer[];

export const initialState: LayersState = [];

const layersSlice = createSlice({
  name: "layers",
  initialState,
  reducers: {},
});

export const {} = layersSlice.actions;

export default layersSlice.reducer;
