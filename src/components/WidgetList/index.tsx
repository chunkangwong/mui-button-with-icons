import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import WidgetListButton from "../WidgetListButton";

interface WidgetListProps {}

export default function WidgetList({}: WidgetListProps) {
  const widgets = useSelector((state: RootState) => state.widgets);

  return (
    <Stack gap="1rem">
      {widgets.map((widget) => (
        <WidgetListButton
          key={widget.name}
          label={widget.title}
          favorite={widget.favourite}
          active={widget.active}
        />
      ))}
    </Stack>
  );
}
