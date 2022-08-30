import { Button } from "@mui/material";
import ListButtonIcon from "./ListButtonIcon";

interface ListButton {
  active: boolean;
  label: string;
}

export default function ListButton({ active, label }: ListButton) {
  return (
    <Button
      id="list-button"
      variant={active ? "contained" : "text"}
      endIcon={<ListButtonIcon id="list-button-icon" active={true} />}
    >
      {label}
    </Button>
  );
}
