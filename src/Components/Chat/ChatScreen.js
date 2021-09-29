import React from "react";
import styled from "styled-components";

function ChatScreen() {
  return <Container></Container>;
}

export default ChatScreen;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  padding-left: 20px;

  .main {
    max-width: 900vw;
    margin: auto;
    background-color: #fff;
    min-height: 80vh;
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    padding-left: 0;
  }

  .btn {
    background-color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    width: 230px;
    height: 47px;
    line-height: 47px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.02);
    display: flex;
    padding: 0;
    transition: all 0.3s ease-in-out;
  }
  .btn:hover {
    background-color: #4664ff;
    color: #fff;
    transform: scale(1.02);
  }
  .btn i {
    flex: 0.2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 18px;
    border-right: 1px solid #ebe7fb;
  }
  .btn span {
    flex: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
