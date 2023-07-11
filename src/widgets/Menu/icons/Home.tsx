import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
            <path d="M896 832H128V490.666667L512 128l384 362.666667z" fill="#E8EAF6"/>
            <path d="M832 448l-106.666667-106.666667V192h106.666667zM128 832h768v106.666667H128z" fill="#C5CAE9"/>
            <path
                d="M512 91.733333L85.333333 488.533333l42.666667 46.933334L512 179.2l384 356.266667 42.666667-46.933334z"
                fill="#B71C1C"/>
            <path d="M384 597.333333h256v341.333334H384z" fill="#D84315"/>
            <path d="M448 362.666667h128v128h-128z" fill="#01579B"/>
            <path
                d="M586.666667 757.333333c-6.4 0-10.666667 4.266667-10.666667 10.666667v42.666667c0 6.4 4.266667 10.666667 10.666667 10.666666s10.666667-4.266667 10.666666-10.666666v-42.666667c0-6.4-4.266667-10.666667-10.666666-10.666667z"
                fill="#FF8A65"/>

    </Svg>
  );
};

export default Icon;
