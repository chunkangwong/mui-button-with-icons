import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLayersByGroup,
  setLayerActive,
  setLayerFavourite,
  setLayerToPreload,
} from "../../features/layers/layersSlice";
import { RootState } from "../../store/store";
import LayerListButton from "../LayerListButton";

interface LayerListProps {
  groupName: string;
  groupTitle: string;
}

export default function LayerList({ groupName, groupTitle }: LayerListProps) {
  const [open, setOpen] = React.useState(true);
  const layers = useSelector((state: RootState) =>
    selectLayersByGroup(state, groupName)
  );
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
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon
          sx={{
            minWidth: "2rem",
          }}
        >
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>
        <ListItemText
          primary={groupTitle}
          sx={{
            "& .MuiTypography-root": {
              fontSize: "1.25rem",
            },
          }}
        />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack gap={1} sx={{ pl: 6 }}>
          {layers?.map((layer) => (
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
      </Collapse>
    </>
  );
}
