import { FC } from "react";
import { ReactComponent as PlaySVG } from "../../assets/icons/PlayIcon.svg";
import { IconProps } from "./type";

const PlayIcon: FC<IconProps> = ({ color, size }) => {
  return <PlaySVG color={color} width={size} height={size} />;
};

export default PlayIcon;
