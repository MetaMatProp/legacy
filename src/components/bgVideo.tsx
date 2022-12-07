import React from "react";
import styled from "styled-components";
import video from "../assets/video.mp4";

const BgVideo = () => {
  return (
    <StyledVideoWrapper>
      <StyledVideo autoPlay muted loop>
        <source src={video} />
      </StyledVideo>
    </StyledVideoWrapper>
  );
};

const StyledVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  min-width: 100%;
`;

export default BgVideo;
