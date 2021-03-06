import React from "react";
import styled from "styled-components";

export default function Gallery(props) {
  return (
    <Container>
      <img src={props.src} />
    </Container>
  );
}

const Container = styled.div`
  width: 203px;
  height: 303px;

  img {
    width: 300px;
    height: 400px;
    object-fit: cover;

    &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
