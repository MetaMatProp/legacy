import React from "react";
import styled from "styled-components";
import { StyledTitle, StyledSubTitle } from "../components/StyledTitle";

const DescriptionSection = () => {
  return (
    <StyledDescriptionSection>
      <StyledInnerWrapper>
        <StyledTitle>MetaMatProp</StyledTitle>
        <StyledSubTitle>
          MetaMatProp (Meta Matrix Propagation) is an unique high-performance matrix computation framework implemented by C++ template metaprogramming for
          machine learning and other scientific computing
        </StyledSubTitle>
      </StyledInnerWrapper>
    </StyledDescriptionSection>
  );
};

const StyledDescriptionSection = styled.section`
  display: flex;
  height: 100vh;
  background-color: #06141c;
  scroll-snap-align: start;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px 300px;
`;

export default DescriptionSection;
