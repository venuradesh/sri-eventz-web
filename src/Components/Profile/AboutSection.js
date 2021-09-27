import React from "react";
import styled from "styled-components";

import About from "./About";

function AboutSection() {
  return (
    <Container>
      <About />
    </Container>
  );
}

export default AboutSection;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  flex-direction: column;
  background-color: #ffffff;
`;
