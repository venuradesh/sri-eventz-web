import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import moment from "moment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import gsap from "gsap";
import { useSelector } from "react-redux";

function Post(props) {
  const post = useRef();
  const userState = useSelector((state) => state.user.user.name);
  const msg = useRef();

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

  useEffect(() => {
    gsap.fromTo(post.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  const onMessageClick = (e) => {
    if (!userState) {
      e.preventDefault();
      window.alert("You Have to Login to use SriChat");
    }
  };

  return (
    <Container className="fade" ref={post}>
      <PhotoWrapper>
        <Carousel {...settings}>
          {props.images.map((imgsrc) => (
            <Wrap>
              <div className="image">
                <img src={imgsrc} alt={props.postid} />
              </div>
            </Wrap>
          ))}
        </Carousel>
      </PhotoWrapper>
      <InfoWrapper>
        <div className="explanation">
          <div className="profile">
            <div className="profile-photo">
              <img src={props.user.profileImage} />
            </div>
            <div className="name-container">
              <div className="user-name">{props.user.name}</div>
              <div className="title">{props.user.title}</div>
              <div className="level">
                {props.user.level.name} <span>member</span>
              </div>
            </div>
          </div>
          <div className="description">
            {props.desc}
            <br />
            <p>All Right Reserved by {props.user.name} &copy; 2021</p>
          </div>
        </div>
        <div className="btn-container">
          <div className="msg-profile">
            <Link to={`/profile/${props.id}`} className="profile-visit">
              Visit Profile
            </Link>
            <Link to={`/chat/${props.id}`} className="message" ref={msg} onClick={(e) => onMessageClick(e)}>
              Messege
            </Link>
          </div>
          <div className="like-favourite">
            <FavoriteBorderOutlinedIcon className="heart-icon" />
            <BookmarkBorderOutlinedIcon className="bookmark" />
          </div>
          <LocTime>
            <div className="dateTime">
              <AccessTimeOutlinedIcon className="clock" />
              <p>{moment(props.time.toDate().toString()).fromNow()}</p>
            </div>
            <div className="location">
              <LocationOnOutlinedIcon className="loc-icon" />
              <p>{props.loc}</p>
            </div>
          </LocTime>
        </div>
      </InfoWrapper>
    </Container>
  );
}

export default Post;

const Container = styled.div`
  width: 800px;
  height: 400px;
  background-color: #64495c;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 7px -2px rgba(0, 0, 0, 0.75);
  display: flex;

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
    flex-direction: column;
  }

  @media only screen and (max-width: 620px) {
    width: 500px;
    height: 550px;
  }

  @media only screen and (max-width: 550px) {
    width: 410px;
    height: 580px;
  }

  @media only screen and (max-width: 450px) {
    width: 370px;
    height: 580px;
  }

  @media only screen and (max-width: 400px) {
    width: 330px;
    height: 600px;
  }

  @media only screen and (max-width: 350px) {
    width: 300px;
    height: 600px;
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
    width: 330px;
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

const InfoWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: content-box;

  .explanation {
    .description {
      margin-top: 20px;
      font-size: 0.8rem;
      text-align: justify;
      font-weight: 400;
      color: #e3c6db;

      p {
        font-size: 0.6rem;
        font-weight: 600;
        margin-top: 10px;
      }
    }

    .profile {
      display: flex;
      align-items: center;
      cursor: pointer;

      .profile-photo {
        width: 43px;
        height: 43px;
        margin-right: 10px;

        img {
          object-fit: cover;
          background-size: cover;
          border-radius: 8px;
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
          obejct-fit: cover;
          border: 1px solid #e3c6db;
        }
      }

      .name-container {
        color: #e3c6db;

        .user-name {
          font-weight: 600;
          font-size: 0.9rem;

          &:hover {
            font-weight: 650;
          }
        }

        .title {
          font-size: 0.6rem;
        }

        .level {
          font-size: 0.6rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-top: 3px;

          span {
            font-size: 0.5rem;
            text-transform: lowercase;
            font-weight: 400;
          }
        }
      }
    }
  }

  .btn-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .msg-profile {
      display: flex;
      flex-direction: column;

      .profile-visit,
      .message {
        width: 180px;
        padding: 15px 10px;
        background-color: #412542;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #e3c6db;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 1px;
        box-shadow: 0 5px 7px -4px rgba(0, 0, 0, 0.75);
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.02);
        }
      }

      .message {
        margin-top: 10px;
      }
    }
    .like-favourite {
      margin-top: 20px;

      .heart-icon,
      .bookmark {
        font-size: 1.7rem;
        color: #e3c6db;
        cursor: pointer;

        &:hover {
          transform: scale(1.02);
        }
      }

      .bookmark {
        margin-left: 10px;
      }
    }

    .time {
    }
  }

  @media only screen and (max-width: 1300px) {
    .explanation {
      .description {
        font-size: 0.75rem;

        p {
          font-size: 0.5rem;
        }
      }
    }

    .btn-container {
      height: 200px;

      .msg-profile {
        .profile-visit,
        .message {
          width: 130px;
          font-size: 0.7rem;
          padding: 15px 10px;
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 20px;
    box-sizing: border-box;
    display: flex;

    .explanation {
      width: 300px;
      flex: 1;

      .description {
        margin-top: 20px;
        font-size: 0.8rem;
      }
    }

    .btn-container {
      width: 300px;
      flex: 1;
      display: flex;
      margin-top: 0;
      height: 100%;
      padding-left: 20px;

      .msg-profile {
        flex-direction: row;
        column-gap: 10px;

        height: 50px;

        .message {
          margin-top: 0;
        }
      }

      .like-favourite {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 620px) {
    height: 100%;

    .explanation {
      text-align: justify;
      flex: 2;
    }

    .btn-container {
      flex: 1.3;
      height: 100%;

      .msg-profile {
        flex-direction: column;
        align-items: center;
        row-gap: 10px;

        .profile-visit,
        .message {
          font-size: 0.7rem;
          padding: 10px 10px;
        }
      }

      .like-favourite {
        margin-top: 40px;

        .heart-icon,
        .bookmark {
          font-size: 1.3rem;
        }
      }
    }
  }

  @media only screen and (max-width: 450px) {
    flex-direction: column;

    .explanation {
      .profile {
        .profile-photo {
          width: 30px;
          height: 30px;
        }

        .name-container {
          .user-name {
            font-size: 0.8rem;
          }

          .title {
            font-size: 0.5rem;
          }

          .level {
            font-size: 0.5rem;

            span {
              font-size: 0.4rem;
            }
          }
        }
      }
      .description {
        margin-top: 10px;
        font-size: 0.7rem;
        font-weight: 100;
      }
    }

    .btn-container {
      padding-left: 0;

      .msg-profile {
        flex-direction: row;
      }
      .like-favourite {
        margin-top: 10px;
        justify-content: flex-start;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .explanation {
      padding-right: 20px;
    }
  }

  @media only screen and (max-width: 350px) {
    .explanation {
      padding-right: 40px;
    }

    .btn-container {
      .msg-profile {
        .profile-visit,
        .message {
          font-size: 0.6rem;
          width: 100px;
        }
      }
    }
  }
`;

const LocTime = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  margin-top: 10px;
  cursor: default;

  .dateTime,
  .location {
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: rgba(227, 198, 219, 0.4);

    p {
      font-size: 0.8rem;
      font-weight: 100;
    }
  }

  .dateTime {
    .clock {
      font-size: 0.9rem;
    }
  }

  .location {
    .loc-icon {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 800px) {
    justify-content: center;
  }

  @media only screen and (max-width: 620px) {
    flex-direction: column;
    row-gap: 3px;
  }

  @media only screen and (max-width: 450px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

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
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a989a0;
`;
