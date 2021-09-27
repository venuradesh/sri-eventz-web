import React, { useState } from "react";
import styled from "styled-components";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <div className="button-submit">
          <button type="submit">Send</button>
        </div>
      </FormStyle>
    </>
  );
}

const FormStyle = styled.form`
  width: 100%;
  padding: 8px;

  .form-group {
    height: 100%;
  }
  label {
    font-size: 1 rem;
    padding-bottom: 10px;
    height: 50px;
    margin-bottom: 10px;
  }
  input {
    padding-bottom: 20px;
    width: 90%;
    height: 30px;
    color: #ffffff;
    background-color: #64495c;
    outline: none;
    border: none;
    border-radius: 4px;
  }

  textarea {
    width: 90%;

    color: #ffffff;
    background-color: #64495c;
    outline: none;
    border: none;
    border-radius: 4px;
    min-height: 190px;
    resize: vertical;
    margin-top: 10px;
  }
  .button-submit {
    button {
      background-color: #64495c;
      color: #ffffff;
      font-size: 1rem;
      display: inline-block;
      outline: none;
      border: none;
      margin-top: 10px;
      border-radius: 1000px;
      cursor: pointer;
      width: 150px;
      height: 40px;
      cursor: pointer;

      &:hover {
        background-color: #412542;
        transform: scale(1.02);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: -120px;
  }
`;
