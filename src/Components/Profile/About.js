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
            <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quo autem beatae officia optio consequatur est, eaque, aut, aspernatur nisi eos? Labore, eum perspiciatis fugiat placeat assumenda recusandae, suscipit quasi consectetur autem accusantium ipsum, esse unde vel fugit quas. Assumenda impedit laboriosam, enim, voluptatem eveniet esse excepturi sequi laudantium perspiciatis mollitia illum modi! Quod odit nobis magni autem obcaecati sit amet, voluptas pariatur adipisci</div>
          </div>
          <div className="skills">
            <div className="skills-heading">Skills</div>
            <div className="skills-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam culpa velit officiis recusandae assumenda, natus omnis nam dolorum est.</div>
          </div>
          <div className="bio">
            <div className="name-location">
              <div className="name">Name: John Hardin</div>
              <div className="loc">Location: Colombo</div>
            </div>
            <div className="level-lang">
              <div className="level">Level: Diamond</div>
              <div className="lang">Languages: Sinhala English</div>
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
          <div className="chart">
            <div>
              <p>Progress</p>
            </div>
            <div className="Progress"></div>
            <img className="lineChart" src="/images/pro.jpg" />
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}

const AboutSectionStyles = styled.div`
  .container {
    width: 100%;
    display: flex;
    padding: 60px 40px;
    max-width: 100vw;
    height: 100vh;

    .left {
      height: 100%;
      flex: 1;
      padding-right: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

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
          width: 90%;
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
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .name-location {
          display: flex;

          .name,
          .loc {
            flex: 1;
            font-size: 1.1rem;
            font-weight: 600;
            color: #64495c;
            text-transform: uppercase;
          }
        }

        .level-lang {
          display: flex;

          .level,
          .lang {
            flex: 1.2;
            font-size: 1.1rem;
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
          font-weight: 600;
          text-transform: uppercase;
          cursor: pointer;
          padding: 10px 10px;

          &:hover {
            background-color: #412542;
            transform: scale(1.02);
          }
        }

        .more-btn {
          width: 200px;
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
            width: 20px;
          }
        }
      }
    }

    .right {
      flex: 1;
      padding-left: 20px;
    }
  }
`;

// const AboutSectionStyles = styled.div`

//   .container {
//     display: flex;
//     // position:relative;

//    justify-content:space-between;
//     height:100vh;
//     width:100vw;

//    .left{
//     padding:40px;
//     width:900px;

//   .aboutSection-left{
//     align-items: center;
//     background-color:white;
//     padding:20px;
//      height:100vh;
//      box-shadow: 0 0 7px -2px gray;
//      border-radius:3px;

//      .aboutMe{

//       padding:0 0 20px;

//       .heading {
//         text-align: left;

//       }
//       .para {
//         padding:10px 0 ;
//         margin-left: 0;
//        font-size: 1rem;
//       line-height: 1.3em;

//       }

//   }
//   .skill{
//     padding:0 0 20px;
//   }

//   .bio{

//     padding:15px 0;
//      tr{

//       padding:20px;

//       td{
//         width:40rem;
//         padding:10px;
//       }
//      }

// }

// .aboutSection-buttons{
//   display:flex;

//   align-items:center;
//   height:46px;
//   column-gap:30px;

//       .more{
//         text-align:center;
//         width:170px;
//         background-color:#64495c;
//         height:100%;
//         align-items:center;
//         justify-content:center;
//         display:flex;
//         border-radius:100px;
//         color:white;
//         font-weight:500px;
//         font-size:1.1rem;

//       }

//       .video{

//         width:46px;
//         background-color:#64495c;
//         height:100%;
//         align-items:center;
//         justify-content:center;
//         display:flex;
//         border-radius:50%;
//         color:white;
//         font-weight:500px;
//         font-size:1.1rem;

//         .play{
//           position:absolute;
//           background-image:url(/images/play.png);
//           width: 16px;
//           height: 16px;
//           margin-left:3px;
//           margin-top:1px;
//           background-size: contain;

//            backgroun-color:blue;

//         }
//       }

//     }

//     .right{

//     //  flex:1
//       // padding:40px;
//       background-color:black;
//        width:600px;

// .aboutSection-right{

//   align-items: center;
//   background-color:black;
//   padding:20px;
//    height:80vh;
//    box-shadow: 0 0 7px -2px gray;
//    border-radius:3px;
//    width:56%;
//    float:left;

//   .chart{
//     background-color:blue;
//     padding:0 0 20px;
// }

// }
// }
// }

//   @media only screen and (max-width: 768px) {
//     font-size: 0.5 rem;
//   }

//   @media only screen and (max-width: 950px) {
//     .aboutSection-left {
//       flex: 4;
//     }
//     .aboutSection-right {
//       flex: 3;
//     }
//   }
//   @media only screen and (max-width: 768px) {
//     .container {
//       flex-direction: column;
//       text-align: center;
//     }
//     .aboutSection-left,
//     .aboutSection-right {
//       width: 100%;
//     }
//     .aboutSection-right {
//       margin-top: 3rem;
//     }
//     .section-title {
//       text-align: center;
//     }
//     .para {
//       margin: 0 auto;
//       margin-top: 2rem;
//     }
//     .aboutSection-buttons {
//       flex-direction: column;
//       gap: 0rem;
//       .button-wrapper,
//       a {
//         width: 100%;
//         text-align: center;
//       }
//     }
//   }
// `;
