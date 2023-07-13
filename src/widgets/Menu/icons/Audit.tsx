import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 90 90" {...props}>
          <image width={70} height={90} href="/images/cola/audit.png"/>
      </Svg>
  );
};

export default Icon;
