import { Button, ButtonProps, Stack } from "@mui/material";
import ListButtonIcon, { IconName } from "./ListButtonIcon";
import * as React from "react";

interface Icon {
  active: boolean;
  iconName: IconName;
  onClick?: () => void;
}

interface ListButtonprops extends ButtonProps {
  active: boolean;
  label: string;
  icons?: Icon[];
}

const ListButton = React.forwardRef<HTMLButtonElement, ListButtonprops>(
  ({ active, label, icons, onClick, ...props }, ref) => {
    const endIcons = () => (
      <Stack direction="row" gap={1}>
        {icons?.map(({ active, iconName, onClick }) => (
          <ListButtonIcon
            key={iconName}
            active={active}
            iconName={iconName}
            onClick={onClick}
          />
        ))}
      </Stack>
    );

    const handleListButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      if (onClick) {
        const target = event.target as HTMLButtonElement;
        if (target.classList.contains("MuiButton-root")) {
          onClick(event);
        }
      }
    };

    return (
      <Button
        variant={active ? "contained" : "text"}
        endIcon={endIcons()}
        onClick={handleListButtonClick}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "& .MuiSvgIconActive": {
            color: "inherit",
          },
          "& .MuiSvgIconInactive": {
            color: "transparent",
          },
          "&:hover": {
            "& .MuiSvgIconInactive": {
              color: "#bec2ff",
            },
          },
        }}
        ref={ref}
        {...props}
      >
        {label}
      </Button>
    );
  }
);

export default ListButton;
