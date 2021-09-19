import React from "react";
import styled from "styled-components";

function Description() {
  return (
    <Container>
      <div className="profile-photo" src="/images/profile-photo-1.jpg"></div>
      <div className="name">Filip Martin</div>
      <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum, fugiat voluptate mollitia, ea laboriosam saepe nihil assumenda, dignissimos inventore quod repellendus? Neque nobis perferendis, repellendus est dolor sed nisi.</div>
      <div className="btn-container">
        <div className="message">Messege Me</div>
        <div className="call">Call Me</div>
      </div>
    </Container>
  );
}

export default Description;

const Container = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 46.875rem; //750px
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-left: 40px;
  row-gap: 20px;

  .profile-photo {
    width: 100px;
    height: 100px;
    background-image: url("/images/profile-photo-1.jpg");
    border-radius: 50%;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  }

  .name {
    color: white;
    font-size: 4rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .desc {
    color: white;
    font-size: 1rem;
    font-weight: 200;
    text-align: justify;
    padding-right: 40px;
  }

  .btn-container {
    display: flex;
    align-items: center;
    column-gap: 20px;

    .message,
    .call {
      width: 150px;
      background-color: #64495c;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      font-weight: 600;
      color: white;
      border-radius: 100px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 0 7px -1px #ffffff;
        transform: scale(1.02);
      }
    }
  }

  @media only screen and (max-width: 780px) {
    width: 100vw;
    padding: 0 40px;
    align-items: center;

    .desc {
      width: 600px;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 600px) {
    .desc {
      width: 500px;
    }
  }

  @media only screen and (max-width: 530px) {
    .name {
      font-size: 3rem;
    }

    .desc {
      width: 400px;
    }
  }

  @media only screen and (max-width: 400px) {
    .profile-photo {
      width: 60px;
      height: 60px;
      margin-top: 60px;
    }

    .name {
      font-size: 2.5rem;
    }

    .desc {
      width: 100%;
      padding: 20px;
      margin-bottom: 0;
    }

    .btn-container {
      flex-direction: column;
      row-gap: 20px;
    }
  }
`;
