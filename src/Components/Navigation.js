import React from "react";
import styled from "styled-components";

function Navigation() {
  return <Container></Container>;
}

export default Navigation;

const Container = styled.div`
  min-width: 200px;
  width: 250px;
  height: 80vh;
  max-width: 300px;
  background-color: #64495c;
  margin-left: 10px;
  margin-right: 10px;

  @media only screen and (min-width: 1550px) {
    width: 450px;
  }

  @media only screen and (min-width: 1430px) {
    width: 400px;
  }

  @media only screen and (max-width: 980px) {
    width: 100%;
    min-width: 600px;
    height: 200px;
  }

  @media only screen and (max-width: 620px) {
    width: 100%;
    min-width: 500px;
  }

  @media only screen and (max-width: 520px) {
    width: 100%;
    min-width: 400px;
  }

  @media only screen and (max-width: 430px) {
    width: 100%;
    min-width: 300px;
  }
`;
