import React from "react";
import Svg from "../Svg";

const SvgAdd = ({ width, height, size, color }) => (
  <Svg
    viewBox="0 0 42 42"
    width={size || width}
    height={size || height}
    color={color}
    fill="none"
  >
    <path
      d="M24 10.689C24 9.09906 22.009 7.59234 18.9564 6.65797C19.6608 3.54668 19.3477 1.07134 17.9682 0.278842C17.6502 0.0929474 17.2784 0.00489197 16.8724 0.00489197V1.0958C17.0974 1.0958 17.2784 1.13983 17.4301 1.22299C18.0954 1.60457 18.384 3.05748 18.159 4.92621C18.1052 5.38606 18.0171 5.87036 17.9095 6.36445C16.9507 6.12964 15.9038 5.94863 14.8031 5.83123C14.1427 4.92621 13.4578 4.10436 12.768 3.38524C14.3628 1.90298 15.8598 1.09091 16.8773 1.09091V0C15.532 0 13.7709 0.958826 11.9902 2.6221C10.2095 0.96861 8.44843 0.0195679 7.10314 0.0195679V1.11048C8.11578 1.11048 9.61761 1.91765 11.2124 3.39013C10.5275 4.10925 9.84264 4.92621 9.19201 5.83123C8.08642 5.94863 7.03954 6.12964 6.08072 6.36934C5.9682 5.88015 5.88504 5.40563 5.82633 4.95067C5.59641 3.08194 5.88015 1.62903 6.54056 1.24256C6.68732 1.1545 6.87811 1.11537 7.10314 1.11537V0.0244598C6.69221 0.0244598 6.32042 0.112515 5.99755 0.29841C4.62291 1.09091 4.31472 3.56135 5.02405 6.66286C1.98125 7.60212 0 9.10395 0 10.689C0 12.2788 1.99103 13.7856 5.04362 14.7199C4.33918 17.8312 4.65226 20.3066 6.0318 21.0991C6.34978 21.285 6.72157 21.373 7.13249 21.373C8.47778 21.373 10.2389 20.4142 12.0196 18.7509C13.8002 20.4044 15.5614 21.3534 16.9066 21.3534C17.3176 21.3534 17.6894 21.2654 18.0122 21.0795C19.3869 20.287 19.6951 17.8166 18.9857 14.715C22.0188 13.7807 24 12.274 24 10.689ZM17.6307 7.42601C17.4497 8.05707 17.2246 8.70771 16.9702 9.35834C16.7697 8.96698 16.5593 8.57562 16.3294 8.18426C16.1044 7.79291 15.8647 7.41133 15.6249 7.03954C16.3196 7.14227 16.9898 7.26947 17.6307 7.42601ZM15.3901 12.636C15.0086 13.2964 14.6172 13.9225 14.2112 14.5047C13.4823 14.5683 12.7436 14.6025 12 14.6025C11.2613 14.6025 10.5226 14.5683 9.79861 14.5096C9.39258 13.9274 8.99633 13.3062 8.61476 12.6506C8.24297 12.0098 7.90542 11.3592 7.59723 10.7036C7.90053 10.0481 8.24297 9.39258 8.60987 8.75173C8.99144 8.09132 9.3828 7.46514 9.78883 6.883C10.5177 6.8194 11.2564 6.78516 12 6.78516C12.7387 6.78516 13.4774 6.8194 14.2014 6.87811C14.6074 7.46025 15.0037 8.08153 15.3852 8.73706C15.757 9.37791 16.0946 10.0285 16.4028 10.6841C16.0946 11.3396 15.757 11.9951 15.3901 12.636ZM16.9702 12C17.2344 12.6555 17.4594 13.311 17.6453 13.947C17.0045 14.1035 16.3294 14.2356 15.6298 14.3384C15.8695 13.9617 16.1093 13.5752 16.3343 13.179C16.5593 12.7876 16.7697 12.3914 16.9702 12ZM12.0098 17.2197C11.5548 16.7501 11.0999 16.2267 10.6498 15.6543C11.0901 15.6739 11.5402 15.6885 11.9951 15.6885C12.455 15.6885 12.9099 15.6788 13.3551 15.6543C12.9148 16.2267 12.4598 16.7501 12.0098 17.2197ZM8.37016 14.3384C7.6755 14.2356 7.0053 14.1084 6.36445 13.9519C6.54545 13.3208 6.77048 12.6702 7.02487 12.0196C7.22544 12.4109 7.43579 12.8023 7.66571 13.1936C7.89564 13.585 8.13045 13.9666 8.37016 14.3384ZM11.9853 4.15817C12.4403 4.6278 12.8952 5.15124 13.3453 5.7236C12.905 5.70404 12.455 5.68936 12 5.68936C11.5402 5.68936 11.0852 5.69914 10.64 5.7236C11.0803 5.15124 11.5353 4.6278 11.9853 4.15817ZM8.36527 7.03954C8.12556 7.41622 7.88585 7.80269 7.66082 8.19894C7.43579 8.5903 7.22544 8.98165 7.02487 9.37301C6.7607 8.71749 6.53567 8.06196 6.34978 7.42601C6.99062 7.27436 7.66571 7.14227 8.36527 7.03954ZM3.93803 13.1643C2.20628 12.4256 1.08602 11.457 1.08602 10.689C1.08602 9.92091 2.20628 8.94741 3.93803 8.21362C4.35874 8.03261 4.81859 7.87118 5.29311 7.71953C5.57195 8.67835 5.93885 9.67631 6.3938 10.6987C5.94374 11.7163 5.58174 12.7093 5.30779 13.6633C4.82348 13.5116 4.36364 13.3453 3.93803 13.1643ZM6.56991 20.1549C5.90461 19.7733 5.61598 18.3204 5.84101 16.4517C5.89482 15.9918 5.98288 15.5075 6.0905 15.0135C7.04933 15.2483 8.09621 15.4293 9.1969 15.5467C9.85732 16.4517 10.5422 17.2735 11.232 17.9927C9.63718 19.4749 8.14024 20.287 7.12271 20.287C6.90257 20.2821 6.71667 20.2381 6.56991 20.1549ZM18.1737 16.4272C18.4036 18.296 18.1199 19.7489 17.4594 20.1353C17.3127 20.2234 17.1219 20.2625 16.8969 20.2625C15.8842 20.2625 14.3824 19.4554 12.7876 17.9829C13.4725 17.2638 14.1574 16.4468 14.808 15.5418C15.9136 15.4244 16.9605 15.2434 17.9193 15.0037C18.0318 15.4978 18.1199 15.9723 18.1737 16.4272ZM20.0571 13.1643C19.6364 13.3453 19.1765 13.5067 18.702 13.6584C18.4232 12.6996 18.0563 11.7016 17.6013 10.6792C18.0514 9.66164 18.4134 8.66857 18.6873 7.71464C19.1716 7.86629 19.6315 8.03261 20.062 8.21362C21.7937 8.9523 22.914 9.92091 22.914 10.689C22.9091 11.457 21.7888 12.4305 20.0571 13.1643Z"
      fill="#61DAFB"
    />
    <path
      d="M11.9951 12.9246C13.2298 12.9246 14.2307 11.9237 14.2307 10.689C14.2307 9.45425 13.2298 8.45332 11.9951 8.45332C10.7604 8.45332 9.75948 9.45425 9.75948 10.689C9.75948 11.9237 10.7604 12.9246 11.9951 12.9246Z"
      fill="#61DAFB"
    />
  </Svg>
);

SvgAdd.defaultProps = {
  width: "24",
  height: "24",
};
export default SvgAdd;
