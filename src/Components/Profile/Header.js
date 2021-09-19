import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const navmenu = useRef();
  const profile = useRef();

  const onHamMenuClick = (e) => {
    navmenu.current.classList.toggle("active");
    const html = `<a href="/login">Signout</a>`;
    profile.current.innerHTML = html;
  };

  return (
    <Container>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <Navigation ref={navmenu}>
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
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li ref={profile}>
            <img src="/images/profile-photo-1.jpg" />
          </li>
        </ul>
      </Navigation>
      <HamburgerMenu onClick={onHamMenuClick}>
        <MenuIcon className="menu-icon" />
      </HamburgerMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  display: flex;
  height: 6.25rem;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
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
    display: flex;
    column-gap: 40px;
    list-style: none;

    li {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          box-shadow: 0 0 7px -1px #ffffff;
        }
      }

      a {
        color: #ffffff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -10px;
          transform: scale(0);
          background-color: #ffffff;
          transition: all 0.3s ease;
        }

        &:hover {
          &::before {
            transform: scale(1);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 700px) {
    display: none;

    &.active {
      display: flex;

      ul {
        display: flex;
        width: 200px;
        background-color: #64495c;
        flex-direction: column;
        overflow: hidden;
        z-index: 10;

        position: absolute;
        right: 20px;
        top: 80px;
        border-radius: 12px;

        li {
          width: 100%;
          padding: 20px 20px;
          cursor: pointer;
          display: flex;
          justify-content: center;

          &:hover {
            background-color: #412542;
          }
        }
      }
    }
  }
`;

const HamburgerMenu = styled.div`
  width: 45px;
  height: 45px;
  display: none;
  background-color: #64495c;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 0 7px -1px #ffffff;
  }

  .menu-icon {
    color: white;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
