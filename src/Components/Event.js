import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setEvent, unsetEvent } from "../features/ActiveEvent/EventSlice";

const Event = (props) => {
  const dispatch = useDispatch();
  const eventSpan = useRef();

  const clickOnSetEvent = () => {
    const eventName = eventSpan.current.textContent;
    dispatch(unsetEvent());
    dispatch(setEvent({ active: eventName }));
  };

  return (
    <Container className={props.active} onClick={clickOnSetEvent}>
      <span className={props.font_size} ref={eventSpan}>
        {props.eventName}
      </span>
      <img src={props.eventPhoto} />
    </Container>
  );
};

export default Event;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 15px 25px;
  width: 250px;
  justify-content: space-between;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  box-shadow:0 5px 7px -3px rgba(0,0,0,0.75);
  transition: transform 0.3s ease;
  
  &.active{
    background-color: #412542;

    span{
      color:#ffffff;
    }
  }

  img {
    width: 30px;
  }
  
  span {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-right: 20px;
    color: #412542;x
  }

  .small {
    font-size: 0.9rem;
  }

  &:hover{
    transform:scale(1.02);
  }

  @media only screen and (min-width: 1430px) {
    width: 100%;

    &.active{
      transform:translateX(-15%);
    }

    span {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    span {
      max-width: 100%;
      font-size: 0.6rem;
      letter-spacing: 0;
      flex: 1;
      padding: 0px 0px;
    }

    img {
      width: 25px;
    }

    .small {
      font-size: 0.5rem;
    }
  }

  @media only screen and (max-width: 980px) {
    span {
      font-size: 0.9rem;
    }
    .small {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 620px) {
    width: 220px;

    span {
      font-size: 0.9rem;
    }

    .small {
      font-size: 0.7rem;
    }
  }

  @media only screen and (max-width: 520px) {
    width: 100%;
    margin: 0 20px;

    span {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 430px) {
  }
`;
