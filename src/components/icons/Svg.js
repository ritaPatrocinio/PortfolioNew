import styled from "styled-components";
import { size } from "styled-system";

const Svg = styled("svg")(
  {
    display: "block",
    flex: "none",
    fill: "currentColor",
  },
  size
);

Svg.displayName = "Svg";

export default Svg;
