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

      <div className="dis">
        I have been working with luxury brands using my style sense all over the
        world and collaborating with them in departments such as Women's Wear,
        Men's Wear
      </div>
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
  // row-gap: 10px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;

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
    font-size: 30px;

    color: #ffffff;
  }
  .dis {
    color: #ffffff;
    font-weight: 300;
    text-align: left;
    padding-right: 40px;
  }
  .btn-container {
    display: flex;

    align-items: center;
    height: 46px;
    column-gap: 40px;

    margin-top: 15px;

    .message {
      text-align: center;
      width: 170px;
      background-color: #64495c;
      height: 100%;
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
    padding: 0 48px;

    .name {
      font-size: 50px;
    }

    .quote {
      font-size: 38px;
    }
    .dis {
      text-align: center;

      font-size: 25px;
    }
  }

  @media only screen and (max-width: 690px) {
    align-items: center;
    width: 550px;
    padding: 0 47px;

    .name {
      font-size: 50px;
    }

    .quote {
      font-size: 30px;
    }
    .dis {
      text-align: center;

      font-size: 20px;
    }
  }

  @media only screen and (max-width: 520px) {
    align-items: center;
    width: 415px;
    padding: 0 35px;

    .name {
      font-size: 30px;
      padding: 0 0 -30px;
    }

    .quote {
      font-size: 25px;
      padding: 0 0 -30px;
    }
    .dis {
      text-align: center;

      font-size: 20px;
    }
    .btn-container {
      flex-direction: column;
      row-gap: 10px;
      height: 90px;
    }
  }

  @media only screen and (max-width: 460px) {
    align-items: center;
    width: 350px;
    padding: 0 35px;

    .name {
      font-size: 35px;
    }

    .quote {
      font-size: 24px;
    }
    .dis {
      text-align: center;

      font-size: 14px;
    }
    .btn-container {
      flex-direction: column;
      row-gap: 10px;
      height: 100px;
    }
  }

  @media only screen and (max-width: 390px) {
    align-items: center;
    width: 300px;

    .name {
      font-size: 35px;
    }

    .quote {
      font-size: 17px;
    }
    .dis {
      text-align: center;

      font-size: 17px;
      padding: 0 0 0 20px;
    }
    .btn-container {
      flex-direction: column;
      row-gap: 10px;
      height: 70px;
    }
  }
`;
