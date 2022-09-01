import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setLayerActive,
  setLayerFavourite,
  setLayerToPreload,
} from "../../features/layers/layersSlice";
import { RootState } from "../../store/store";
import LayerListButton from "../LayerListButton";

interface LayerListProps {}

export default function LayerList({}: LayerListProps) {
  const layers = useSelector((state: RootState) => state.layers);
  const dispatch = useDispatch();

  const handleListButtonClick = (name: string, currentActive: boolean) => {
    dispatch(setLayerActive({ name, active: !currentActive }));
  };

  const handleFavouriteButtonClick = (
    name: string,
    currentFavourite: boolean
  ) => {
    dispatch(setLayerFavourite({ name, favourite: !currentFavourite }));
  };

  const handlePreloadButtonClick = (
    name: string,
    currentToPreload: boolean
  ) => {
    dispatch(setLayerToPreload({ name, toPreload: !currentToPreload }));
  };

  return (
    <Stack gap="1rem">
      {layers.map((layer) => (
        <LayerListButton
          key={layer.name}
          label={layer.title}
          favorite={layer.favourite}
          active={layer.active}
          toPreload={layer.toPreload}
          onListButtonClick={() =>
            handleListButtonClick(layer.name, layer.active)
          }
          onFavouriteButtonClick={() =>
            handleFavouriteButtonClick(layer.name, layer.favourite)
          }
          onPreloadButtonClick={() =>
            handlePreloadButtonClick(layer.name, layer.toPreload)
          }
        />
      ))}
    </Stack>
  );
}
