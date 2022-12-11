import React from "react";
import styled from "styled-components";

interface TextProps {
  children?: React.ReactNode;
  marginBottom?: string;
}

export const StyledTitle = (props: TextProps) => {
  return <_StyledTitle {...props}>{props.children}</_StyledTitle>;
};

const _StyledTitle = styled.h1<TextProps>`
  color: #ffffff;
  font-size: 2.4em;
  margin-bottom: ${(props) => props.marginBottom};
  z-index: 99;
`;

export const StyledSubTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2em;
  font-weight: normal;
  z-index: 99;
`;

export const StyledDescription = styled.p`
  color: #ffffff;
  font-size: 1em;
  font-weight: normal;
  z-index: 99;
`;
