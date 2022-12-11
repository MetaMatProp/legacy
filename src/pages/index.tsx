import React from "react";
import styled from "styled-components";
import Seo from "../components/seo";
import Header from "../components/header";
import IntroSection from "../sections/intro";
import DescriptionSection from "../sections/description";
import ContactSection from "../sections/contact";
import BgVideo from "../components/bgVideo";
import StyledTriangle from "../components/triangle";

const IndexPage = () => {
  return (
    <>
      <Seo title="Designed AI" />
      <Header />
      <BgVideo />
      <StyledMain>
        <StyledTriangle top="100vh" height="200vh" />
        <IntroSection />
        <DescriptionSection />
        <ContactSection />
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  scroll-snap-type: y mandatory;
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
  position: relative;
  z-index: 1;
`;

export default IndexPage;
