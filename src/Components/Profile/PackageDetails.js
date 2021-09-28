import React from "react";
import styled from "styled-components";

const PackageDetails = (props) => {
  return (
    <Container className="card">
      <img src={props.cover} />
      <div className="down-content">
        <h3>{props.name}</h3>
        <p>{props.subTitle}</p>
        <div className="btn-container">
          <div className="pay btn">Rs.{props.price}</div>
          <div className="more">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PackageDetails;

const Container = styled.div`
  &.card {
    width: 300px;
    height: 350px;
    background-color: #ffffff;
    margin-right: 20px;
    margin-top: 20px;
    box-shadow: 0 0px 7px -3px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    transition: all 0.3s ease;

    img {
      width: 300px;
      object-fit: cover;
      height: 200px;
    }

    .down-content {
      padding-left: 20px;
      margin-top: 10px;
      color: #412542;

      p {
        padding-bottom: 10px;
      }
      .btn-container {
        display: flex;

        .btn {
          color: #ffffff;
          background-color: #64495c;
          text-align: center;
          font-size: 1.1rem;
          font-weight: 400;
          text-transform: uppercase;
          cursor: pointer;
          height: 38px;
          padding: 7px;

          &:hover {
            background-color: #412542;
            transform: scale(1.02);
          }
        }

        .pay {
          width: 120px;
          border-radius: 100px;
          transition: all 0.3s ease;
          margin-right: 20px;
        }

        .more {
          width: 60px;
          transform: translateX(120%) translateY(68%);

          ul {
            display: flex;
            list-style: none;

            li {
              width: 9px;
              height: 9px;
              background-color: gray;
              border-radius: 50%;
              margin-right: 8px;
            }
          }
        }
      }
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  }
`;
