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
      d="M9.7623 1.5C8.11447 1.5 6.77869 2.7934 6.77869 4.38889V6.38889H11.9426V6.94445H4.4836C2.8358 6.94445 1.5 8.23785 1.5 9.83333V14.1667C1.5 15.7622 2.8358 17.0555 4.4836 17.0555H6.20491V14.6111C6.20491 13.0157 7.54072 11.7222 9.18855 11.7222H14.6967C16.091 11.7222 17.2213 10.6278 17.2213 9.2778V4.38889C17.2213 2.7934 15.8855 1.5 14.2377 1.5H9.7623ZM9.0738 5.05556C9.64417 5.05556 10.1065 4.60784 10.1065 4.05556C10.1065 3.50327 9.64417 3.05555 9.0738 3.05555C8.50335 3.05555 8.04097 3.50327 8.04097 4.05556C8.04097 4.60784 8.50335 5.05556 9.0738 5.05556Z"
      fill="url(#paint0_linear_3_49)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.2376 22.5C15.8854 22.5 17.2212 21.2066 17.2212 19.6111V17.6111H12.0572V17.0556H19.5163C21.1641 17.0556 22.4998 15.7622 22.4998 14.1667V9.83333C22.4998 8.23785 21.1641 6.94446 19.5163 6.94446H17.795V9.38888C17.795 10.9844 16.4591 12.2778 14.8114 12.2778H9.30315C7.90882 12.2778 6.77857 13.3722 6.77857 14.7222V19.6111C6.77857 21.2066 8.1144 22.5 9.76215 22.5H14.2376ZM14.9261 18.9445C14.3557 18.9445 13.8933 19.3921 13.8933 19.9444C13.8933 20.4967 14.3557 20.9444 14.9261 20.9444C15.4965 20.9444 15.9589 20.4967 15.9589 19.9444C15.9589 19.3921 15.4965 18.9445 14.9261 18.9445Z"
      fill="url(#paint1_linear_3_49)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3_49"
        x1="9.36067"
        y1="1.5"
        x2="9.36067"
        y2="17.0555"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#327EBD" />
        <stop offset="1" stop-color="#1565A7" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_3_49"
        x1="14.6392"
        y1="6.94446"
        x2="14.6392"
        y2="22.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFDA4B" />
        <stop offset="1" stop-color="#F9C600" />
      </linearGradient>
    </defs>
  </Svg>
);

SvgAdd.defaultProps = {
  width: "24",
  height: "24",
};
export default SvgAdd;
