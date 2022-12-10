import React from "react";
import styled from "styled-components";

interface BoxStyles {
  bgColor?: string;
  padding?: string;
  margin?: string;
  fontColor?: string;
  width?: string;
  height?: string;
  fontWeight?: "normal" | "bold";
  textAlign?: string;
}

interface BoxProps {
  children?: React.ReactNode;
  styles?: BoxStyles;
}

const Box = ({ children, styles }: BoxProps) => {
  return <StyledBox {...styles}>{children}</StyledBox>;
};

const StyledBox = styled.div<BoxStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor || "#D9D9D9"};
  padding: ${(props) => props.padding || "8px 25px"};
  border-radius: 10px;
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  color: ${(props) => props.fontColor || "#000000"};
  font-family: "Inter";
  font-weight: ${(props) => props.fontWeight || "normal"};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
`;

export default Box;
