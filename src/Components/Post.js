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
    fade: true,
    adaptiveHeight: true,
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
  width: 700px;
  height: 400px;
  background-color: #64495c;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 7px -2px rgba(0, 0, 0, 0.75);

  @media only screen and (min-width: 1900px) {
    width: 900px;
    height: 500px;
  }

  @media only screen and (max-width: 1300px) {
    width: 600px;
  }

  @media only screen and (max-width: 800px) {
    width: 600px;
    height: 500px;
  }

  @media only screen and (max-width: 620px) {
    width: 500px;
    height: 600px;
  }

  @media only screen and (max-width: 550px) {
    width: 410px;
  }

  @media only screen and (max-width: 450px) {
    width: 370px;
    height: 500px;
  }

  @media only screen and (max-width: 400px) {
    width: 330px;
    height: 500px;
  }

  @media only screen and (max-width: 350px) {
    width: 300px;
    height: 450px;
  }
`;

const PhotoWrapper = styled.div`
  width: 450px;
  height: 100%;
  background-color: #a989a0;

  @media only screen and (min-width: 1900px) {
    width: calc(2 * (700px / 3) + 100px);
    height: 100%;
  }

  @media only screen and (max-width: 1300px) {
    width: 390px;
  }

  @media only screen and (max-width: 800px) {
    width: 600px;
    height: 300px;
  }

  @media only screen and (max-width: 620px) {
    width: 100%;
    height: 350px;
  }

  @media only screen and (max-width: 550px) {
    width: 410px;
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
    height: 300px;
  }
`;

const InfoWrapper = styled.div``;

const Carousel = styled(Slider)`
  width: 450px;
  position: relative;

  .slick-list {
    img {
      display: block;
      cursor: grab;
      width: 500px;
      height: 400px;
      background-size: cover;
      background-position: center;
      object-fit: cover;
    }
  }

  .slick-next {
    position: absolute;
    right: 10px;
  }

  .slick-prev {
    position: absolute;
    left: 10px;
    z-index: 1;
  }

  ul.slick-dots {
    bottom: 0;
    position: relative;
    margin-top: 0.8rem;
    position: absolute;
    bottom: 10px;

    li button {
      &::before {
        font-size: 12px;
        color: #ffffff;
      }
    }

    li.slick-active button::before {
      color: #412542;
    }
  }

  @media only screen and (min-width: 1900px) {
    width: 100%;
    height: 100%;

    .slick-list {
      height: 100%;

      img {
        width: 100%;
        height: 500px;
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    width: 100%;
    height: 100%;

    .slick-list {
      img {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 100%;

    .slick-list {
      img {
        width: 100%;
        height: 300px;
      }
    }
  }

  @media only screen and (max-width: 620px) {
    .slick-list {
      img {
        height: 350px;
      }
    }
  }

  @media only screen and (max-width: 450px) {
    .slick-list {
      img {
        height: 300px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
  }

  @media only screen and (max-width: 350px) {
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a989a0;
`;
