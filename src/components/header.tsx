import React, { useEffect, useState } from "react";
import { throttle } from "lodash";
import styled from "styled-components";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Box from "./box";
import { StyledTitle } from "./text";
import { Link } from "gatsby";

const buttonStyle = {
  margin: "0px 20px 0 0",
  bgColor: "#0D4343",
  fontColor: "#ffffff",
};

const linkStyle = {
  textDecoration: "none",
};

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      if (innerWidth < 740) setMobile(true);
      else setMobile(false);
    };
    const throttledHandleResize = throttle(handleResize, 100);
    window.addEventListener("resize", throttledHandleResize);
    handleResize();
    return () => window.removeEventListener("resize", throttledHandleResize);
  }, []);
  const Buttons = () => {
    return (
      <ButtonWrapper>
        <Link to="features" style={linkStyle}>
          <Box styles={buttonStyle}>Performance</Box>
        </Link>
        <Link to="performance" style={linkStyle}>
          <Box styles={buttonStyle}>Performance</Box>
        </Link>
      </ButtonWrapper>
    );
  };
  return (
    <HeaderWrapper>
      <StyledHeader>
        <Link to="/" style={linkStyle}>
          <StyledTitle>Designed AI</StyledTitle>
        </Link>
        {mobile ? (
          menuActive ? (
            <MdKeyboardArrowUp
              color="#fff"
              size={36}
              onClick={() => setMenuActive(false)}
            />
          ) : (
            <MdKeyboardArrowDown
              color="#fff"
              size={36}
              onClick={() => setMenuActive(true)}
            />
          )
        ) : (
          <Buttons />
        )}
      </StyledHeader>
      {mobile && menuActive && (
        <BottomButtonWrapper>
          <Buttons />
        </BottomButtonWrapper>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: absolute;
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
  max-width: 1300px;
  padding: 15px 100px;
  margin: 0 auto;
  @media (max-width: 740px) {
    padding: 0 50px;
  }
  @media (max-width: 420px) {
    padding: 0 30px;
  }
`;

const BottomButtonWrapper = styled.header`
  display: flex;
  align-items: center;
  @media (max-width: 740px) {
    padding: 0 50px 10px 50px;
  }
  @media (max-width: 420px) {
    padding: 0 30px 10px 30px;
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
