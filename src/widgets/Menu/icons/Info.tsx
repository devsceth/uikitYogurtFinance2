import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g fill="#37474f">

            <path d="M6.71428571 1.2857142h.57142858v10.28571444h-.57142858z"/>

            <path d="M7.51905715 9.22065718l.404.404-2.86840004 2.86840005-.404-.40400001z"/>

            <path d="M9.3596286 12.0924858l-.404.404-2.86840004-2.86840005.404-.404z"/>

        </g>

        <path fill="#cfd8dc" d="M1.2857142 2.14285707h11.4285716v8.00000012H1.2857142z"/>

        <g fill="#607d8b" transform="translate(.14285704 -.14285725) scale(.28571)">

            <path d="M3 7h42v4H3zm0 28h42v2H3z"/>

            <circle cx="31.5" cy="43.5" r="1.5"/>

            <circle cx="16.5" cy="43.5" r="1.5"/>

        </g>

        <g fill="#c51162">

            <path d="M7.57142858 6.97142857L5.85714284 5.25714283 3.54285709 7.54285715l.62857144.62857144 1.68571431-1.71428574 1.71428574 1.71428574 2.31428575-2.28571432-.62857144-.62857144z"/>

            <path d="M10.42857148 6.71428571L8.42857145 4.71428568h2.00000003z"/>

        </g>
    </Svg>
  );
};

export default Icon;
