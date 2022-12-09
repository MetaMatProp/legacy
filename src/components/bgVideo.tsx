import React from "react";
import styled from "styled-components";
import video from "../assets/video.mp4";

const BgVideo = () => {
  return (
    <StyledVideo autoPlay muted loop>
      <source src={video} />
    </StyledVideo>
  );
};

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
  z-index: -1;
`;

export default BgVideo;
