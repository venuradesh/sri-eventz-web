import React, { Component } from "react";
import styled from "styled-components";
import ChatList from "./chatlist/ChatList";
import ChatContent from "./content/ChatContent";
import ChatScreen from "./ChatScreen";
import Header from "./Header";

export default class ChatSection extends Component {
  render() {
    return (
      <Container>
        <Header />
        <div className="chat-container">
          <ChatList />
          <ChatContent />
          <ChatScreen />
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .chat-container {
    display: flex;
    width: 100%;
  }
`;
