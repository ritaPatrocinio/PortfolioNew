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
      d="M12.825 12C12.825 10.0665 14.3535 8.5005 16.2375 8.5005C18.123 8.5005 19.65 10.065 19.65 12C19.65 13.9335 18.123 15.4995 16.2375 15.4995C14.355 15.4995 12.825 13.935 12.825 12Z"
      fill="#1ABCFE"
    />
    <path
      d="M6 19.0005C6 17.067 7.5285 15.4995 9.4125 15.4995H12.825V19.0005C12.825 20.9325 11.2965 22.5 9.4125 22.5C7.5285 22.5 6 20.9325 6 19.0005Z"
      fill="#0ACF83"
    />
    <path
      d="M12.825 1.5V8.5005H16.2375C18.123 8.5005 19.65 6.933 19.65 4.9995C19.65 3.0675 18.123 1.5 16.2375 1.5H12.825Z"
      fill="#FF7262"
    />
    <path
      d="M6 4.9995C6 6.933 7.5285 8.5005 9.4125 8.5005H12.825V1.5H9.4125C7.5285 1.5 6 3.0675 6 4.9995Z"
      fill="#F24E1E"
    />
    <path
      d="M6 12C6 13.9335 7.5285 15.4995 9.4125 15.4995H12.825V8.5005H9.4125C7.5285 8.5005 6 10.065 6 12Z"
      fill="#A259FF"
    />
  </Svg>
);

SvgAdd.defaultProps = {
  width: "24",
  height: "24",
  title: "CSS",
};
export default SvgAdd;
