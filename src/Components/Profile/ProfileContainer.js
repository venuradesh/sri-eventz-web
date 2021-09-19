import React from "react";
import styled from "styled-components";
import Background from "./Background";
import Description from "./Description";
import Header from "./Header";

const ProfileContainer = () => {
  return (
    <Container>
      <Background />
      <Header />
      <Description />
    </Container>
  );
};

export default ProfileContainer;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;
