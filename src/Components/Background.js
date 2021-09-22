import React from "react";
import styled from "styled-components";

function Background() {
  return (
    <Container>
      <div className="background-image"></div>
    </Container>
  );
}

export default Background;

const Container = styled.div`
  height: 80vh;
  width: 100vw;
  position: fixed;
  z-index: -100;

  .background-image {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    background-image: url("/images/background-image-1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-blend-mode: multiply;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 30%;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to bottom, transparent 50%, #ffffff), linear-gradient(to top, #ffffff 10%, transparent);
    }
  }
`;
