import { Button } from "@mui/material";
import ListButtonIcon from "../ListButtonIcon";

interface ListButton {
  active: boolean;
  label: string;
  icons?: {
    active: boolean;
    iconName: string;
  }[];
}

export default function ListButton({ active, label, icons }: ListButton) {
  return (
    <Button
      id="list-button"
      variant={active ? "contained" : "text"}
      endIcon={icons?.map(({ active, iconName }) => (
        <ListButtonIcon key={iconName} active={active}>
          {iconName}
        </ListButtonIcon>
      ))}
    >
      {label}
    </Button>
  );
}
