import React, { useRef, useState, useMemo, useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { EventRounded } from "@mui/icons-material";

const SingleChatItem = (props) => {
  const chatItem = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      gsap.fromTo(chatItem.current, { opacity: 0 }, { opacity: 1, duration: 0.7, delay: props.index + 0.2 });
    }
    const obeserver = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
    }, options);

    obeserver.observe(chatItem.current);
  }, [isIntersecting]);

  return (
    <Container ref={chatItem}>
      {isIntersecting === true ? (
        <>
          <div className="profile-photo">
            <img src={props.img} />
          </div>
          <div className="name-container">
            <span>{props.name}</span>
            <span>{props.lastMsg}</span>
          </div>
        </>
      ) : (
        <>
          <p>loading</p>
        </>
      )}
    </Container>
  );
};

export default SingleChatItem;

const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
  transition: all 0.3s ease;

  &.within {
    display: flex;
  }

  &.without {
    display: none;
  }

  &:hover {
    background-color: #d9d9d9;
  }

  .profile-photo {
    margin-right: 20px;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      background-size: cover;
      background-position: center;
      border-radius: 50%;
    }
  }

  .name-container {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1rem;
      font-weight: 700;
      width: 300px;
      text-transform: uppercase;
      overflow: hidden;
      margin-bottom: 3px;
      color: #412542;

      &:last-of-type {
        font-size: 0.6rem;
        text-transform: lowercase;
        white-space: nowrap;
        color: #412542;
        font-weight: 100;
      }
    }
  }
`;
