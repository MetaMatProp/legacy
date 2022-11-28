import React from "react";
import styled from "styled-components";

interface BoxStyles {
  bgColor?: string;
  padding?: string;
  margin?: string;
  fontColor?: string;
  fontWeight?: "normal" | "bold";
}

interface BoxProps {
  text: string;
  styles?: BoxStyles;
}

const Box = ({ text, styles }: BoxProps) => {
  return <StyledBox {...styles}>{text}</StyledBox>;
};

const StyledBox = styled.div<BoxStyles>`
  background-color: ${(props) => props.bgColor || "#D9D9D9"};
  padding: ${(props) => props.padding || "8px 25px"};
  border-radius: 10px;
  width: fit-content;
  color: ${(props) => props.fontColor || "#000000"};
  font-family: "Inter";
  font-weight: ${(props) => props.fontWeight || "normal"};
  margin: ${(props) => props.margin};
`;

export default Box;
