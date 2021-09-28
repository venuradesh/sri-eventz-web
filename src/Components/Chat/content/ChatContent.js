import React, { Component, useState, createRef, useEffect } from "react";
import "./ChatContent.css";
import Avatar from "../chatlist/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image: "./images/pro-image-1.jpg",
      type: "other",
      msg: "Hi,I want to design my wedding dress ",
    },
    {
      key: 2,
      image: "./images/pro-image-1.jpg",
      type: "other",
      msg: "Can i make an apoinment in this week",
    },
    {
      key: 3,
      image: "/images/pro.jpg",
      type: "",
      msg: "Hi thank you for contact me.definitely you can make an apoinment",
    },
    {
      key: 4,
      image: "./images/pro-image-1.jpg",
      type: "other",
      msg: "I checked your samples.that are awesome",
    },
    {
      key: 5,
      image: "/images/pro.jpg",
      type: "",
      msg: "Thank you sir,I will do my best for you",
    },
    {
      key: 6,
      image: "./images/pro-image-1.jpg",
      type: "other",
      msg: "Thank you",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image: "./images/pro-image-1.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main-chatcontent">
        <div className="content-header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar isOnline="active" image="./images/pro-image-1.jpg" />
              <p>Alden Sab</p>
            </div>
          </div>
        </div>
        <div className="content-body">
          <div className="chat-items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content-footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
