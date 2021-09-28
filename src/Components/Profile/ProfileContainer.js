import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Screen from "./Screen";
import Content from "./Content";

const ProfileContainer = (props) => {
  return (
    <Container>
      <Screen />
      <Nav />
      <Content id={props.id} telephone={props.telephone} name={props.name} profileImage={props.profileImage} level={props.level} description={props.description} title={props.title} />
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
