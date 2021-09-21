import React from "react";
import styled from "styled-components";

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="left">
          <div className="aboutSection-left">
            <div className="aboutMe">
              <div className="subHeading">
                <p>About me</p>
              </div>
              <div className="Heading">
                <h2>Why hire me for your next Project</h2>
              </div>

              <div className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quo autem beatae officia optio consequatur est, eaque,
                aut, aspernatur nisi eos? Labore, eum perspiciatis fugiat
                placeat assumenda recusandae, suscipit quasi consectetur autem
                accusantium ipsum, esse unde vel fugit quas. Assumenda impedit
                laboriosam, enim, voluptatem eveniet esse excepturi sequi
                laudantium perspiciatis mollitia illum modi! Quod odit nobis
                magni autem obcaecati sit amet, voluptas pariatur adipisci
              </div>
            </div>
            <div className="skill">
              <div>
                {" "}
                <h2>Skills</h2>
              </div>
              <div classname="skillDis">
                {" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  aliquam culpa velit officiis recusandae assumenda, natus omnis
                  nam dolorum est.
                </p>
              </div>
            </div>

            <div className="bio">
              <table>
                <tr>
                  <td>Name: John Hardin</td>
                  <td>Location: Colombo</td>
                </tr>

                <tr>
                  <td>Level: Diamond</td>
                  <td>Languages: Sinhala English</td>
                </tr>
              </table>
            </div>
            <div className="aboutSection-buttons">
              <div className="more">More</div>
              <div className="video">
                <div className="play" src="play.png"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="aboutSection-right">
            <div className="chart">
              <div>
                <p>Progress</p>
              </div>
              <div className="Progress"></div>
              <div className="lineChart" src="./images/pro.jpg"></div>
            </div>
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}

const AboutSectionStyles = styled.div`

  .container {
    display: flex;
    // position:relative;
  
   justify-content:space-between;
    height:100vh;
    width:100vw;
    
   .left{
    padding:40px;
    
    // background-color:blue;
    width:900px;
    
    

  .aboutSection-left{
    align-items: center;
    background-color:white;
    padding:20px;
     height:100vh;
     box-shadow: 0 0 7px -2px gray;
     border-radius:3px;
    
   

     .aboutMe{
  
      padding:0 0 20px;
    
      .heading {
        text-align: left;
       
      }
      .para {
        padding:10px 0 ;
        margin-left: 0;
       font-size: 1rem;
      line-height: 1.3em;
    
      
      }
     

  }
  .skill{
    padding:0 0 20px;
  }

  .bio{

    padding:15px 0;
     tr{
      
      padding:20px;

      td{
        width:40rem;
        padding:10px;
      }
     }  
   
  
}

.aboutSection-buttons{
  display:flex;
        
  align-items:center;
  height:46px;
  column-gap:30px;
 
      .more{
        text-align:center;
        width:170px;
        background-color:#64495c;
        height:100%;
        align-items:center;
        justify-content:center;
        display:flex;
        border-radius:100px;
        color:white;
        font-weight:500px;
        font-size:1.1rem;
 
       
      }

      .video{
       
        width:46px;
        background-color:#64495c;
        height:100%;
        align-items:center;
        justify-content:center;
        display:flex;
        border-radius:50%;
        color:white;
        font-weight:500px;
        font-size:1.1rem;

        .play{
          position:absolute;
          background-image:url(/images/play.png);
          width: 16px;
          height: 16px;
          margin-left:3px;
          margin-top:1px;
          background-size: contain;
          
           backgroun-color:blue;
    
        }
      }
      
    }

    .right{

    //  flex:1
      // padding:40px;
      background-color:black;
       width:600px;

.aboutSection-right{
  
  align-items: center;
  background-color:black;
  padding:20px;
   height:80vh;
   box-shadow: 0 0 7px -2px gray;
   border-radius:3px;
   width:56%;
   float:left;
 
  
  .chart{
    background-color:blue;
    padding:0 0 20px;
}

}
}
}



  @media only screen and (max-width: 768px) {
    font-size: 0.5 rem;
  }
 
  
 
  @media only screen and (max-width: 950px) {
    .aboutSection-left {
      flex: 4;
    }
    .aboutSection-right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection-left,
    .aboutSection-right {
      width: 100%;
    }
    .aboutSection-right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection-buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
