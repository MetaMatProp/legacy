import React from "react";
import styled from "styled-components";
import BgVideo from "../components/bgVideo";

const IntroSection = () => {
  return (
    <StyledIntroSection>
      <BgVideo />
      <StyledTitleWrapper>
        <StyledTitle>Designed AI</StyledTitle>
        <StyledSubTitle>
          The MetaMatProp is a scalable, fast, flexible, portable, memory efficient C++ matrix computation framework for machine learning and scientific
          computing that comes with intuitive and easy high-level application programming interfaces (APIs) like as Matlab.
        </StyledSubTitle>
      </StyledTitleWrapper>
    </StyledIntroSection>
  );
};

const StyledIntroSection = styled.section`
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  height: 100vh;
`;

const StyledTitleWrapper = styled.div`
  margin: 150px 200px;
  width: 50%;
  display: flex;
  min-width: 1300px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1400px) {
    margin: 0 50px;
    min-width: 100%;
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
