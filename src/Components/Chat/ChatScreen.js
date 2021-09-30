import React from "react";
import styled from "styled-components";
import ChatTile from "./ChatTile";
import { useSelector } from "react-redux";

const ChatScreen = (props) => {
  const user = useSelector((state) => state.user.user.name);

  return (
    <Container>
      {props.chat.map((chat) =>
        chat.content.messages.map((msg) => (
          <div className="tile">
            <ChatTile active={msg.position} time={msg.timestamp} name={msg.position === "receiver" ? props.userName : user} msg={msg.content} />
          </div>
        ))
      )}
    </Container>
  );
};

export default ChatScreen;

const Container = styled.div`
  height: calc(100vh - 6.25rem - 5rem - 5rem);
  width: 100%;
  background-color: #ffffff;
  padding: 30px 40px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  .tile {
    position: relative;
    width: calc(100vw - 25rem - 5rem);
    min-height: 80px;
  }
`;
