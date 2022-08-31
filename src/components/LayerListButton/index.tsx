import { ButtonProps, Tooltip } from "@mui/material";
import ListButton from "../ListButton";

interface LayerListButton extends ButtonProps {
  label: string;
  active: boolean;
  favorite: boolean;
  toPreload: boolean;
}

export default function LayerListButton({
  label,
  active,
  favorite,
  toPreload,
  ...props
}: LayerListButton) {
  return (
    <Tooltip title="123" placement="right" arrow>
      <ListButton
        label={label}
        active={active}
        icons={[
          {
            active: favorite,
            iconName: "favourite",
          },
          {
            active: toPreload,
            iconName: "preload",
          },
        ]}
        {...props}
      />
    </Tooltip>
  );
}
