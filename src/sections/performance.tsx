import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { StyledTitle, StyledSubTitle } from "../components/text";

const boxStyle = {
  width: "auto",
  height: "100%",
  textAlign: "center",
  alignItems: "flex-start",
  padding: "25px",
  flexDirection: "column",
};

const PerformanceSection = () => {
  return (
    <StyledContactSection>
      <StyledInnerWrapper>
        <StyledTitle marginBottom="0">Performance</StyledTitle>
        <StyledSubTitle>
          For Multi-threaded CPU Computing Environment, MetaMatProp can achieve
          the order of faster computing speed and two~three times less memory
          consumption than Armadillo, Matlab, and Tensorflow.
        </StyledSubTitle>
        <StaticImage
          src="../assets/performance.png"
          alt="performance"
          placeholder="blurred"
          style={{ zIndex: 99 }}
        />
      </StyledInnerWrapper>
    </StyledContactSection>
  );
};

const StyledContactSection = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #06141c;
  align-items: center;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  max-width: 1300px;
  width: 100%;
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

export default PerformanceSection;
