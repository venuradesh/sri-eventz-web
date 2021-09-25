import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setLevel, unsetLevel, setStarRating } from "../features/FilterSlice/FilterSlice";
import gsap from "gsap";

const FilterBox = () => {
  const starRating = useSelector((state) => state.filter.starRating);
  const dispatch = useDispatch();
  const [hover, setHover] = useState(null);
  const filterWindow = useRef();

  return (
    <Container ref={filterWindow} id="filter-window">
      <div className="filter-by-level">
        <span>Filter By Level</span>
        <div className="btn-container">
          <div className="diamond btn" onClick={() => dispatch(setLevel({ level: "diamond" }))}>
            Diamond
          </div>
          <div className="sapphire btn" onClick={() => dispatch(setLevel({ level: "sapphire" }))}>
            Sapphire
          </div>
          <div className="ruby btn" onClick={() => dispatch(setLevel({ level: "ruby" }))}>
            Ruby
          </div>
          <div className="emerald btn" onClick={() => dispatch(setLevel({ level: "emerald" }))}>
            Emerald
          </div>
          <div className="all btn" onClick={() => dispatch(unsetLevel())}>
            all
          </div>
        </div>
      </div>
      <div className="filter-by-rating">
        <span>Filter By Rating</span>
        <div className="stars">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  onClick={() => {
                    dispatch(setStarRating({ star: ratingValue }));
                  }}
                />
                <FaStar className="fa-stars" color={ratingValue <= (hover || starRating) ? "rgba(255,255,255,0.5)" : "#412542"} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
              </label>
            );
          })}
        </div>
      </div>
      <div className="filter-by-location">
        <span>Filter by Location</span>
        <div className="location">
          <div className="btn">Within 5km</div>
          <div className="btn">Within 25km</div>
          <div className="btn">Within 50km</div>
          <div className="btn">Within 100km</div>
          <div className="btn">Within 200km</div>
          <div className="btn">Anywhere</div>
        </div>
      </div>
      <div className="apply btn">Apply Changes</div>
    </Container>
  );
};

export default FilterBox;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 65%;
  transform: translateX(-50%);
  display: none;
  width: 500px;
  height: 400px;
  background-color: #64495c;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.75);

  &.active {
    z-index: 100;
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    span {
      font-size: 0.7rem;
      text-align: left;
      color: #ffffff;
      text-transform: uppercase;
      font-weight: 500;
    }

    .filter-by-level {
      display: flex;
      flex-direction: column;
      row-gap: 10px;

      .btn-container {
        display: flex;
        column-gap: 10px;

        .btn {
          width: 100px;
          padding: 10px 10px;
          border-radius: 8px;
          background-color: #412542;
          color: #ffffff;
          font-weight: 500;
          text-transform: uppercase;
          font-size: 0.7rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: #4e364f;
          }
        }
      }
    }

    .filter-by-rating {
      margin-top: 10px;
      row-gap: 10px;

      .stars {
        margin-top: 10px;

        input[type="radio"] {
          display: none;
        }

        .fa-stars {
          transition: all 0.3s ease;
          margin-right: 10px;
          cursor: pointer;
          font-size: 1.5rem;
        }
      }
    }

    .filter-by-location {
      row-gap: 10px;

      .location {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        row-gap: 10px;
        column-gap: 5px;

        .btn {
          width: 150px;
          padding: 10px 10px;
          border-radius: 8px;
          background-color: #412542;
          color: #ffffff;
          font-weight: 500;
          text-transform: uppercase;
          font-size: 0.7rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;

          &:hover {
            background-color: #4e364f;
          }
        }
      }
    }

    .apply {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      width: 200px;
      background-color: #412542;
      padding: 15px 10px;
      border-radius: 50px;
      color: #ffffff;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1.2px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #4e364f;
        box-shadow: 0 0 3px 0 rgba(255, 255, 255, 0.2);
        transform: scale(1.02);
      }
    }
  }

  @media only screen and (max-width: 940px) {
    width: 450px;
    height: 450px;
  }

  @media only screen and (max-width: 500px) {
    width: 300px;
    top: 68%;
    height: 500px;

    &.active {
      align-items: center;

      span {
        font-size: 0.6rem;
        text-align: center;
      }

      .filter-by-level {
        .btn-container {
          flex-wrap: wrap;
          justify-content: center;
          row-gap: 10px;

          .btn {
            min-width: 60px;
            font-size: 0.6rem;
          }
        }
      }

      .filter-by-rating {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .stars {
          margin-top: 0;

          .fa-stars {
            font-size: 1rem;
          }
        }
      }

      .filter-by-location {
        display: flex;
        flex-direction: column;
        align-items: center;

        .location {
          justify-content: center;

          .btn {
            width: 100px;
            font-size: 0.6rem;
          }
        }
      }
    }
  }
`;
