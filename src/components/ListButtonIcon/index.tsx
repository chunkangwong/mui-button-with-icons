import Icon, { IconProps } from "@mui/material/Icon";
import "./ListButtonIcon.css";

interface ListButtonIcon extends IconProps {
  active: boolean;
}

const HOVERED_COLOR = "#bec2ff";

export default function ListButtonIcon({
  active,
  children,
  ...props
}: ListButtonIcon) {
  return (
    <Icon
      sx={{
        color: active ? "inherit" : "transparent",
        "&:hover": {
          color: HOVERED_COLOR,
        },
      }}
      {...props}
    >
      {children}
    </Icon>
  );
}
