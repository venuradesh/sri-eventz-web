import React from "react";
import styled from "styled-components";
import Event from "./Event";
import { useSelector } from "react-redux";
import { selectEvent } from "../features/ActiveEvent/EventSlice";

function EventsSideBar() {
  const selectedEvent = useSelector(selectEvent);

  const eventHolder = [
    { name: "birthday", image: "/images/wedding-cake.png", fontSize: "" },
    { name: "wedding", image: "/images/wedding-couple.svg", fontSize: "" },
    { name: "anniversary", image: "/images/champagne.svg", fontSize: "small" },
    { name: "corporate", image: "/images/corporation.svg", fontSize: "" },
    { name: "social", image: "/images/networking.svg", fontSize: "" },
    { name: "festival", image: "/images/concert.svg", fontSize: "" },
  ];

  return (
    <Container>
      <h1>Your Event</h1>
      <Wrapper>
        {eventHolder.map((event) => (
          <>
            <Event active={selectedEvent === event.name ? "active" : ""} eventName={event.name} eventPhoto={event.image} font_name={event.fontSize} />
          </>
        ))}
      </Wrapper>
    </Container>
  );
}

export default EventsSideBar;

const Container = styled.div`
  min-width: 200px;
  width: 250px;
  height: 500px;
  max-width: 400px;
  background-color: #64495c;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 7px 9px -3px rgba(0, 0, 0, 0.75);

  h1 {
    color: #ffffff;
    font-size: 1.2rem;
    text-transform: uppercase;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.75);
  }

  @media only screen and (min-width: 1431px) {
    width: 350px;
    padding: 20px 15px;
  }

  @media only screen and (max-width: 1430px) {
    width: 300px;
    padding: 20px 15px;
    padding-bottom: 25px;

    span {
      font-size: 0.9rem;
    }

    .small {
      font-size: 0.7rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 20px;

    span {
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 1280px) {
    margin-bottom: 30px;
    width: 100%;
    min-width: 600px;
    height: 320px;
  }

  @media only screen and (max-width: 620px) {
    width: 100%;
    min-width: 500px;
  }

  @media only screen and (max-width: 520px) {
    width: 100%;
    min-width: 400px;
    height: 500px;
  }

  @media only screen and (max-width: 430px) {
    width: 100%;
    min-width: 300px;
    height: 520px;
    padding-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 20px 0px;
  display: flex;
  row-gap: 10px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
