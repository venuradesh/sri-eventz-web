import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import gsap from "gsap";
import { googleProvider, auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/UserSlice.js/userSlice";
import db from "../../firebase";

const Login = () => {
  const dispatch = useDispatch();
  const wrapper = useRef();
  const login = useRef();
  const history = useHistory();
  const googleUser = db.collection("GoogleAccounts");

  const onGoogleAuth = () => {
    auth.signInWithPopup(googleProvider).then((result) => {
      dispatch(
        setUser({
          name: result.user.displayName,
          email: result.user.email,
          profilePhoto: result.user.photoURL,
          dbId: result.user.email,
        })
      );
      googleUser.doc(result.user.email).onSnapshot((snap) => {
        if (!snap.exists) {
          googleUser.doc(result.user.email).set({
            name: result.user.displayName,
            email: result.user.email,
            profilePhoto: result.user.displayName,
          });
        }
      });

      history.push("/");
      window.location.reload();
    });
  };

  useEffect(() => {
    gsap.fromTo(wrapper.current, { opacity: 0, y: "120px" }, { opacity: 1, y: "0", duration: 1 });
    gsap.fromTo(login.current, { opacity: 0, y: "100px" }, { opacity: 1, y: "0px", duration: 1, delay: 1 });
  }, []);

  const onBackClick = () => {
    history.goBack();
  };

  return (
    <Container>
      <div className="back-button" onClick={onBackClick}>
        <img src="/images/back.svg" />
      </div>
      <Wrapper ref={wrapper}>
        <LoginSection>
          <LoginWrapper ref={login}>
            <div className="welcome">Hello there!</div>
            <div className="login-to-continue">Login or Signup to Continue</div>
            <div className="login-section">
              <div className="email">Enter Your Email</div>
              <input type="text" className="email-input" />
              <div className="password">Enter Your Password</div>
              <input type="password" className="password-input" />
              <div className="memory-section">
                <div className="remember">
                  <input type="checkbox" name="password-forgot" id="fogot-password" className="checkbox" />
                  <div className="remember-me-text">Remember me</div>
                </div>
                <div className="forgot-password">Forgot Password</div>
              </div>
              <div className="btn-container">
                <div className="login-btn btn">Login</div>
              </div>
            </div>
            <div className="separator">
              <div className="line"></div>
              <div className="or-sign-in-with">OR</div>
              <div className="line"></div>
            </div>
            <div className="google" onClick={onGoogleAuth}>
              <img src="/images/google.svg" />
              <div className="sign-in-google">Sign in with Google</div>
            </div>
            <div className="sign-up">
              <span>don't have an account? </span>
              <Link to="/register"> SignUp</Link>
            </div>
          </LoginWrapper>
        </LoginSection>
        <PhotoWrapper>
          <img src="/images/logo-white.png" />
          <span>A product of Team Xposion</span>
        </PhotoWrapper>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, #141518, #412542, #141518);
  background-repeat: no-repeat;
  position: relative;

  .back-button {
    position: absolute;
    top: 30px;
    left: 30px;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background-color: #64495c;
      box-shadow: 0 5px 7px -2px rgba(0, 0, 0, 0.8);
    }

    img {
      transform: translateX(-2px);
      width: 20px;
    }
  }

  @media only screen and (max-width: 550px) {
    .back-button {
      padding: 0;
      top: 10px;
      left: 10px;

      img {
        width: 15px;
        height: 15px;
      }
    }
  }
`;

const Wrapper = styled.div`
  height: 550px;
  width: 850px;
  background-color: #ffffff;
  box-shadow: 0 0px 30px -3px rgba(0, 0, 0, 0.8);
  display: flex;
  border-radius: 12px;
  overflow: hidden;

  @media only screen and (max-width: 980px) {
    width: 750px;
  }

  @media only screen and (max-width: 870px) {
    width: 650px;
  }

  @media only screen and (max-width: 740px) {
    width: 400px;
  }

  @media only screen and (max-width: 460px) {
    width: 350px;
  }

  @media only screen and (max-width: 400px) {
    width: 300px;
  }

  @media only screen and (max-width: 350px) {
    width: 250px;
    height: 450px;
  }
`;

const LoginSection = styled.div`
  flex: 1;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.div`
  width: 300px;

  .welcome {
    font-size: 2.4rem;
    color: #412542;
    font-weight: 600;
  }

  .login-to-continue {
    font-size: 1rem;
    color: #64495c;
    font-weight: 100;
    letter-spacing: 0.8px;
    margin-top: 8px;
  }

  .login-section {
    margin-top: 25px;
    width: 100%;

    .email,
    .password {
      font-size: 1rem;
      color: #412542;
      font-weight: 600;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      border-radius: 100px;
      padding: 10px 20px;
      outline: none;
      border: none;
      background-color: #f2f2f2;
      margin-bottom: 10px;
    }

    .btn {
      width: 100%;
      padding: 10px 10px;
      border-radius: 50px;
      background-color: #64495c;
      display: flex;
      justify-content: center;
      color: #ffffff;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #412542;
        transform: scale(1.02);
      }
    }

    .memory-section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 18px;
      align-items: center;

      .remember {
        display: flex;
        width: 200px;
        align-items: center;

        input[type="checkbox"] {
          width: 30px;
          height: 30px;
          margin-right: 10px;
          margin-bottom: 0;

          &:checked {
            background-color: red;
            border-color: red;
          }
        }
        .remember-me-text {
          width: 300px;
          color: #412542;
          font-size: 0.8rem;
          font-weight: 600;
        }
      }

      .forgot-password {
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          background-color: #412542;
          width: 100%;
          height: 2px;
          bottom: -4px;
          transform: scale(0);
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

  .separator {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;

    .line {
      width: 100%;
      height: 1px;
      background-color: rgba(65, 37, 66, 0.59);
    }

    .or-sign-in-with {
      margin: 0 5px;
      font-size: 0.7rem;
    }
  }

  .google {
    display: flex;
    align-items: center;
    padding: 10px 10px;
    background-color: #64495c;
    border-radius: 50px;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    img {
      width: 15px;
      margin-right: 10px;
    }

    .sign-in-google {
      color: #ffffff;
      font-weight: 600;
      font-size: 1.1rem;
    }

    &:hover {
      background-color: #412542;
      transform: scale(1.02);
    }
  }

  .sign-up {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    span,
    a {
      font-size: 0.8rem;
      color: #64495c;
    }

    a {
      margin-left: 5px;

      &:hover {
        font-weight: 600;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    width: 250px;

    .login-section {
      .email,
      .password {
        font-size: 0.9rem;
      }
    }

    .memory-section {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .forgot-password {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      padding-left: 26px;
    }
  }

  @media only screen and (max-width: 350px) {
    width: 250px;

    .welcome {
      margin-top: 40px;
      font-size: 2rem;
    }

    .login-to-continue {
      margin-top: 5px;
      font-size: 0.8rem;
    }

    .login-section {
      margin-top: 15px;

      .email,
      .password {
        font-size: 0.8rem;
      }

      input {
        width: 210px;
      }

      .btn {
        width: 210px;
        font-size: 1rem;
      }
    }

    .separator {
      width: 210px;
    }

    .google {
      width: 210px;

      .sign-in-google {
        font-size: 1rem;
      }
    }
  }
`;

const PhotoWrapper = styled.div`
  flex: 1.2;
  background-image: url(/images/background-image-2.jpeg);
  background-size: cover;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  position: relative;

  img {
    width: 200px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
  }

  span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.7rem;
    position: absolute;
    bottom: 10px;
    right: 20px;
  }

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;
