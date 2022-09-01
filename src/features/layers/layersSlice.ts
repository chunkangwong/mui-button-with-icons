import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export interface Layer {
  name: string;
  title: string;
  favourite: boolean;
  toPreload: boolean;
  active: boolean;
}

export interface LayerGroup {
  name: string;
  title: string;
  layers: Layer[];
}

type LayersSliceState = LayerGroup[];

export const initialState: LayersSliceState = [];

function getLayerById(layerGroups: LayerGroup[], layerName: string) {
  return layerGroups
    .map((lg) => lg.layers)
    .flat()
    .find((l) => l.name === layerName);
}

export const getLayersSlice = (initialState: LayersSliceState) =>
  createSlice({
    name: "layers",
    initialState,
    reducers: {
      setLayerActive(
        state,
        action: PayloadAction<{ name: string; active: boolean }>
      ) {
        const { name, active } = action.payload;
        const selectedLayer = getLayerById(state, name);
        if (selectedLayer) {
          selectedLayer.active = active;
        }
      },
      setLayerFavourite(
        state,
        action: PayloadAction<{ name: string; favourite: boolean }>
      ) {
        const { name, favourite } = action.payload;
        const selectedLayer = getLayerById(state, name);
        if (selectedLayer) {
          selectedLayer.favourite = favourite;
        }
      },
      setLayerToPreload(
        state,
        action: PayloadAction<{ name: string; toPreload: boolean }>
      ) {
        const { name, toPreload } = action.payload;
        const selectedLayer = getLayerById(state, name);
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

export const selectLayersByGroup = (state: RootState, groupName: string) => {
  const selectedGroup = state.layers.find((group) => group.name === groupName);
  if (selectedGroup) {
    return selectedGroup.layers;
  }
};
