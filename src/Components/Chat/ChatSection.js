import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import ChatList from "./ChatList";
import ChattingContainer from "./ChattingContainer";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import db from "../../firebase";
import { auth } from "../../firebase";
import { setUser } from "../../features/UserSlice.js/userSlice";

const ChatSection = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [userList, setUserList] = useState([]);
  const [newChat, setNewChat] = useState(false);
  const [userPr, setUserPr] = useState();
  const vendorId = useParams().id;
  const [alreadyRendered, setAlreadyRendered] = useState(false);
  const googleAccounts = db.collection("GoogleAccounts");

  const authSelect = () => {
    if (!alreadyRendered) {
      auth.onAuthStateChanged((res) => {
        setUserPr();
        dispatch(
          setUser({
            name: res.displayName,
            email: res.email,
            profilePhoto: res.photoURL,
          })
        );
        setUserPr({
          name: res.displayName,
          email: res.email,
          profilePhoto: res.photoURL,
        });
      });
    }
  };

  const takeMessages = ({ message, id }) => {
    setMessages([...messages, { content: message, id: id }]);
  };

  const makeUserList = ({ id: id }) => {
    setUserList([...userList, id]);
  };

  const createSriChat = (email) => {
    googleAccounts.doc(email).collection("sriChat").doc(vendorId).set({
      messages: [],
    });
    setNewChat(true);
  };

  const mainDBFunc = () => {
    if (!alreadyRendered) {
      setUserList([]);
      setMessages([]);
      googleAccounts
        .doc(userPr.email)
        .collection("sriChat")
        .onSnapshot((snap) => {
          if (snap.docs[0]) {
            snap.docs.map((doc) => {
              if (doc.exists) {
                makeUserList({ id: doc.id });
                if (doc.id === vendorId) {
                  takeMessages({ message: doc.data(), id: doc.id });
                }
              }
            });
          } else {
            createSriChat(userPr.email);
          }
        });
      setAlreadyRendered(true);
    }
  };

  useEffect(() => {
    authSelect();
    if (userPr && !alreadyRendered) {
      mainDBFunc();
    }
  }, [userPr]);

  return (
    <Container>
      <Header />
      <div className="chat-container">
        <ChatList userList={userList} />
        <ChattingContainer messages={messages} />
      </div>
    </Container>
  );
};

export default ChatSection;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .chat-container {
    display: flex;
    width: 100%;
    min-height: calc(100vh - 6.25rem);
  }
`;
