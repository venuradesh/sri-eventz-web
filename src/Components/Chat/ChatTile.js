import React from "react";
import styled from "styled-components";
import moment from "moment";

const ChatTile = (props) => {
  return (
    <Container className={props.active}>
      <div className="header">
        <div className="name">{props.name}</div>
      </div>
      <div className="content">
        <div className="msg">{props.msg}</div>
      </div>
      <div className="date">
        <span>{moment(props.time.toDate().toString()).format("h:mm a")}</span>
      </div>
    </Container>
  );
};

export default ChatTile;

const Container = styled.div`
  max-width: 500px;
  width: max-content;
  position: absolute;
  border-radius: 12px;
  padding: 10px 10px;

  &.receiver {
    background-color: #412542;
    left: 0;
    border-bottom-left-radius: 0px;

    .name {
      position: absolute;
      top: -25px;
      left: 10px;
      font-size: 0.7rem;
    }

    .msg {
      color: #ffffff;
    }

    .date {
      span {
        color: #ffffff;
      }
    }
  }

  &.sender {
    background-color: #f2f2f2;
    border-bottom-right-radius: 0px;
    right: 0;

    .name {
      position: absolute;
      top: -25px;
      right: 10px;
      font-size: 0.7rem;
    }

    .msg {
      color: #412542;
    }

    .date {
      span {
        color: #412542;
      }
    }
  }

  .header {
    position: relative;

    .name {
      color: #412542;
      font-weight: 600;
    }
  }

  .content {
    .msg {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }

  .date {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    span {
      margin-top: 10px;
      font-size: 0.7rem;
      font-weight: 100;
    }
  }
`;
