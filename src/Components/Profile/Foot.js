import React from "react";
import styled from "styled-components";

const Foot = () => {
  return (
    <Container>
      <div className="social-media">
        <div className="facebook"></div>
        <div className="twitter"></div>
        <div className="linkedin"></div>
        <div className="instagram"></div>
        <div className="email"></div>
      </div>
      <div className="line"></div>
      <div className="copyrights">
        <p>&copy; Copyrights SriEventZ. All Rights Reserved.</p>
        <p>Created By Team Xposion</p>
      </div>
    </Container>
  );
};

export default Foot;

const Container = styled.div`
  height: 200px;
  width: 100%;
  background-color: #64495c;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
  position: relative;
  width: 100vw;

  .social-media {
    display: flex;
    column-gap: 30px;
    cursor: pointer;

    .facebook,
    .instagram,
    .twitter,
    .linkedin,
    .email {
      width: 25px;
      height: 25px;
      background-size: cover;
      obejct-fit: cover;
      background-position: center;
    }

    .facebook {
      background-image: url("/images/facebook.svg");
    }

    .instagram {
      background-image: url("/images/instagram.svg");
    }

    .twitter {
      background-image: url("/images/twitter.svg");
    }

    .linkedin {
      background-image: url("/images/linkedin.svg");
    }

    .email {
      background-image: url("/images/email.svg");
    }
  }

  .line {
    width: 50%;
    height: 1px;
    background-color: rgba(227, 198, 219, 0.3);
  }

  .copyrights {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #e3c6db;
    row-gap: 10px;
  }

  @media only screen and (max-width: 780px) {
    .line {
      width: 80%;
    }
  }

  @media only screen and (max-width: 550px) {
    height: 160px;

    .social-media {
      .facebook,
      .instagram,
      .linkedin,
      .twitter,
      .email {
        width: 20px;
        height: 20px;
      }
    }

    .copyrights {
      row-gap: 5px;

      p {
        font-size: 0.8rem;
      }
    }
  }

  @media only screen and (max-width: 350px) {
    .line {
      width: 100%;
    }

    .copyrights {
      p {
        font-size: 0.6rem;
      }
    }
  }
`;
