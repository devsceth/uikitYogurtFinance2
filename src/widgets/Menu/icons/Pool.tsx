import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 90 90" {...props}>
          <image width={70} height={90} href="/images/yogurt/pool.png"/>
      </Svg>
  );
};

export default Icon;
