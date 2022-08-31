import { ButtonProps } from "@mui/material";
import ListButton from "../ListButton";

interface WidgetListButton extends ButtonProps {
  label: string;
  active: boolean;
  favorite: boolean;
}

export default function WidgetListButton({
  label,
  active,
  favorite,
  ...props
}: WidgetListButton) {
  return (
    <ListButton
      label={label}
      active={active}
      icons={[
        {
          active: favorite,
          iconName: "favourite",
        },
      ]}
      {...props}
    />
  );
}
