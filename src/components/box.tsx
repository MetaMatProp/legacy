import React from "react";
import styled from "styled-components";

interface BoxStyles {
  bgColor?: string;
  padding?: string;
  margin?: string;
  fontColor?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  fontWeight?: "normal" | "bold";
  textAlign?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
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
  box-sizing: border-box;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  background-color: ${(props) => props.bgColor || "#D9D9D9"};
  padding: ${(props) => props.padding || "8px 25px"};
  border-radius: 10px;
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  min-height: ${(props) => props.minHeight};
  color: ${(props) => props.fontColor || "#000000"};
  font-family: "Inter";
  font-weight: ${(props) => props.fontWeight || "normal"};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  flex-direction: ${(props) => props.flexDirection};
  z-index: 99;
`;

export default Box;
