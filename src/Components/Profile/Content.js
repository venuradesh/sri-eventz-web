import React from "react";
import styled from "styled-components";

const Content = () => {
  return (
    <Container>
      <div className="display-image">
        <div className="profile-photo" src="pro.jpg">
          <div className="fav" src="heart.png"></div>
        </div>
      </div>
      <div className="name">John Hardin</div>

      <div className="quote">Fashion designer</div>

      <div className="dis">I have been working with luxury brands using my style sense all over the world and collaborating with them in departments such as Women's Wear, Men's Wear</div>
      <div className="btn-container">
        <div className="message">Message me</div>
        <div className="call">Call me</div>
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
      background-image: url(/images/pro.jpg);
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
    font-size: 57px;
    font-weight: 370;
    color: #ffffff;
  }
  .quote {
    margin-top: 20px;
    font-size: 30px;
    text-transform: uppercase;
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
    margin-top: 40px;
    align-items: center;
    column-gap: 40px;

    .message {
      text-align: center;
      width: 170px;
      background-color: #64495c;
      height: 60px;
      text-transform: uppercase;
      font-weight: 600;
      align-items: center;
      justify-content: center;
      display: flex;
      border-radius: 100px;
      color: white;
      font-weight: 500px;
      font-size: 1.1rem;
      cursor: pointer;

      &:hover {
        background-color: #412542;
        transform: scale(1.02);
      }
    }

    .call {
      text-align: center;
      width: 170px;
      background-color: #64495c;
      height: 100%;
      height: 60px;
      text-transform: uppercase;
      font-weight: 600;
      align-items: center;
      justify-content: center;
      display: flex;
      border-radius: 100px;
      color: white;
      font-weight: 500px;
      font-size: 1.1rem;
      cursor: pointer;

      &:hover {
        background-color: #412542;
        transform: scale(1.02);
      }
    }
  }

  @media only screen and (max-width: 780px) {
    align-items: center;
    width: 650px;
    margin-left: 0;

    .name {
      font-size: 1rem;
    }

    .quote {
      font-size: 2.5rem;
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
    align-items: center;
    width: 90vw;

    .dis {
      text-align: center;
      width: 450px;
    }
  }

  @media only screen and (max-width: 500px) {
    align-items: center;
    width: 350px;
    padding: 0 35px;

    .quote {
      text-align: center;
    }

    .dis {
      width: 400px;
    }
  }

  @media only screen and (max-width: 390px) {
    align-items: center;
    width: 300px;

    .dis {
      width: 300px;
    }
  }
`;
