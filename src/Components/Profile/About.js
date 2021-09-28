import React from "react";
import styled from "styled-components";

export default function AboutSection(props) {
  return (
    <AboutSectionStyles>
      <div className="container">
        <Left>
          <div className="aboutMe">
            <div className="heading">About me</div>
            <div className="sub-heading">Why hire me for your next Project</div>
            <div className="para">{props.user.aboutMe}</div>
          </div>
          <div className="skills">
            <div className="skills-heading">Skills</div>
            <div className="skills-des">{props.user.skills}</div>
          </div>
          <div className="bio">
            <div className="name-location">
              <div className="name">Name: {props.user.name}</div>
              <div className="loc">Location: {props.user.location}</div>
            </div>
            <div className="level-lang">
              <div className="level">Level: {props.user.level.name}</div>
              <div className="lang">Languages: {props.user.languages}</div>
            </div>
          </div>
          <div className="btn-container">
            <div className="more-btn btn">More</div>
            <div className="play-btn btn">
              <img src="/images/play.png"></img>
            </div>
          </div>
        </Left>

        <Right projectCompletion={props.user.progress.projectCompletion} responseRate={props.user.progress.responseRate} positiveRating={props.user.progress.positiveRating}>
          <div className="Progress">
            <ul>
              <li>
                <h5>PROJECTS COMPLETION: {props.user.progress.projectCompletion}</h5>
                <div class="outer-bar bar1">
                  <div className="inner-bar pr-completion"></div>
                </div>
              </li>
              <li>
                <h5>RESPONSE RATE: {props.user.progress.responseRate}</h5>
                <div class="outer-bar bar2">
                  <div className="inner-bar response"></div>
                </div>
              </li>
              <li>
                <h5>POSITIVE RATING: {props.user.progress.positiveRating}</h5>
                <div class="outer-bar bar3">
                  <div className="inner-bar rating"></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="lineChart"></div>
        </Right>
      </div>
    </AboutSectionStyles>
  );
}

const AboutSectionStyles = styled.div`
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 1250px) {
    .container {
      flex-direction: column;
      row-gap: 30px;
    }
  }
`;

const Left = styled.div`
  flex: 1.5;
  padding: 80px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  .aboutMe {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    .heading {
      font-size: 2.5rem;
      text-transform: uppercase;
      font-weight: 600;
      color: #412542;
    }

    .sub-heading {
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 700;
      color: #412542;
    }

    .para {
      font-size: 0.9rem;
      font-weight: 500;
      color: #64495c;
      text-align: justify;
    }
  }

  .skills {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    .skills-heading {
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 700;
      color: #412542;
    }

    .skills-des {
      font-size: 0.9rem;
      font-weight: 500;
      color: #64495c;
      text-align: justify;
    }
  }

  .bio {
    .name-location,
    .level-lang {
      display: flex;
      justify-content: space-between;
      font-size: 1 rem;
      color: #412542;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .loc,
    .lang {
      width: 350px;
    }
  }

  .btn-container {
    display: flex;

    .btn {
      background-color: #64495c;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        background-color: #412542;
      }
    }

    .more-btn {
      width: 130px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
      color: #ffffff;
      border-radius: 50px;
      margin-right: 20px;
    }

    .play-btn {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      img {
        transform: translateX(3px);
        width: 25px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .bio {
      .name-location,
      .level-lang {
        flex-direction: column;
        margin-bottom: 20px;
      }

      .loc,
      .lang {
        width: max-content;
      }

      .name,
      .level {
        margin-bottom: 20px;
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    width: 80%;
  }

  @media only screen and (max-width: 580px) {
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    padding: 60px;

    .aboutMe {
      .heading {
        font-size: 1.7rem;
        font-weight: 700;
      }

      .sub-heading {
        font-size: 1.3rem;
      }

      .para {
        font-size: 0.9rem;
      }
    }

    .skills {
      .skills-heading {
        font-size: 1.3rem;
      }

      .skills-des {
        font-size: 0.9rem;
      }
    }

    .bio {
      .name-location,
      .level-lang {
        font-size: 1rem;
        row-gap: 0px;
        margin-bottom: 5px;
      }

      .name,
      .level {
        margin-bottom: 5px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    padding: 30px;
    width: 100%;

    .btn-container {
      .more-btn {
        width: 100px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        font-size: 1rem;
      }

      .play-btn {
        width: 50px;
        height: 50px;

        img {
          width: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 330px) {
    padding: 20px;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 80px;

  ul {
    list-style: none;

    li {
      h5 {
        margin-bottom: 20px;
        font-size: 1.1rem;
        font-weight: 500;
        color: #412542;
      }

      .outer-bar {
        margin-bottom: 20px;
        height: 20px;
        width: 100%;
        background-color: #64495c;
        border-radius: 50px;
        overflow: hidden;

        .inner-bar {
          height: 100%;
          background-color: #412542;
          border-radius: 50px;

          &.pr-completion {
            width: ${(props) => props.projectCompletion};
          }

          &.response {
            width: ${(props) => props.responseRate};
          }

          &.rating {
            width: ${(props) => props.positiveRating};
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    width: 80%;
  }

  @media only screen and (max-width: 580px) {
    padding: 60px;
  }

  @media only screen and (max-width: 480px) {
    padding: 30px;
    width: 80%;
  }

  @media only screen and (max-width: 370px) {
    padding: 20px;
    width: 90%;
  }
`;
