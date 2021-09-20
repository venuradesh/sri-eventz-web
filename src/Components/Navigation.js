import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { useSelector } from "react-redux";
import { selectSection } from "../features/ActiveSection/SectionSlice";

function Navigation() {
  let SectionContent = [
    { className: "timeline tile ", content: "timeline", icon: "/images/news-feed.svg" },
    { className: "search tile ", content: "search", icon: "/images/seo.svg" },
    { className: "guide tile ", content: "guide", icon: "/images/guide.svg" },
    { className: "planner tile ", content: "event planner", icon: "/images/wedding-planner.svg" },
    { className: "fav tile ", content: "favourites", icon: "/images/favourite.svg" },
    { className: "history tile ", content: "history", icon: "/images/history.svg" },
    { className: "settings tile ", content: "settings", icon: "/images/settings.svg" },
  ];

  const activeSection = useSelector(selectSection);
  SectionContent.map((section) => {
    const classNames = section.className.split(" ");
    if (classNames[0] === activeSection) {
      section.className += "active";
    }
  });

  return (
    <Container>
      {SectionContent.map((section) => (
        <Section classList={section.className} content={section.content} icon={section.icon} />
      ))}
    </Container>
  );
}

export default Navigation;

const Container = styled.div`
  min-width: 200px;
  width: 250px;
  background-color: #64495c;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 12px;
  height: max-content;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  position: sticky;
  top: 120px;
  color: #64495c;

  img {
    width: 30px;
  }

  .tile {
    cursor: pointer;
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 7px -3px rgba(0, 0, 0, 0.75);

    &:hover {
      transform: scale(1.02);
    }

    &.active {
      background-color: #412542;
      color: #ffffff;
    }
  }

  @media only screen and (min-width: 1550px) {
    width: 450px;
  }

  @media only screen and (min-width: 1430px) {
    width: 300px;
  }

  @media only screen and (max-width: 1280px) {
    display: none;
    position: relative;
    top: 0;
  }
`;
