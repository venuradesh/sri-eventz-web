import React, { Component } from "react";
import styled from "styled-components";
import ChatList from "./chatlist/ChatList";
import ChatContent from "./content/ChatContent";
// import "./style.css";
import ChatScreen from "./ChatScreen";

export default class ChatSection extends Component {
  render() {
    return (
      <Container>
        <ChatList />
        <ChatContent />
        <ChatScreen />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;
