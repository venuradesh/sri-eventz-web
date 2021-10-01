import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

const Content = (props) => {
  const message = useRef();
  const userCon = useRef();
  const history = useHistory();

  useEffect(() => {
    gsap.fromTo(userCon.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 1.2 });
  }, []);

  const onMessageClick = () => {
    history.push(`/chat/${props.id}`);
  };

  return (
    <Container ref={userCon}>
      <div className="display-image">
        <img className="profile-photo" src={props.profileImage}></img>
      </div>
      <div className="name">{props.name}</div>

      <div className="quote">{props.title}</div>

      <div className="dis">{props.description}</div>
      <div className="btn-container">
        <div className="message" ref={message} onClick={() => onMessageClick()}>
          Message me
        </div>
        <a href={`tel:+94${props.telephone},1`} className="call">
          Call me
        </a>
      </div>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  position: absolute;
  width: 44.876rem;
  top: 50%;
  transform: translateY(-38%);
  padding: 20px;
  height: 500px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .display-image {
    height: 125px;
    display: flex;
    align-items: center;

    .profile-photo {
      background-color: black;
      background-size: cover;
      object-fit: cover;
      background-position: center;
      background-image: url(${(props) => props.src});
      border-radius: 50%;
      width: 125px;
      height: 125px;
      z-index: -10;
      position: relative;

      .fav {
        position: absolute;
        background-image: url(/images/heart.png);
        width: 25px;
        height: 25px;
        margin-left: 100px;
        margin-top: 94px;

        background-size: contain;
        object-fit: cover;
      }
    }
  }

  .name {
    font-size: 2.5rem;
    font-weight: 370;
    margin-top: 20px;
    font-weight: 700;
    color: #ffffff;
  }
  .quote {
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: capitalize;
    color: #ffffff;
  }
  .dis {
    color: #ffffff;
    font-weight: 300;
    font-size: 1rem;
    margin-top: 20px;
    text-align: left;
  }
  .btn-container {
    display: flex;
    margin-top: 30px;
    align-items: center;
    column-gap: 40px;

    .message {
      text-align: center;
      width: 150px;
      background-color: #64495c;
      height: 50px;
      text-transform: uppercase;
      font-weight: 600;
      align-items: center;
      justify-content: center;
      display: flex;
      border-radius: 100px;
      color: white;
      font-weight: 500px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #412542;
        transform: scale(1.02);
      }
    }

    .call {
      text-align: center;
      width: 150px;
      background-color: #64495c;
      height: 100%;
      height: 50px;
      text-transform: uppercase;
      font-weight: 600;
      align-items: center;
      justify-content: center;
      display: flex;
      border-radius: 100px;
      color: white;
      font-weight: 500px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;

      &:hover {
        background-color: #412542;
        transform: scale(1.02);
      }
    }
  }

  @media only screen and (max-width: 780px) {
    align-items: center;
    width: 100vw;
    margin-left: 0;

    .name {
      font-size: 2rem;
    }

    .quote {
      margin-top: 10px;
      font-size: 1rem;
    }

    .dis {
      width: 500px;
      text-align: center;
      font-size: 1rem;
      margin-bottom: 20px;
    }

    .btn-container {
      margin-top: 20px;
      flex-direction: column;
      row-gap: 15px;
    }
  }

  @media only screen and (max-width: 580px) {
    width: 90vw;

    .dis {
      text-align: center;
      width: 450px;
    }
  }

  @media only screen and (max-width: 500px) {
    width: 90vw;
    padding: 0 35px;

    .name {
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
    }

    .dis {
      width: 100%;
    }
  }

  @media only screen and (max-width: 400px) {
    width: 90vw;
    padding: 0;

    .name {
      font-size: 1.5rem;
    }

    .dis {
      width: 300px;
    }
  }

  @media only screen and (max-width: 370px) {
    width: 80vw;
  }
`;
