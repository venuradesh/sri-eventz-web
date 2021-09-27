import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import testimonials from "../../Data/testimonials";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];

  function handleNext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }

  return (
    <TestimonialSectionStyles>
      <div className="container">
        <div className="subHeading"> see what our clients say about me</div>
        <div className="Heading">Testimonials</div>
        <div className="testimonial-wrapper">
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonial-info">
                <div className="testimonial-desc">
                  <p>{activeSlide.desc}</p>
                </div>
                <h2 className="testimonial-name">{activeSlide.name}</h2>
                <p className="testimonial-title">
                  {activeSlide.title}, <br /> {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className="arrows">
          <div className="prev" onClick={handlePrev} role="button" tabIndex={0} onKeyDown={handlePrev}>
            <MdKeyboardArrowLeft />
          </div>
          <div className="next" onClick={handleNext} role="button" tabIndex={0} onKeyDown={handleNext}>
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
    </TestimonialSectionStyles>
  );
}

const TestimonialSectionStyles = styled.div`
  padding-top: 40px;
  text-align: center;
  height: 80%;
  width: 100%;
  background-image: url("/images/header.jpg");

  .subHeading {
    padding-top: 20px;
    font-size: 1.3rem;
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .Heading {
    font-size: 1.6rem;
    color: #ffffff;
    margin-bottom: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .testimonial-wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
    height: 250px;
  }

  .testimonial-info {
    width: 100%;
    height: fit-content;
    border-radius: 3px;
    background-color: black;
    padding: 20px;
    box-shadow: 0 0px 7px -2px rgba(0, 0, 0, 0.55);
    color: #ffffff;
  }
  .testimonial-desc {
    p {
      text-align: center;
      max-width: 500px;
      margin: 0 auto;
      font-size: 1.1rem;
      line-height: 1.3em;
      color: rgba(255, 255, 255, 0.3);
      @media only screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
  .testimonial-name {
    margin-top: 2rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.4rem;
  }
  .testimonial-title {
    font-size: 1rem;
    margin-top: 0.3rem;
    color: rgba(255, 255, 255, 0.5);
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;

    svg {
      width: 30px;
      height: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      padding: 0.5rem 2rem;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }

  @media only screen and (max-width: 800px) {
    .testimonial-wrapper {
      height: 300px;
    }
  }
`;
