import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SingleChatItem from "./SingleChatItem";
import { useSelector } from "react-redux";
import db from "../../firebase";

const ChatList = (props) => {
  const user = useSelector((state) => state.user.user);
  const [userDetails, setUserDetails] = useState([]);
  const userDB = db.collection("user");

  useEffect(() => {
    setUserDetails([]);
    props.userList.map((user) => {
      userDB.doc(user).onSnapshot((snap) => {
        setUserDetails((old) => [...old, { id: snap.id, details: snap.data() }]);
      });
    });
  }, [props.userList]);

  return (
    <Container>
      <ProfileContainer>
        <ImgContainer>
          <img src={user.profilePhoto} alt={user.name} />
          <div className="more-info">
            <MoreVertIcon className="more-info-icon" />
          </div>
        </ImgContainer>
        <SearchMessage>
          <input type="text" className="input-search" placeholder="Search" />
          <SearchIcon className="search-icon" />
        </SearchMessage>
      </ProfileContainer>
      <ChatListContainer>{userDetails && userDetails.map((detail) => <SingleChatItem name={detail.details.name} img={detail.details.profileImage} lastMsg="" />)}</ChatListContainer>
    </Container>
  );
};

export default ChatList;

const Container = styled.div`
  width: 400px;
  height: calc(100vh - 6.25rem);
  max-height: calc(100vh - 6.25rem);
  overflow-y: auto;
  background-color: #f2f2f2;
  border-right: 1px solid #d9d9d9;
`;

const ProfileContainer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  background-color: #f2f2f2;
  top: 0;
`;

const ImgContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  background-color: #ffffff;

  .more-info {
    display: flex;
    align-items: center;
    .more-info-icon {
      color: #412542;
    }
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }
`;

const SearchMessage = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  position: relative;
  padding: 0 20px;
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;

  input {
    flex: 1;
    padding: 10px 20px;
    border: none;
    font-size: 1.2rem;
    outline: none;
    color: #ffffff;
    background-color: #ffffff;
    border-radius: 50px;

    &::placeholder {
      color: #64495c;
      font-size: 1rem;
    }
  }
  .search-icon {
    position: absolute;
    right: 35px;
    color: #64495c;
  }
`;

const ChatListContainer = styled.div``;
