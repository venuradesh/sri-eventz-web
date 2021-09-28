import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { setUser, unsetUser } from "../../features/UserSlice.js/userSlice";

const Nav = () => {
  const nav_menu = useRef();
  const btn_con = useRef();
  const ul = useRef();
  const profileUl = useRef();
  const profileContainer = useRef();
  const user = useSelector((state) => state);
  const [loginInserted, setLoginInserted] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((res) => {
      if (res) {
        dispatch(
          setUser({
            name: res.displayName,
            email: res.email,
            profilePhoto: res.photoURL,
          })
        );
        setUserName(res.displayName);
        setUserPhoto(res.photoURL);
      }
    });
  }, []);

  const insideHamberger = () => {
    nav_menu.current.classList.toggle("active");
    if (!userName) {
      btn_con.current.classList.toggle("active");
    }
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    const a = document.createElement("a");
    const a2 = document.createElement("a");
    li.setAttribute("id", "login-section");
    li2.setAttribute("id", "signup-section");

    if (!userName) {
      btn_con.current.classList.toggle("active");
    }
    if (nav_menu.current.classList.contains("active")) {
      if (!loginInserted && !userName) {
        setLoginInserted(true);
        a.textContent = "Login";
        a.href = "/login";
        a2.textContent = "SignUp";
        a2.href = "/register";
      } else if (loginInserted && userName) {
        setLoginInserted(true);
        li2.addEventListener("click", SignOut);
        a.textContent = "Settings";
        a.href = "/settings";
        a2.textContent = "Logout";
        a2.href = "/";
      } else if (!loginInserted && userName) {
        setLoginInserted(true);
        li2.addEventListener("click", SignOut);
        a.textContent = "Settings";
        a.href = "/settings";
        a2.textContent = "Logout";
        a2.href = "/";
      }
      li.appendChild(a);
      li2.appendChild(a2);
      ul.current.appendChild(li);
      ul.current.appendChild(li2);
    } else {
      if (loginInserted) {
        setLoginInserted(false);
        document.getElementById("login-section").remove();
        document.getElementById("signup-section").remove();
      }
    }
  };

  const SignOut = () => {
    console.log("within");
    console.log(userName);
    auth.signOut().then(() => {
      dispatch(unsetUser());
      setLoginInserted(false);
      window.location.reload();
    });
  };

  const onProfileImageClick = () => {
    profileUl.current.classList.toggle("active");
    profileContainer.current.classList.toggle("active");
  };

  return (
    <Container>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <Navigation ref={nav_menu}>
        <ul ref={ul}>
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
            <Link to="#contacts">Contact</Link>
          </li>
        </ul>
      </Navigation>

      <HamMenu>
        <MenuIcon className="hamburger-menu" onClick={insideHamberger} />
      </HamMenu>
      {userName ? (
        <Profile ref={profileContainer}>
          <div className="profile">
            <span>{userName}</span>
            <img src={userPhoto} onClick={() => onProfileImageClick()} />
          </div>
          <UnorderedList ref={profileUl}>
            <li>
              <Link to="/settings">
                Settings
                <img src="/images/settings-white.svg" />
              </Link>
            </li>
            <li>
              <Link to="/" onClick={SignOut}>
                Logout
                <img src="/images/logout.svg" />
              </Link>
            </li>
          </UnorderedList>
        </Profile>
      ) : (
        <BtnContainer ref={btn_con}>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </BtnContainer>
      )}
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  padding: 0 40px;
  width: 100vw;
  height: 6.25rem; //100px
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
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

  @media only screen and (max-width: 880px) {
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
  position: relative;

  .profile {
    display: flex;
    background-size: cover;
    object-fit: cover;
    align-items: center;
  }

  span {
    color: #ffffff;
    margin-right: 20px;
    cursor: default;
  }
  .profile {
    img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 880px) {
    display: none;
  }

  &.active {
    flex-direction: column;
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

  @media only screen and (max-width: 880px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BtnContainer = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    padding: 0.8rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    border-radius: 100px;
    font-weight: 600;
    box-shadow: 0 0 7px -3px #ffffff;
  }

  a:first-of-type {
    border: 3px solid #64495c;
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
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 7px -1px #ffffff;
      transform: scale(1.02);
    }
  }

  @media only screen and (max-width: 880px) {
    display: none;
  }
`;

const UnorderedList = styled.ul`
  display: none;

  &.active {
    display: flex;
    flex-direction: column;
    list-style: none;
    position: absolute;
    background-color: #64495c;
    width: 200px;
    right: 0;
    top: 50px;
    overflow: hidden;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      transition: all 0.3s ease;

      a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
        cursor: pointer;
        text-decoration: none;
        color: #ffffff;

        img {
          width: 20px;
          height: 20px;
        }
      }

      &:hover {
        background-color: #412542;
      }
    }
  }
`;
