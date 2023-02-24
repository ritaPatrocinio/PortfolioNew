import React from "react";
import Svg from "../Svg";

const SvgAdd = ({ width, height, size, color }) => (
  <Svg
    viewBox="0 0 42 42"
    width={size || width}
    height={size || height}
    color={color}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 5.35332V20.2226L18.198 12.9707L17.0955 13.8531L22.954 21.1769H1.04606L6.90455 13.8531L5.80202 12.9707L9.53674e-06 20.2226V5.35331L11.9993 15.7588L24 5.35332ZM23.9992 2.825V3.48284L11.9999 13.8883L0.000572037 3.48285V2.825H23.9992Z"
      fill="orange"
    />
  </Svg>
);

SvgAdd.defaultProps = {
  width: "24",
  height: "24",
};
export default SvgAdd;
