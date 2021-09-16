import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const nav_menu = useRef();
  const btn_con = useRef();

  const insideHamberger = () => {
    nav_menu.current.classList.toggle("active");
    btn_con.current.classList.toggle("active");
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
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>
        </ul>
      </Navigation>
      <HamMenu>
        <MenuIcon className="hamburger-menu" onClick={insideHamberger} />
      </HamMenu>
      <BtnContainer ref={btn_con}>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
      </BtnContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 0 20px;
  width: 100vw;
  height: 6.25rem; //100px
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const Logo = styled.div`
  width: 150px;
  height: 70px;
  background-image: url(/images/logo-white.png);
  background-size: cover;
  object-fit: cover;
`;
const Navigation = styled.div`
  height: 55px;
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-between;

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

  @media only screen and (max-width: 800px) {
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

const BtnContainer = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    padding: 1rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
    box-shadow: 0 0 7px -3px #ffffff;
  }

  a:first-of-type {
    border: 3px solid #64495c;
    border-radius: 12px;
    background-color: tranparent;
    color: #ffffff;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 7px -1px #ffffff;
      transform: scale(1.02);
    }
  }

  a:last-of-type {
    color: #ffffff;
    background-color: #64495c;
    border: 3px solid transparent;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 7px -1px #ffffff;
      transform: scale(1.02);
    }
  }

  @media only screen and (max-width: 800px) {
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
  }

  &:hover {
    box-shadow: 0 0 7px -1px #ffffff;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
