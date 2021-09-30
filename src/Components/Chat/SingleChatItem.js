import React from "react";
import styled from "styled-components";

const SingleChatItem = (props) => {
  return (
    <Container>
      <div className="profile-photo">
        <img src={props.img} />
      </div>
      <div className="name-container">
        <span>{props.name}</span>
        <span>{props.lastMsg}</span>
      </div>
    </Container>
  );
};

export default SingleChatItem;

const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d9d9d9;
  }

  .profile-photo {
    margin-right: 20px;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      background-size: cover;
      background-position: center;
      border-radius: 50%;
    }
  }

  .name-container {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1rem;
      font-weight: 700;
      width: 300px;
      text-transform: uppercase;
      overflow: hidden;
      margin-bottom: 3px;
      color: #412542;

      &:last-of-type {
        font-size: 0.6rem;
        text-transform: lowercase;
        white-space: nowrap;
        color: #412542;
        font-weight: 100;
      }
    }
  }
`;