import React, { Component } from "react";
import Avatar from "../chatlist/Avatar";

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat-item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat-item-content">
          <div className="chat-msg">{this.props.msg}</div>
          <div className="chat-meta">
            <span>5 mins ago</span>
          </div>
        </div>
        <Avatar isOnline="active" image={this.props.image} />
      </div>
    );
  }
}
