import React, { useState } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (action: React.Dispatch<React.SetStateAction<string>>) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      action(event.target.value);
    };
  };
  const send = (event: React.MouseEvent<HTMLInputElement>) => {
    window.location.href = `mailto:jaemo.sung@gmail.com?subject=${
      "[MetaMatProp] " + subject
    }&body=${`From: ${name} <${email}> <${affiliation}>%0D%0ASubject: ${subject}%0D%0A%0D%0AMessage Body:%0D%0A${message}%0D%0A--%0D%0AThis e-mail was sent from a contact form on MetaMatProp (http://metamatprop.com)`}`;
  };
  return (
    <StyledContactSection>
      <StyledInnerWrapper>
        <StyledTitle marginBottom="0">Contact</StyledTitle>
        <StyledSubTitle>
          Thank you for contacting us. Please, feel free to have questions. We are located in South Korea and will reach you as fast as possible.
        </StyledSubTitle>
        <StyledBoxWrapper>
          <Box styles={boxStyle}>
            <TextInput placeholder="Your Name (required)" value={name} onChange={handleChange(setName)} />
            <TextInput placeholder="Your Email (required)" value={email} onChange={handleChange(setEmail)} />
            <TextInput placeholder="Affiliation (required)" value={affiliation} onChange={handleChange(setAffiliation)} />
            <TextInput placeholder="Subject" value={subject} onChange={handleChange(setSubject)} />
            <TextArea placeholder="Your Message (required)" value={message} onChange={handleChange(setMessage)} />
            <Button value="Send" onClick={send} />
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
  padding: 0 100px;
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
  z-index: 99;
`;

export default ContactSection;
