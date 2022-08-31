import { List, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import LayerListButton from "../LayerListButton";

interface LayerListProps {}

export default function LayerList({}: LayerListProps) {
  const layers = useSelector((state: RootState) => state.layers);

  return (
    <Stack gap="1rem">
      {layers.map((layer) => (
        <LayerListButton
          key={layer.name}
          label={layer.title}
          favorite={layer.favourite}
          active={layer.active}
          toPreload={layer.toPreload}
        />
      ))}
    </Stack>
  );
}
