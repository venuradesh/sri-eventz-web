import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = () => {
  return (
    <Container>
      <div className="profile-pic">
        <img src="/images/profile-photo-1.jpg" />
      </div>
      <div className="msg-input">
        <input type="text" placeholder="Message" />
      </div>
      <div className="send">
        <SendIcon className="send-icon" />
      </div>
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  height: 90px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  padding: 0 40px;
  justify-content: space-between;
  box-shadow: 0 -5px 7px -7px rgba(0, 0, 0, 0.75);
  position: relative;

  .profile-pic {
    img {
      width: 40px;
      border-radius: 50%;
      height: 40px;
      object-fit: cover;
      background-size: cover;
      background-position: center;
    }
  }

  .msg-input {
    flex: 1;
    padding: 20px;
    display: flex;

    input {
      flex: 1;
      padding: 10px 20px;
      border-radius: 50px;
      border: none;
      font-size: 1.2rem;
      outline: none;
      color: #412542;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
        font-size: 1.2rem;
      }
    }
  }

  .send {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #412542;
    border-radius: 50%;
    cursor: pointer;

    .send-icon {
      color: #ffffff;
    }
  }
`;
