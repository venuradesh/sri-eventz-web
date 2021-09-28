import React from "react";
import styled from "styled-components";

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <Left>
          <div className="aboutMe">
            <div className="heading">About me</div>
            <div className="sub-heading">Why hire me for your next Project</div>
            <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quo autem beatae officia optio consequatur est, eaque, aut, aspernatur nisi eos? Labore, eum perspiciatis fugiat placeat assumenda recusandae, suscipit quasi consectetur autem accusantium ipsum, esse unde vel fugit quas. Assumenda impedit laboriosam, enim, voluptatem eveniet esse excepturi sequi laudantium perspiciatis mollitia illum modi! Quod odit nobis magni autem obcaecati sit amet, voluptas pariatur adipisci</div>
          </div>
          <div className="skills">
            <div className="skills-heading">Skills</div>
            <div className="skills-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis corporis incidunt non ullam necessitatibus dignissimos qui quis fuga quod ipsum optio, veritatis iste quae ab dolores consequuntur quam deserunt commodi soluta hic, animi est. Vel tenetur impedit, hic inventore, iste nisi, similique autem odio soluta sit error quod laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam culpa velit officiis recusandae assumenda, natus omnis nam dolorum est.</div>
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
        </Left>

        <Right>
          <div className="Progress">
            <ul>
              <li>
                <h5>PROJECTS COMPLETION</h5>
                <div class="outer-bar bar1">
                  <div className="inner-bar"></div>
                </div>
              </li>
              <li>
                <h5>RESPONSE RATE</h5>
                <div class="outer-bar bar2">
                  <div className="inner-bar"></div>
                </div>
              </li>
              <li>
                <h5>POSITIVE RATING</h5>
                <div class="outer-bar bar3">
                  <div className="inner-bar"></div>
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
      font-size: 1rem;
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
      font-size: 1rem;
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
      font-size: 1.3rem;
      color: #412542;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .loc,
    .lang {
      width: 400px;
    }
  }

  .btn-container {
    display: flex;

    .btn {
      background-color: #64495c;

      &:hover {
        background-color: #412542;
      }
    }

    .more-btn {
      width: 150px;
      padding: 15px 10px;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
      color: #ffffff;
      border-radius: 50px;
      margin-right: 20px;
    }

    .play-btn {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      img {
        transform: translateX(3px);
        width: 30px;
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
        height: 30px;
        width: 100%;
        background-color: #64495c;
        border-radius: 50px;
        overflow: hidden;

        .inner-bar {
          width: 80%;
          height: 100%;
          background-color: #412542;
          border-radius: 50px;
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
