import React from "react";
import styled from "styled-components";

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945"></iframe>
        </div>
      </div>
    </MapStyles>
  );
}

const MapStyles = styled.div`
    
    width:100% ;
    height:400px;
    frameborder:0;
    style:border:0 ;


.container{
    height:400px;
    iframe{
        // object-fit:cover;

    }
}
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
      container{
        margin-top: -120px;
      }
 
  }
  
`;
