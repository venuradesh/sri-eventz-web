import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Screen from "./Screen";
import Content from "./Content";

const ProfileContainer = () => {
  return (
    <Container>
      <Screen />
      <Nav />
      <Content />
    </Container>
  );
};

export default ProfileContainer;

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  @media only screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
