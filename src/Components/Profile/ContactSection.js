import React from "react";
import styled from "styled-components";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";
import Map from "./Map";

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="contactSection-wrapper">
        <div className="left">
          <ContactInfoItem icon={<MdLocalPhone />} text="+94451672345" />
          <ContactInfoItem icon={<MdEmail />} text="John@gmail.com" />
          <ContactInfoItem text="No 150,lake road,colombo" />
        </div>
        <div className="middle">
          <ContactForm />
        </div>
        <div className="right">
          <Map />
        </div>
      </div>
    </ContactSectionStyle>
  );
}

const ContactSectionStyle = styled.div`
  width: 100vw;
  height: 100%;
  background-color: black;
  padding: 20px;
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;

  .contactSection-wrapper {
    margin-top: 20px;
    display: flex;
    position: relative;
    width: max-content;
  }

  .left {
    max-width: 500px;
    height: 400px;
    width: 100%;
    margin-right: 50px;
  }

  .middle {
    max-width: 500px;
    height: 400px;
    width: 100%;
    margin-right: 50px;
  }

  .right {
    border-radius: 4px;
  }

  @media only screen and (max-width: 1280px) {
    width: 100vw;

    .contactSection-wrapper {
      flex-direction: column;
      width: max-content;
      width: 500px;
      align-items: center;

      .left {
        height: 200px;
        margin-right: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .middle {
        margin-right: 0px;
        margin-bottom: 50px;
      }

      .right {
        width: 400px;
        display: flex;
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .left {
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 500px) {
    .left,
    .middle {
      max-width: 100%;
      flex-direction: column;
      margin-bottom: 20px;
      align-items: center;
    }

    .right {
      width: 300px;
      height: 300px;
    }
  }

  @media only screen and (max-width: 400px) {
    .left,
    .middle {
      width: 300px;
    }
  }

  @media only screen and (max-width: 390px) {
    .contactSection-wrapper {
      width: 300px;
    }

    .left,
    .middle {
      width: 250px;
    }

    .right {
      max-width: 100vw;
      overflow: hidden;
    }
  }
`;
