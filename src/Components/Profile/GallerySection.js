import React from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import GalleryContent from "../../Data/GalleryContent";

export default function GallerySection() {
  return (
    <Container>
      <div className="section-heading">Recent projects</div>
      <div className="images">{GalleryContent.map((photo) => photo.images.map((image) => <Gallery src={image} />))}</div>
    </Container>
  );
}
const Container = styled.div`
  padding: 20px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  .section-heading {
    padding: 20px 0 40px;
    font-size: 2.5rem;
    text-transform: uppercase;
    color: #412542;
    font-weight: 700;
  }

  .images {
    display: flex;
    column-gap: 10px;
    row-gap: 10px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  @media only screen and (max-width: 930px) {
    .section-heading {
      font-size: 1.8rem;
    }

    .images {
      align-items: center;
    }
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
