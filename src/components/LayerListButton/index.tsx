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
  const [tooltipTitle, setTooltipTitle] = React.useState("...");
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const [controller, setController] = React.useState<AbortController>();

  const handleTooltipOpen = async (event: React.MouseEvent) => {
    if (event.ctrlKey) {
      const newController = new AbortController();
      setController(newController);
      setTooltipOpen(true);
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?id=1",
        {
          signal: newController.signal,
        }
      );
      const json = await res.json();
      const post = json[0];
      setTooltipTitle(post.title);
    }
  };

  const handleTooltipClose = () => {
    if (controller) {
      controller.abort();
    }
    setTooltipOpen(false);
  };

  return (
    <Tooltip
      title={tooltipTitle}
      placement="right"
      arrow
      open={tooltipOpen}
      onMouseEnter={handleTooltipOpen}
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
