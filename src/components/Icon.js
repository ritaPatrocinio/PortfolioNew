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
  return (
    <div title={name}>
      <SvgIcon {...props} />
    </div>
  );
};

Icon.displayName = "Icon";

Icon.defaultProps = {
  color: "inherit",
  title: "icon",
};

export default Icon;
