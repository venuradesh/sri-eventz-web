import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Screen from "./Screen"
import Content from "./Content"


const ProfileContainer =()=>{
    return <Container>
        <Screen/>
    <Nav/>
    <Content/>
  
  
    </Container>
};

export default ProfileContainer;
const Container = styled.div`
position:relative;
min-height:100vh;
width:100wh
`;
