import React from "react";
import styled from "styled-components";

export default function Packages() {
  return (
    <Container>
      <div className="section-heading">Choose Your Package</div>
      <div className="horizental">
        <div className="card-container">
          <div className="card">
            <img src="./images/package-1.jpg" />
            <div className="down-content">
              <h3>Design and create bridal wear</h3>
              <p>Biggest luxury wedding wear collections for Brides</p>
              <div className="btn-container">
                <div className="pay btn">$300</div>
                <div className="more">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="./images/package-2.jpg" />
            <div className="down-content">
              <h3>Design and create bridal wear</h3>
              <p>Biggest luxury wedding wear collections for Brides</p>
              <div className="btn-container">
                <div className="pay btn">$300</div>
                <div className="more">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="./images/package-3.jpg" />
            <div className="down-content">
              <h3>Design and create bridal wear</h3>
              <p>Biggest luxury wedding wear collections for Brides</p>
              <div className="btn-container">
                <div className="pay btn">$300</div>
                <div className="more">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="./images/package-1.jpg" />
            <div className="down-content">
              <h3>Design and create bridal wear</h3>
              <p>Biggest luxury wedding wear collections for Brides</p>
              <div className="btn-container">
                <div className="pay btn">$300</div>
                <div className="more">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="./images/package-2.jpg" />
            <div className="down-content">
              <h3>Design and create bridal wear</h3>
              <p>Biggest luxury wedding wear collections for Brides</p>
              <div className="btn-container">
                <div className="pay btn">$300</div>
                <div className="more">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="./images/package-3.jpg" />
            <div className="down-content">
              <h3>Design and create bridal wear</h3>
              <p>Biggest luxury wedding wear collections for Brides</p>
              <div className="btn-container">
                <div className="pay btn">$300</div>
                <div className="more">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  flex-direction: column;
  padding: 20px;

  .section-heading {
    margin-left: 20px;
    font-size: 1.3rem;
    color: #412542;
    font-weight: 600;
  }

  .horizental {
    display: block;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .card-container {
      display: flex;
      width: 100%;
      padding: 20px;

      .card {
        width: 300px;
        height: 350px;
        background-color: #ffffff;
        margin-right: 20px;
        margin-top: 20px;
        box-shadow: 0 0px 7px -3px rgba(0, 0, 0, 0.75);
        cursor: pointer;

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
    }
  }
`;
