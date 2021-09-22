import React from "react";
import styled from "styled-components";

function Screen() {
  return (
    <Container>
        
      <BgImage></BgImage>
    </Container>
  );
}

export default Screen;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: -100;
 
   
`;
const BgImage = styled.div`

width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.65);
background-image: url("/images/header1.jpg");
background-repeat: no-repeat;
background-size: cover;
`;

