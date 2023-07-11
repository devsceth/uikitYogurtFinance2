import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg";

// When khal makes you add a new icon that you showed him
// Shooting yourself in the foot gaming

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 90 90" {...props}>
          <image width={70} height={90} href="/images/cola/vault.png"/>
      </Svg>
  );
};

export default Icon;
