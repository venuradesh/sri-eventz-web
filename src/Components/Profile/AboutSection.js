import React from "react";
import styled from "styled-components";

import About from "./About";

function AboutSection(props) {
  console.log(props.user);
  return <Container>{<About user={props.user} />}</Container>;
}

export default AboutSection;
const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  flex-direction: column;
  background-color: #ffffff;
  min-height: 100vh;
`;
