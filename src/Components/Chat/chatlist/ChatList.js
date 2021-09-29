import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import styled from "styled-components";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image: "./images/pro-image-1.jpg",
      id: 1,
      name: "Alden Sab",
      active: true,
      isOnline: true,
    },
    {
      image: "./images/pro-image-2.jpg",
      id: 2,
      name: "Cael Eadric",
      active: false,
      isOnline: false,
    },
    {
      image: "./images/pro-image-3.jpg",
      id: 3,
      name: "Eamon Oberon",
      active: false,
      isOnline: false,
    },
    {
      image: "./images/pro-image-4.jpg",
      id: 4,
      name: "Hadley Aaron",
      active: false,
      isOnline: true,
    },
    {
      image: "./images/pro-image-5.jpg",
      id: 5,
      name: "Pablo Rachel",
      active: false,
      isOnline: false,
    },
    {
      image: "./images/pro-image-6.jpg",
      id: 6,
      name: "Rabbie Tad",
      active: false,
      isOnline: true,
    },
    {
      image: "./images/pro-image-7.jpg",
      id: 7,
      name: "Tadeas Pacey",
      active: false,
      isOnline: true,
    },
    {
      image: "./images/pro-image-8.jpg",
      id: 8,
      name: "Lacey Hadrian",
      active: false,
      isOnline: false,
    },
    {
      image: "./images/pro-image-9.jpg",
      id: 9,
      name: "Jacinto Gable",
      active: false,
      isOnline: true,
    },
    {
      image: "./images/pro-image-1.jpg",
      id: 10,
      name: "Jackie David",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main-chatlist">
        {/* <div className="chatlist-heading"></div> */}
        <div className="chatList-search">
          <div className="search-wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist-items">
          {this.state.allChats.map((item, index) => {
            return <ChatListItems name={item.name} key={item.id} animationDelay={index + 1} active={item.active ? "active" : ""} isOnline={item.isOnline ? "active" : ""} image={item.image} />;
          })}
        </div>
      </div>
    );
  }
}
