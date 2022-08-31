import { Button, Stack } from "@mui/material";
import ListButtonIcon, { IconName } from "./ListButtonIcon";
import * as React from "react";

interface ListButtonprops {
  active: boolean;
  label: string;
  icons?: {
    active: boolean;
    iconName: IconName;
  }[];
}

const ListButton = React.forwardRef<HTMLButtonElement, ListButtonprops>(
  ({ active, label, icons, ...props }, ref) => {
    const EndIcons = () => (
      <Stack direction="row">
        {icons?.map(({ active, iconName }) => (
          <ListButtonIcon key={iconName} active={active} iconName={iconName} />
        ))}
      </Stack>
    );

    return (
      <Button
        variant={active ? "contained" : "text"}
        endIcon={<EndIcons />}
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
