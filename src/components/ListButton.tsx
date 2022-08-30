import { Button } from "@mui/material";

interface ListButton {
  active: boolean;
  label: string;
}

export default function ListButton({ active, label }: ListButton) {
  return <Button variant={active ? "contained" : "text"}>{label}</Button>;
}
