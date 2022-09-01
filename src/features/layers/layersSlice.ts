import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Layer {
  name: string;
  title: string;
  favourite: boolean;
  toPreload: boolean;
  active: boolean;
}

type LayersState = Layer[];

export const initialState: LayersState = [];

export const getLayersSlice = (initialState: LayersState) =>
  createSlice({
    name: "layers",
    initialState,
    reducers: {
      setLayerActive(
        state,
        action: PayloadAction<{ name: string; active: boolean }>
      ) {
        const { name, active } = action.payload;
        const selectedLayer = state.find((layer) => layer.name === name);
        if (selectedLayer) {
          selectedLayer.active = active;
        }
      },
      setLayerFavourite(
        state,
        action: PayloadAction<{ name: string; favourite: boolean }>
      ) {
        const { name, favourite } = action.payload;
        const selectedLayer = state.find((layer) => layer.name === name);
        if (selectedLayer) {
          selectedLayer.favourite = favourite;
        }
      },
      setLayerToPreload(
        state,
        action: PayloadAction<{ name: string; toPreload: boolean }>
      ) {
        const { name, toPreload } = action.payload;
        const selectedLayer = state.find((layer) => layer.name === name);
        if (selectedLayer) {
          selectedLayer.toPreload = toPreload;
        }
      },
    },
  });

const layersSlice = getLayersSlice(initialState);

export const { setLayerActive, setLayerFavourite, setLayerToPreload } =
  layersSlice.actions;

export default layersSlice.reducer;
