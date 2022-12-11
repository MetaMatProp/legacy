import React from "react";
import styled from "styled-components";

interface TriangleProps {
  top?: string;
  height?: string;
}

const Triangle = (props: TriangleProps) => {
  return <StyledTriangle {...props} />;
};

const StyledTriangle = styled.div<TriangleProps>`
  position: absolute;
  top: ${(props) => props.top || "0"};
  right: 0;
  width: 130vw;
  height: ${(props) => props.height || "200vh"};
  transform: skewX(25deg) translate(80%, 0);
  background-color: #0d4343;
  z-index: 5;
  @media (max-width: 740px) {
    width: 1000px;
  }
`;

export default StyledTriangle;
