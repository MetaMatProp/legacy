import React, { useEffect, useState } from "react";
import { throttle } from "lodash";
import styled from "styled-components";
import Box from "./box";
import { Link } from "gatsby";

const buttonStyle = (minimize: boolean) => {
  return {
    margin: minimize ? "0px 5px" : "0px 10px",
    padding: minimize ? "8px 18px" : undefined,
    bgColor: "#0D4343",
    fontColor: "#ffffff",
  };
};

const linkStyle = {
  textDecoration: "none",
};

const Header = () => {
  const [minimize, setMinimize] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      if (innerWidth < 310) setMinimize(true);
      else setMinimize(false);
    };
    const throttledHandleResize = throttle(handleResize, 100);
    window.addEventListener("resize", throttledHandleResize);
    return () => window.removeEventListener("resize", throttledHandleResize);
  }, []);
  return (
    <HeaderWrapper>
      <StyledHeader>
        <Link to="/" style={linkStyle}>
          <StyledH1>Designed AI</StyledH1>
        </Link>
        <ButtonWrapper>
          <Link to="features" style={linkStyle}>
            <Box text="Features" styles={buttonStyle(minimize)} />
          </Link>
          <Link to="performance" style={linkStyle}>
            <Box text="Performance" styles={buttonStyle(minimize)} />
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
  z-index: 100;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 100px;
  @media (max-width: 700px) {
    padding: 30px;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
  @media (max-width: 320px) {
    padding: 20px 10px;
  }
`;

const StyledH1 = styled.h1`
  color: #ffffff;
  font-family: Inter;
  font-size: 1.8rem;
  font-weight: bold;
  @media (max-width: 550px) {
    margin: 0 0 30px 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 550px) {
    align-items: center;
  }
`;

export default Header;
