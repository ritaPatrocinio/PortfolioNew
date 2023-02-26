import React from "react";
import Svg from "../Svg";

const SvgAdd = ({ width, height, size, color }) => (
  <Svg
    viewBox="0 0 42 42"
    width={size || width}
    height={size || height}
    color={color}
    title="CSS"
  >
    <path
      d="M7.2 7.2L7.84854 6.7316C7.64538 6.4503 7.28403 6.33205 6.95387 6.4388C6.6237 6.54557 6.4 6.85301 6.4 7.2H7.2ZM12 22.4C6.25624 22.4 1.6 17.7438 1.6 12H0C0 18.6274 5.37258 24 12 24V22.4ZM22.4 12C22.4 17.7438 17.7438 22.4 12 22.4V24C18.6274 24 24 18.6274 24 12H22.4ZM12 1.6C17.7438 1.6 22.4 6.25624 22.4 12H24C24 5.37258 18.6274 0 12 0V1.6ZM12 0C5.37258 0 0 5.37258 0 12H1.6C1.6 6.25624 6.25624 1.6 12 1.6V0ZM8 19.2V7.2H6.4V19.2H8ZM6.55146 7.6684L16.9515 22.0683L18.2485 21.1317L7.84854 6.7316L6.55146 7.6684ZM16 6.4V16H17.6V6.4H16Z"
      fill="#54BFFB"
    />
  </Svg>
);

SvgAdd.defaultProps = {
  width: "24",
  height: "24",
  title: "CSS",
};
export default SvgAdd;
