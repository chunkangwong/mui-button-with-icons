import { ButtonProps, Tooltip } from "@mui/material";
import ListButton from "../ListButton";
import * as React from "react";

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
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };

  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };

  return (
    <Tooltip
      title="123"
      placement="right"
      arrow
      open={tooltipOpen}
      onOpen={handleTooltipOpen}
      onClose={handleTooltipClose}
    >
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
