import React from "react";
import * as icons from "./icons";

export const Icons = {
  ...icons,
};

const Icon = ({ name, ...props }) => {
  const SvgIcon = Icons[name];
  if (!SvgIcon) {
    throw Error(`Icon ${name} not found`);
  }
  return <SvgIcon {...props} />;
};

Icon.displayName = "Icon";

Icon.defaultProps = {
  color: "inherit",
};

export default Icon;
