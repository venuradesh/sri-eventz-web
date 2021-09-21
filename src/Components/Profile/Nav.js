import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const Nav = () => {
  const nav_menu = useRef();
  

  const insideHamberger = () => {
    nav_menu.current.classList.toggle("active");
   
  };

  return (
    <Container>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <Navigation ref={nav_menu}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#packages">Packages</Link>
          </li>
          <li>
            <Link to="#projects">Projects</Link>
          </li>
          <li >
            <Link to="#contacts">Contact</Link>
          </li>
        </ul>
      </Navigation>
     
      <HamMenu>
        <MenuIcon className="hamburger-menu" onClick={insideHamberger} />
      </HamMenu>
      <Profile>
      <img src="/images/pro.jpg"/>
      </Profile>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  padding: 0 20px;
  width: 100vw;
  height: 6.25rem; //100px
  display: flex;
  align-items: center;
  justify-content: space-between;
  position:absolute;
  top:0;
  
`;
const Logo = styled.div`
  width: 150px;
  height: 70px;
  background-image: url(/images/logo-white.png);
  background-size: cover;
  object-fit: cover;
  


`;
const Navigation = styled.div`


  ul {
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-right:70px;

    li {
      width: 8rem;
      display: flex;
      justify-content: center;

      a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 600;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -10px;
          background-color: #ffffff;
          transform: scaleX(0);
          transform-origin: center;
          transition: all 0.3s ease;
        }

        &:hover {
          &::before {
            transform: scaleX(1);
          }
        }
      }
    }
  }

  

  @media only screen and (max-width: 850px) {
    display: none;

    &.active {
      position: absolute;
      display: flex;
      right: 20px;
      top: 80px;
      background-color: #64495c;
      border-radius: 4px;
      height: 200px;
      width: 150px;
      overflow: hidden;
      z-index: 100;

      ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        li {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          transition: all 0.3s ease;

          &:hover {
            background-color: #412542;
          }
        }
      }
    }
  }
 `;
const Profile = styled.div`
display:flex;

background-size: cover;
object-fit: cover;
width:30px;

   img{
    background-image: url(/images/pro.jpg);
       border-radius:50%;
       width: 40px;
       height: 40px;
   }
   @media only screen and (max-width: 850px) {
    display: none;
  }

  `;


  const HamMenu = styled.div`
  width: 45px;
  height: 45px;
  background-color: #64495c;
  border-radius: 4px;
  border: 3px solid transparent;
  cursor: pointer;
  box-shadow: 0 0 7px -3px #ffffff;
  transition: all 0.3s ease;
  display: none;

  .hamburger-menu {
    color: #ffffff;
    font-size: 1.9rem;
    background-color: #64495c;
    border: 3px solid transparent;
    transition: all 0.3s ease;
    z-index: 100;
  }

  &:hover {
    box-shadow: 0 0 7px -1px #ffffff;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 850px) {
    display: flex;
    justify-content: center;
    align-items: center;
     
    
  }
`;
