import React from "react";
import styled from "styled-components";

function Background() {
  return (
    <Container>
      <BgImage></BgImage>
    </Container>
  );
}

export default Background;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -100;
`;

const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/background-image-1.jpg");
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 30%;
    bottom: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 50%, transparent), linear-gradient(to left, transparent 10%, #000000);
    z-index: 100;
  }
`;
