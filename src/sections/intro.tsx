import React from "react";
import styled from "styled-components";
import BgVideo from "../components/bgVideo";
import { StyledTitle, StyledSubTitle } from "../components/text";

const IntroSection = () => {
  return (
    <StyledIntroSection>
      <BgVideo />
      <StyledTitleWrapper>
        <StyledTitle>Designed AI</StyledTitle>
        <StyledSubTitle>
          The MetaMatProp is a scalable, fast, flexible, portable, memory
          efficient C++ matrix computation framework for machine learning and
          scientific computing that comes with intuitive and easy high-level
          application programming interfaces (APIs) like as Matlab.
        </StyledSubTitle>
      </StyledTitleWrapper>
    </StyledIntroSection>
  );
};

const StyledIntroSection = styled.section`
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  min-height: 100vh;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  max-width: 1300px;
  padding: 0 100px;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 740px) {
    padding: 0 50px;
  }
  @media (max-width: 420px) {
    padding: 0 30px;
  }
`;

export default IntroSection;
