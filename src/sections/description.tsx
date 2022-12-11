import React from "react";
import styled from "styled-components";
import {
  StyledTitle,
  StyledSubTitle,
  StyledDescription,
} from "../components/text";
import Box from "../components/box";

const boxStyle = {
  width: "auto",
  height: "100%",
  textAlign: "center",
};

const DescriptionSection = () => {
  return (
    <StyledDescriptionSection>
      <StyledInnerWrapper>
        <StyledTitle marginBottom="0">MetaMatProp</StyledTitle>
        <StyledSubTitle>
          MetaMatProp (Meta Matrix Propagation) is an unique high-performance
          matrix computation framework implemented by C++ template
          metaprogramming for machine learning and other scientific computing
        </StyledSubTitle>
        <StyledDescriptionWrapper>
          <StyledFeaturesWrapper>
            <StyledDescription>
              The MetaMatProp can achieve faster matrix operations with lesser
              system memory consumption compared with existing top-level
              products such as Mathwork’s Matlab, Google’s Tensorflow, and
              open-sourced Armadillo.
            </StyledDescription>
            <StyledDescription>
              The MetaMatProp is fully implemented by template meta-programming
              and it achieves several unique features by template
              meta-programming, which are hard to come all together with the
              previous existing ones.
            </StyledDescription>
            <StyledDescription>
              We believe that our MetaMatProp will be an innovative framework
              promoting the productivity as well as reducing the cost over the
              entire application development cycles, which include initial
              prototype implementation, extension, deployment, and maintenance,
              in the computation-intensive areas like as machine learning,
              finance, and many other scientific work for the purpose of
              research as well as commercial product.
            </StyledDescription>
          </StyledFeaturesWrapper>
          <StyledBoxesWrapper>
            <Box styles={boxStyle}>
              Intuitive High-level Programming Interface like Matlab
            </Box>
            <Box styles={boxStyle}>Minimal Third-party Dependency</Box>
            <Box styles={boxStyle}>Compile-time Expression Optimizaion</Box>
            <Box styles={boxStyle}>Support General N-dimensional Matrix</Box>
            <Box styles={boxStyle}>Support C++ STL Interface</Box>
            <Box styles={boxStyle}>Direct Application Deployment</Box>
            <Box styles={boxStyle}>Multi-threaded</Box>
            <Box styles={boxStyle}>
              Support BLAS (Atlas, OpenBlas, MKL-Blas)
            </Box>
          </StyledBoxesWrapper>
        </StyledDescriptionWrapper>
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
  padding: 120px 100px;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 740px) {
    padding: 100px 50px 0 50px;
  }
  @media (max-width: 420px) {
    padding: 100px 30px 0 30px;
  }
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
  margin: 30px 0 0 0;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const StyledBoxesWrapper = styled.div`
  flex: 1;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: 1fr;
  row-gap: 30px;
  column-gap: 15px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 0 30px 0;
  }
`;

const StyledFeaturesWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 30px 0 0;
  @media (max-width: 740px) {
    flex-direction: row;
    margin: 0;
  }
`;

export default DescriptionSection;
