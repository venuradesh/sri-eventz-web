import React from "react";
import styled from "styled-components";
import ChatTile from "./ChatTile";

const ChatScreen = () => {
  const data = [
    {
      name: "venura warnasooriya",
      content: "Hi How are you!, I'm willing to plan my wedding.",
      date: "9.00am",
      active: "receiver",
    },
    {
      name: "venura warnasooriya",
      content: "Hi How are you!, I'm willing to plan my wedding.",
      date: "9.00am",
      active: "sender",
    },
    {
      name: "venura warnasooriya",
      content: "Hi How are you!, I'm willing to plan my wedding.",
      date: "9.00am",
      active: "receiver",
    },
    {
      name: "venura warnasooriya",
      content: "Hi How are you!, I'm willing to plan my wedding.",
      date: "9.00am",
      active: "sender",
    },
    {
      name: "venura warnasooriya",
      content: "Hi How are you!, I'm willing to plan my wedding.",
      date: "9.00am",
      active: "receiver",
    },
    {
      name: "venura warnasooriya",
      content: "Hi How are you!, I'm willing to plan my wedding.",
      date: "9.00am",
      active: "sender",
    },
    {
      name: "venura warnasooriya",
      content: "Hi How are you!, I'm willing to plan my wedding.",
      date: "9.00am",
      active: "receiver",
    },
    {
      name: "venura warnasooriya",
      content: "Hi How are you!, I'm willing to plan my wedding.",
      date: "9.00am",
      active: "sender",
    },
    {
      name: "venura warnasooriya",
      content: "Hi How are you!, I'm willing to plan my wedding.",
      date: "9.00am",
      active: "receiver",
    },
    {
      name: "venura warnasooriya",
      content: "Hi How are you!, I'm willing to plan my wedding.",
      date: "9.00am",
      active: "sender",
    },
  ];

  return (
    <Container>
      {data.map((con) => (
        <div className="tile">
          <ChatTile active={con.active} date={con.date} name={con.name} msg={con.content} />
        </div>
      ))}
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
