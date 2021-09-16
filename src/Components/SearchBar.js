import React from "react";
import styled from "styled-components";

function SearchBar() {
  return (
    <>
      <Container>
        <span>Find all the Services for your Event with us</span>
        <div className="search-bar-wrapper">
          <input type="text" placeholder="Search Service..." />
          <button>Filter Search</button>
        </div>
      </Container>
      <div className="description">
        <h3>Sri EventZ</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, expedita adipisci. Omnis debitis, deleniti voluptate asperiores vero labore, beatae molestias quos quam quidem a suscipit accusamus sint? Blanditiis, culpa sed!</p>
      </div>
    </>
  );
}

export default SearchBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);

  span {
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
  }

  .search-bar-wrapper {
    margin-top: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    position: relative;

    input {
      width: 100%;
      background-color: #64495c;
      color: #ffffff;
      padding: 20px 20px;
      padding-right: 140px;
      border: none;
      border-radius: 4px;
      outline: none;
      font-size: 1rem;

      &:focus {
        box-shadow: 0 0 10px 0px #412542;
      }

      &::placeholder {
        color: rgb(226, 220, 224);
        font-size: 1rem;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }

    button {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      padding: 10px 10px;
      background-color: #412542;
      border: none;
      border-radius: 4px;
      color: #ffffff;
      font-size: 1rem;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 940px) {
  }
`;
