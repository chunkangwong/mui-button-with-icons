import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setWidgetActive,
  setWidgetFavourite,
} from "../../features/widgets/widgetsSlice";
import { RootState } from "../../store/store";
import WidgetListButton from "../WidgetListButton";

interface WidgetListProps {}

export default function WidgetList({}: WidgetListProps) {
  const widgets = useSelector((state: RootState) => state.widgets);
  const dispatch = useDispatch();

  const handleListButtonClick = (name: string, currentActive: boolean) => {
    dispatch(setWidgetActive({ name, active: !currentActive }));
  };

  const handleFavouriteButtonClick = (
    name: string,
    currentFavourite: boolean
  ) => {
    dispatch(setWidgetFavourite({ name, favourite: !currentFavourite }));
  };

  return (
    <Stack gap="1rem">
      {widgets.map((widget) => (
        <WidgetListButton
          key={widget.name}
          label={widget.title}
          favorite={widget.favourite}
          active={widget.active}
          onListButtonClick={() =>
            handleListButtonClick(widget.name, widget.active)
          }
          onFavouriteButtonClick={() =>
            handleFavouriteButtonClick(widget.name, widget.favourite)
          }
        />
      ))}
    </Stack>
  );
}
