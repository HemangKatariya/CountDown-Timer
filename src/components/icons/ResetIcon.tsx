import { FC } from "react";
import { ReactComponent as ResetSVG } from "../../assets/icons/ResetIcon.svg";
import { IconProps } from "./type";

const ResetIcon: FC<IconProps> = ({ color, size }) => {
  return <ResetSVG color={color} width={size} height={size} />;
};

export default ResetIcon;
