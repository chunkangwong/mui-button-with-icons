import StarIcon from "@mui/icons-material/Star";
import { SvgIconProps } from "@mui/material";

interface ListButtonIcon extends SvgIconProps {
  active: boolean;
}

const HOVERED_COLOR = "#bec2ff";

export default function ListButtonIcon({ active, ...props }: ListButtonIcon) {
  return (
    <StarIcon
      sx={{
        color: active ? "inherit" : "transparent",
        "&:hover": {
          color: HOVERED_COLOR,
        },
      }}
      {...props}
    />
  );
}
