import { Button, Stack } from "@mui/material";
import ListButtonIcon, { IconName } from "./ListButtonIcon";

interface ListButtonprops {
  active: boolean;
  label: string;
  icons?: {
    active: boolean;
    iconName: IconName;
  }[];
}

export default function ListButton({ active, label, icons }: ListButtonprops) {
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
    >
      {label}
    </Button>
  );
}
