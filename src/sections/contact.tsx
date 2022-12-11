import React from "react";
import styled from "styled-components";
import Box from "../components/box";
import { StyledTitle, StyledSubTitle } from "../components/text";
import { TextInput, TextArea, Button } from "../components/form";

const boxStyle = {
  width: "auto",
  height: "100%",
  textAlign: "center",
  alignItems: "flex-start",
  padding: "25px",
  flexDirection: "column",
};

const ContactSection = () => {
  return (
    <StyledContactSection>
      <StyledInnerWrapper>
        <StyledTitle marginBottom="0">Contact</StyledTitle>
        <StyledSubTitle>
          Thank you for contacting us. Please, feel free to have questions. We
          are located in South Korea and will reach you as fast as possible.
        </StyledSubTitle>
        <StyledBoxWrapper>
          <Box styles={boxStyle}>
            <TextInput placeholder="Your Name (required)" />
            <TextInput placeholder="Your Email (required)" />
            <TextInput placeholder="Affiliation (required)" />
            <TextInput placeholder="Subject" />
            <TextArea placeholder="Your Message (required)" />
            <Button value="Send" />
          </Box>
        </StyledBoxWrapper>
      </StyledInnerWrapper>
    </StyledContactSection>
  );
};

const StyledContactSection = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #06141c;
  scroll-snap-align: start;
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

const StyledBoxWrapper = styled.div`
  max-width: 60%;
  min-width: 600px;
  @media (max-width: 740px) {
    max-width: 100%;
    min-width: 0;
  }
`;

export default ContactSection;
