import React from "react";
import styled from "styled-components";
import Box from "./box";
import { Link } from "gatsby";

const buttonStyle = {
  margin: "0 10px",
  bgColor: "#0D4343",
  fontColor: "#ffffff",
};

const linkStyle = {
  textDecoration: "none",
};

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <Link to="/" style={linkStyle}>
          <StyledH1>Designed AI</StyledH1>
        </Link>
        <ButtonWrapper>
          <Link to="features" style={linkStyle}>
            <Box text="Features" styles={buttonStyle} />
          </Link>
          <Link to="performance" style={linkStyle}>
            <Box text="Performance" styles={buttonStyle} />
          </Link>
        </ButtonWrapper>
      </StyledHeader>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.66);
  top: 0;
  left: 0;
  width: 100vw;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  height: 100px;
`;

const StyledH1 = styled.h1`
  color: #ffffff;
  font-family: Inter;
  font-size: 24px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Header;
