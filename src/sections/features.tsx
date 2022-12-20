import React from "react";
import styled from "styled-components";
import { StyledTitle, StyledSubTitle } from "../components/text";
import Box from "../components/box";

interface FeatureProps {
  title: string;
  subscription: string;
}

const boxStyle = {
  width: "auto",
  height: "100%",
  minHeight: "150px",
  padding: "30px",
  textAlign: "center",
};

const FeaturesSection = () => {
  const Feature = ({ title, subscription }: FeatureProps) => {
    return (
      <StyledFeatureWrapper>
        <StyledSubTitle>{title}</StyledSubTitle>
        <Box styles={boxStyle}>{subscription}</Box>
      </StyledFeatureWrapper>
    );
  };
  return (
    <StyledDescriptionSection>
      <StyledInnerWrapper>
        <StyledTitle>Features</StyledTitle>
        <StyledBoxesWrapper>
          <Feature
            title={`Support High-level Application Programming Interfaces (API)`}
            subscription="Reduce the cost to develop/maintain/deploy an application program (1000 lines native codes -> 10 lines MetaMatProp codes)"
          />
          <Feature
            title="Minimized Third-party Library Dependency"
            subscription="No risk to S/W license issues for commercializing your applications with MetaMatProp (All self-implemented except to C standard library, BLAS, and LAPACK)"
          />
          <Feature
            title="Compile-time Expression Optimization Technology"
            subscription="Make the application executable codes faster with less memory consumption at run-time (Automatically convert the application codes to eliminate unnecessary temporal memory consumption as well as control logic at compile-time)"
          />
          <Feature
            title="Fully multi-threaded Execution"
            subscription="The more HW computing resources, the faster the execution speed is achievable (all matrix operations are executed by the multi-threads automatically)"
          />
          <Feature
            title="Support BLAS and Lapack"
            subscription="Achieve fast linear algebra computation by highly tuned BLAS and Lapack routines (compatible with Atlas, OpenBlas, MKL-blas)"
          />
          <Feature
            title="Support General N-demensional Matrix"
            subscription="Provide unified Matrix interface for general N-dimensional Matrix and various data types"
          />
          <Feature title="C++ Standard Template Library Interface" subscription="Support Iterator Interface for Matrix compatible with C++ STL algorithms" />
        </StyledBoxesWrapper>
      </StyledInnerWrapper>
    </StyledDescriptionSection>
  );
};

const StyledDescriptionSection = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #06141c;
  scroll-snap-align: start;
  align-items: center;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  max-width: 1300px;
  width: -webkit-fill-available;
  padding: 120px 100px;
  margin: 0 auto 150px auto;
  flex-direction: column;
  @media (max-width: 740px) {
    padding: 100px 50px 0 50px;
  }
  @media (max-width: 420px) {
    padding: 100px 30px 0 30px;
  }
`;

const StyledBoxesWrapper = styled.div`
  flex: 1;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: 1fr;
  gap: 50px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 0 30px 0;
  }
`;

const StyledFeatureWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
`;

export default FeaturesSection;
