import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import ChatList from "./ChatList";
import ChattingContainer from "./ChattingContainer";

export default class ChatSection extends Component {
  render() {
    return (
      <Container>
        <Header />
        <div className="chat-container">
          <ChatList />
          <ChattingContainer />
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
    min-height: calc(100vh - 6.25rem);
    background-color: aqua;
  }
`;
