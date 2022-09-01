import { Button, ButtonProps, Stack } from "@mui/material";
import ListButtonIcon, { IconName } from "./ListButtonIcon";
import * as React from "react";

const LIST_BUTTON_CLASSNAME = "MuiListButton-custom";

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
      <Stack direction="row">
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
      console.log("List button clicked");
      if (onClick) {
        const target = event.target as HTMLButtonElement;
        if (target.classList.contains(LIST_BUTTON_CLASSNAME)) {
          onClick(event);
        }
      }
    };

    return (
      <Button
        className={LIST_BUTTON_CLASSNAME}
        variant={active ? "contained" : "text"}
        endIcon={endIcons()}
        onClick={handleListButtonClick}
        sx={{
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
