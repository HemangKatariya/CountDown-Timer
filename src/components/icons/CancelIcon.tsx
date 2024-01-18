import { FC } from "react";
import { ReactComponent as CancelSVG } from "../../assets/icons/CancelIcon.svg";
import { IconProps } from "./type";

const CancelIcon: FC<IconProps> = ({ color, size }) => {
  return <CancelSVG color={color} width={size} height={size} />;
};

export default CancelIcon;
