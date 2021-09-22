import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import gsap from "gsap";

function SearchBar() {
  const spanFade = useRef();
  const searchBar = useRef();

  useEffect(() => {
    gsap.fromTo(spanFade.current, { opacity: 0, y: "-100px" }, { opacity: 1, y: 0, duration: 1.2, delay: 1.7 });
    gsap.fromTo(searchBar.current, { opacity: 0, y: "100px" }, { opacity: 1, duration: 1, y: "0px", delay: 2.4 });
  }, []);

  return (
    <>
      <Container id="search">
        <span className="fade" ref={spanFade}>
          Find all the Services for your Event with us
        </span>
        <div className="search-bar-wrapper fade" ref={searchBar}>
          <input type="text" placeholder="Search Service..." />
          <SearchIcon className="search-icon" />
          <button className="search">Search</button>
          <button className="filter-search">Filter</button>
        </div>
      </Container>
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
  top: 35%;
  left: 50%;
  transform: translateX(-50%);

  &.active {
    z-index: -1;
  }

  span {
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
    width: 500px;
  }

  .search-bar-wrapper {
    margin-top: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    position: relative;

    input {
      background-color: #64495c;
      color: #ffffff;
      padding: 20px 20px;
      padding-right: 160px;
      border: none;
      border-radius: 100px;
      outline: none;
      font-size: 1rem;
      z-index: 1;

      &:focus {
        box-shadow: 0 0 10px 0px #412542;
      }

      &::placeholder {
        color: #917589;
        font-size: 1rem;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }

    .search-icon {
      position: absolute;
      color: #ffffff;
      font-size: 2.3rem;
      right: 120px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 1;
    }

    button {
      padding: 15px 30px;
      font-size: 0.9rem;
      background-color: #412542;
      border: none;
      border-radius: 100px;
      color: #ffffff;
      cursor: pointer;
      text-transform: uppercase;
      transition: all 0.3s ease;
      box-shadow: 0 0px 7px 0px rgba(0, 0, 0, 0.75);

      &:hover {
        background-color: rgb(78, 54, 79);
      }
    }

    .filter-search {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }

    .search {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 80px;
      width: 250px;
      letter-spacing: 1.2px;
    }
  }

  @media only screen and (min-width: 940px) {
    span {
      width: 500px;
    }

    .search-bar-wrapper {
      width: 500px;
    }
  }

  @media only screen and (max-width: 500px) {
    .search-bar-wrapper {
      width: 300px;

      .search-icon {
        font-size: 2rem;
        right: 20px;
      }

      input {
        padding-right: 55px;

        &::placeholder {
          text-align: center;
        }
      }

      .search,
      .filter-search {
        position: absolute;
        top: 100px;
        width: 130px;
      }

      .search {
        position: absolute;
        top: 76px;
        left: 70px;
      }

      .filter-search {
        top: 100px;
      }
    }

    span {
      font-size: 1rem;
      width: 300px;
    }
  }
`;
