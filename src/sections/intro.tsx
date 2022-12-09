import React from "react";
import styled from "styled-components";
import BgVideo from "../components/bgVideo";

const IntroSection = () => {
  return (
    <>
      <BgVideo />
      <StyledIntroSection>
        <StyledTitleWrapper>
          <StyledTitle>Designed AI</StyledTitle>
          <StyledSubTitle>
            The MetaMatProp is a scalable, fast, flexible, portable, memory efficient C++ matrix computation framework for machine learning and scientific
            computing that comes with intuitive and easy high-level application programming interfaces (APIs) like as Matlab.
          </StyledSubTitle>
        </StyledTitleWrapper>
      </StyledIntroSection>
    </>
  );
};

const StyledIntroSection = styled.section`
  display: flex;
  align-items: center;
  padding-top: 100px;
`;

const StyledTitleWrapper = styled.div`
  margin: 0 200px;
  z-index: 100;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 100px);
  @media (max-width: 1024px) {
    margin: 0 100px;
    width: 100%;
  }
  @media (max-width: 700px) {
    margin: 0 30px;
  }
`;

const StyledTitle = styled.h1`
  color: #ffffff;
  font-size: 2.4rem;
`;

const StyledSubTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: normal;
`;

export default IntroSection;
