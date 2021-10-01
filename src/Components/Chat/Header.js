import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import gsap from "gsap";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { setUser, unsetUser } from "../../features/UserSlice.js/userSlice";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const nav_menu = useRef();
  const btn_con = useRef();
  const ul = useRef();
  const profileUl = useRef();
  const profileContainer = useRef();
  const [loginInserted, setLoginInserted] = useState(false);
  const [userName, setUserName] = useState();
  const [userPhoto, setUserPhoto] = useState();
  const headerContainer = useRef(null);

  useEffect(() => {
    // gsap.fromTo(headerContainer.current, { opacity: 0, y: "-100px" }, { opacity: 1.3, duration: 1, delay: 0.7, y: 0 });

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            profilePhoto: user.photoURL,
          })
        );
        setUserName(user.displayName);
        setUserPhoto(user.photoURL);
      }
    });
  }, []);

  const insideHamberger = () => {
    document.getElementById("search").classList.toggle("active");
    nav_menu.current.classList.toggle("active");
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

  const onProfileImageClick = () => {
    profileUl.current.classList.toggle("active");
    profileContainer.current.classList.toggle("active");
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

  const reloadWindow = (e) => {
    e.preventDefault();
    history.push("/");
    window.location.reload();
  };

  return (
    <Container ref={headerContainer}>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <Navigation ref={nav_menu}>
        <ul ref={ul}>
          <li>
            <Link to="/" onClick={(e) => reloadWindow(e)}>
              Home
            </Link>
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
      {userName ? (
        <ProfileContainer ref={profileContainer}>
          <div className="profile">
            <div className="name">{userName}</div>
            <img src={userPhoto} onClick={onProfileImageClick} />
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
        </ProfileContainer>
      ) : (
        <BtnContainer ref={btn_con}>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </BtnContainer>
      )}
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
  background-color: #ffffff;
  border-bottom: 1px solid #efefef;
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
  z-index: 100;
`;
const Logo = styled.div`
  width: 150px;
  height: 70px;
  background-image: url(/images/logo-purple.png);
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
        color: #4e364f;
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
          background-color: #4e364f;
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
      height: 250px;
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
    // border-radius: 12px;
    background-color: tranparent;
    color: #4e364f;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 7px -1px rgba(0, 0, 0, 0.7);
      transform: scale(1.02);
    }
  }

  a:last-of-type {
    color: #ffffff;
    background-color: #64495c;
    border: 3px solid transparent;
    // border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 7px -1px rgba(0, 0, 0, 0.7);
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
    z-index: 100;
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

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .profile {
    display: flex;
    align-items: center;

    .name {
      color: #ffffff;
      margin-right: 10px;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.6px;
      cursor: default;
    }

    img {
      width: 40px;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0px 7px 2px rgba(255, 255, 255, 0.4);
      }
    }
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }

  &.active {
    flex-direction: column;
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
        }
      }

      &:hover {
        background-color: #412542;
      }
    }
  }
`;
