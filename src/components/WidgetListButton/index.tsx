import { ButtonProps } from "@mui/material";
import ListButton from "../ListButton";

interface WidgetListButton extends ButtonProps {
  label: string;
  active: boolean;
  favorite: boolean;
  onListButtonClick: () => void;
  onFavouriteButtonClick: () => void;
}

export default function WidgetListButton({
  label,
  active,
  favorite,
  onListButtonClick,
  onFavouriteButtonClick,
  ...props
}: WidgetListButton) {
  return (
    <ListButton
      label={label}
      active={active}
      onClick={onListButtonClick}
      icons={[
        {
          active: favorite,
          iconName: "favourite",
          onClick: onFavouriteButtonClick,
        },
      ]}
      {...props}
    />
  );
}
