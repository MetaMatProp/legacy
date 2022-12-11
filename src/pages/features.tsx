import React from "react";
import styled from "styled-components";
import Seo from "../components/seo";
import Header from "../components/header";
import FeaturesSection from "../sections/features";
import StyledTriangle from "../components/triangle";

const FeaturesPage = () => {
  return (
    <>
      <Seo title="Designed AI" />
      <Header />
      <StyledMain>
        <StyledTriangle />
        <FeaturesSection />
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #06141c;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export default FeaturesPage;
