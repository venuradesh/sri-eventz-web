import React from "react";
import styled from "styled-components";
import Gallery from "./Gallery";

export default function GallerySection(props) {
  console.log(props);
  return (
    <Container>
      <div className="section-heading">Recent projects</div>
      <div className="images-container">
        {props.photos.map((photo) => (
          <Gallery src={photo} />
        ))}
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px 40px;
  overflow: hidden;
  margin-top: 30px;
  padding: 0 40px;

  .section-heading {
    padding-left: 40px;
    padding-bottom: 20px;
    font-size: 2.5rem;
    text-transform: uppercase;
    color: #412542;
    font-weight: 700;
  }

  .images-container {
    column-gap: 10px;
    row-gap: 10px;
    flex-wrap: wrap;
    width: 100%;
    padding: 0px 40px;
    display: flex;
  }

  @media only screen and (max-width: 980px) {
    padding: 20px 0px;

    .section-heading {
      font-size: 1.8rem;
      text-align: left;
    }

    .images-container {
      padding-top: 20px;
    }
  }

  @media only screen and (max-width: 590px) {
    flex-direction: column;
    align-items: center;

    .images-container {
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: 410px) {
    padding: 0;

    .images-container {
      padding: 0;
    }
  }
`;
