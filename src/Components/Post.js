import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Post(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    fade: true,
  };

  props.images.map((img) => {
    console.log(img);
  });

  return (
    <Container>
      <PhotoWrapper>
        <Carousel {...settings}>
          {props.images.map((imgsrc) => (
            <Wrap>
              <div className="image">
                <img src={imgsrc} />
              </div>
            </Wrap>
          ))}
        </Carousel>
      </PhotoWrapper>
      <InfoWrapper></InfoWrapper>
    </Container>
  );
}

export default Post;

const Container = styled.div`
  background-color: #64495c;
  margin-left: 10px;
  margin-right: 10px;
  height: 420px;
  border-radius: 12px;
  display: flex;
  box-shadow: 0 7px 9px -5px rgba(0, 0, 0, 0.75);
  overflow: hidden;

  @media only screen and (min-width: 1431px) {
  }

  @media only screen and (max-width: 1430px) {
  }

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (min-width: 981px) {
    width: 100%;
    min-width: 600px;
    max-width: 700px;
  }

  @media only screen and (max-width: 980px) {
    width: 600px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media only screen and (max-width: 620px) {
    width: 500px;
    height: 500px;
    display: flex;
  }

  @media only screen and (max-width: 520px) {
    width: 400px;
    flex-direction: column;
  }

  @media only screen and (max-width: 430px) {
    width: 300px;
  }
`;

const PhotoWrapper = styled.div`
  flex: 3;
  background-color: #a989a0;
  box-sizing: border-box;
  width: 66px;
`;

const InfoWrapper = styled.div`
  flex: 2;
`;

const Carousel = styled(Slider)`
  width: 100%;
  position: relative;

  .slick-list {
    width: 100%;

    .slick-track {
      width: 100%;
    }
  }

  .slick-next {
    position: absolute;
    right: 10px;
    width: 30px;
    height: 30px;
    background-color: #64495c;
    border-radius: 50%;

    &::before {
      content: "";
      position: absolute;
      background-image: url("/images/right-arrow.png");
      width: 15px;
      height: 15px;
      left: 50%;
      transform: translateX(-15%) translateY(50%);
      top: 0;
      left: 10px;
      background-size: contain;
      object-fit: cover;
    }
  }

  .slick-prev {
    position: absolute;
    left: 10px;
    width: 30px;
    height: 30px;
    background-color: #64495c;
    border-radius: 50%;
    z-index: 10;

    &::before {
      content: "";
      position: absolute;
      background-image: url("/images/left-arrow.png");
      width: 15px;
      height: 15px;
      left: 50%;
      transform: translateX(-15%) translateY(50%);
      top: 0;
      left: 10px;
      background-size: contain;
      object-fit: cover;
    }
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 372px;
    height: 420px;
    object-fit: cover;
    background-size: cover;
  }

  @media only screen and (max-width: 980px) {
    img {
      width: 360px;
      height: 420px;
    }
  }

  @media only screen and (max-width: 620px) {
    img {
    }
  }

  @media only screen and (max-width: 520px) {
    img {
    }
  }

  @media only screen and (max-width: 430px) {
    img {
    }
  }
`;
