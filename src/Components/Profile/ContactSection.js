import React from "react";
import styled from "styled-components";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";
import Map from "./Map";

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
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
      </div>
    </ContactSectionStyle>
  );
}

const ContactSectionStyle = styled.div`
  width: 100vw;
  height: 85vh;
  background-color: black;
  padding: 20px;
  display: flex;
  color: #ffffff;
  align-items: center;

  .contactSection-wrapper {
    margin-top: 20px;
    display: flex;
    position: relative;
    width: 90vw;
  }
  .contactSection-wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
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
    max-width: 500px;
    margin-right: 50px;
    background-color: blue;
    border-radius: 4px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection-wrapper {
      flex-direction: column;
    }
    .contactSection-wrapper::after {
      display: none;
    }
    .left,
    .middle {
      max-width: 100%;
      flex-direction: column;
      margin-bottom: 20px;
    }

    .right {
      max-width: 100%;
      flex-direction: column;
      margin-top: -120px;
      height: 300px;
    }
  }

  @media only screen and (max-width: 500px) {
    .contactSection-wrapper {
      flex-direction: column;
    }
    .contactSection-wrapper::after {
      display: none;
    }
    .left,
    .middle {
      max-width: 100%;
      flex-direction: column;
      margin-bottom: 20px;
      align-items:center;

    }
`;
