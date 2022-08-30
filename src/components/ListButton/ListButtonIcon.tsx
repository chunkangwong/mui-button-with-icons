import classNames from "classnames";
import FavouriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { SvgIconProps } from "@mui/material";

export type IconName = "preload" | "favourite";

interface ListButtonIcon extends SvgIconProps {
  active: boolean;
  iconName: IconName;
}

export default function ListButtonIcon({
  active,
  iconName,
  ...props
}: ListButtonIcon) {
  const classnames = classNames({
    MuiSvgIconActive: active,
    MuiSvgIconInactive: !active,
  });

  switch (iconName) {
    case "preload":
      return <StarIcon className={classnames} {...props} />;
    default:
      return <FavouriteIcon className={classnames} {...props} />;
  }
}
