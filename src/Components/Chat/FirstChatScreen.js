import React from "react";
import styled from "styled-components";

const FirstChatScreeen = (props) => {
  return (
    <Container>
      <img src={props.img} />
      <div className="text-container">
        <span>{props.name}</span>
        <span>How Can I Help You?</span>
      </div>
    </Container>
  );
};

export default FirstChatScreeen;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin-right: 20px;
  }

  .text-container {
    display: flex;
    flex-direction: column;

    span {
      color: #412542;

      &:first-of-type {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
`;
