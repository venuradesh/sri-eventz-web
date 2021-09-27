import React from "react";
import styled from "styled-components";

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="left">
          <div className="aboutMe">
            <div className="subHeading">About me</div>
            <div className="Heading">Why hire me for your next Project</div>
            <div className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quo autem beatae officia optio consequatur est, eaque, aut,
              aspernatur nisi eos? Labore, eum perspiciatis fugiat placeat
              assumenda recusandae, suscipit quasi consectetur autem accusantium
              ipsum, esse unde vel fugit quas. Assumenda impedit laboriosam,
              enim, voluptatem eveniet esse excepturi sequi laudantium
              perspiciatis mollitia illum modi! Quod odit nobis magni autem
              obcaecati sit amet, voluptas pariatur adipisci
            </div>
          </div>
          <div className="skills">
            <div className="skills-heading">Skills</div>
            <div className="skills-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              aliquam culpa velit officiis recusandae assumenda, natus omnis nam
              dolorum est.
            </div>
          </div>
          <div className="bio">
            <div className="name-location">
              <div className="name">Name: John Hardin</div>
              <div className="loc">Location: Colombo</div>
            </div>
            <div className="level-lang">
              <div className="level">Level: Diamond</div>
              <div className="lang">Languages: Sinhala / English</div>
            </div>
          </div>
          <div className="btn-container">
            <div className="more-btn btn">More</div>
            <div className="play-btn btn">
              <img src="/images/play.png"></img>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="Progress">
            <ul>
              <li>
                <h5>PROJECTS COMPLETION</h5>

                <span class="bar bar1"></span>
              </li>
              <li>
                <h5>RESPONSE RATE</h5>

                <span class="bar bar2"></span>
              </li>
              <li>
                <h5>POSITIVE RATING</h5>

                <span class="bar bar3"></span>
              </li>
            </ul>
          </div>
          <div className="lineChart"></div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}

const AboutSectionStyles = styled.div`
  .container {
    width: 100%;
    display: flex;
    padding: 40px;
    max-width: 100vw;
    height: 100vh;
    column-gap: 20px;

    .left {
      height: 100%;
      flex: 2;
      padding-right: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 0px 7px -3px rgba(0, 0, 0, 0.75);
      padding: 20px;

      .aboutMe {
        .subHeading {
          font-size: 1.3rem;
          color: #412542;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .Heading {
          font-size: 1.6rem;
          color: #412542;
          margin-bottom: 20px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .para {
          font-size: 1rem;
          font-weight: 400;
          color: #64495c;
          text-align: justify;
        }
      }

      .skills {
        .skills-heading {
          font-size: 1.6rem;
          color: #412542;
          margin-bottom: 20px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .skills-des {
          font-size: 1rem;
          color: #64495c;
          font-weight: 400;
          text-align: justify;
          width: 80%;
        }
      }

      .bio {
        height: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .name-location {
          display: flex;

          .name,
          .loc {
            flex: 1;
            font-size: 1rem;
            font-weight: 600;
            color: #64495c;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
        }

        .level-lang {
          display: flex;

          .level,
          .lang {
            flex: 1.2;
            font-size: 1rem;
            font-weight: 600;
            color: #64495c;
            text-transform: uppercase;
          }
        }
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
          padding: 10px 10px;

          &:hover {
            background-color: #412542;
            transform: scale(1.02);
          }
        }

        .more-btn {
          width: 150px;
          border-radius: 100px;
          transition: all 0.3s ease;
          margin-right: 20px;
        }

        .play-btn {
          width: 45px;
          height: 45px;
          background-color: #64495c;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;

          img {
            width: 16px;
          }
        }
      }
    }

    .right {
      flex: 1;
      padding: 20px;
      box-shadow: 0 0px 7px -3px rgba(0, 0, 0, 0.75);

      font-size: 1 rem;
      list-decoration: none;
      font-weight: 400;

      justify-content: space bitween;

      overflow: hidden;

      .Progress {
        height: 50%;
        width: 100%;
        justify-content: space bitween;
        padding-bottom: 20px;
        position:relative;

        @keyframes load {
          from {
            width: 0%;
          }
        }

        @-webkit-keyframes load {
          from {
            width: 0%;
          }
        }
        @-moz-keyframes load {
          from {
            width: 0%;
          }
        }

        @-o-keyframes load {
          from {
            width: 0%;
          }
        }

      ul{
        li{
          margin-bottom: 40px;
          list-style: none;
          text-transform: uppercase;
          
            h5 {
              padding-bottom: 10px;
            }
          
        
            .bar {
              // width: 100%;
              // height: 15px;
              // border-radius: 1000px;
              // background-color: #64495c;
              // position:absolute;
              
             

              &::before {
                content: "";
                width: 100%;
                height: 15px;
                border-radius: 1000px;
                background-color: #64495c;
                position:absolute;
                 animation: load 3s 0s;
                -webkit-animation: load 3s 0s;
                -moz-animation: load 3s 0s;
                -o-animation:load 3s 0s;

              
              }
             
            }
            
                
            }
          }
        }
      }
    }
    .lineChart {
      height: 50%;
      background-color: black;
      background-size: cover;
      object-fit: cover;
      background-position: center;
      background-image: url(/images/google-calendar.png);
      align-items: center;
    }
  }

  @media only screen and (max-width: 950px) {
    .left {
      flex: 4;
    }
    .right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
      font-size: 0.5 rem;
    }
    .left {
      width: 100%;

      .bio {
        flex: 1;
        font-size: 1rem;
        font-weight: 600;
      }
    }
    .right {
      margin-top: 2rem;
      width: 100%;

      .Porgress {
        margin-bottom: 2rem;
        align-items:center;

        .ul {
          padding-bottom: 10px;
          align-items:center;

         
        }
      }
      .lineChart{
        align-items:center;
      }
    }

    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .btn-container {
      // flex-direction: column;
      gap: 0rem;

      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 530px) {
    .name,
    .loc {
      flex: 1;
      font-size: 1px;
    }
  }

  @media only screen and (max-width: 480px) {
    .left {
      .bio {
        font-size: 1 rem;
      }
      
    }
  }
`;
