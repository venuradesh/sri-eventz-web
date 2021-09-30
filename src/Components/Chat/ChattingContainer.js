import React from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatScreen from "./ChatScreen";
import ChatInput from "./ChatInput";

const ChattingContainer = () => {
  return (
    <Container>
      <ProfileContainer>
        <div className="profile">
          <div className="profile-pic">
            <img src="/images/profile-photo-1.jpg" />
          </div>
          <div className="name">Venura Warnasooriya</div>
        </div>
        <div className="more-info">
          <MoreVertIcon className="more-info-icon" />
        </div>
      </ProfileContainer>
      <ChatScreen />
      <ChatInput />
    </Container>
  );
};

export default ChattingContainer;

const Container = styled.div`
  width: calc(100vw - 25rem);
  height: calc(100vh - 6.25rem);
  background-color: #d9d9d9;
`;

const ProfileContainer = styled.div`
  height: 70px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
  position: relative;

  .profile {
    display: flex;
    align-items: center;
    column-gap: 20px;
    cursor: pointer;

    .profile-pic {
      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
      }
    }

    .name {
      color: #412542;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1.2px;
    }
  }

  .more-info-icon {
    color: #412542;
    cursor: pointer;
  }
`;
