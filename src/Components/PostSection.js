import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "./Post";
import db from "../firebase";

function PostSection() {
  const [postsContents, setPostsContents] = useState([]);
  const postsDB = db.collection("posts");
  const userDB = db.collection("user");

  const compareByLevel = (a, b) => {
    if (a.user.level.rating < b.user.level.rating) {
      return 1;
    } else if (a.user.level.rating > b.user.level.rating) {
      return -1;
    }
    return 0;
  };

  useEffect(() => {
    postsDB.orderBy("dateTime", "desc").onSnapshot((snap) => {
      snap.docs.map((doc) => {
        let userID = doc.data().user.id;
        let userDetails;
        userDB.doc(userID).onSnapshot((userSnap) => {
          userDetails = userSnap.data();
          setPostsContents((old) => [...old, { id: doc.id, content: doc.data(), user: userDetails }]);
        });
      });
    });
  }, []);
  postsContents.sort(compareByLevel);

  return (
    <Container>
      {postsContents.map((post) => (
        <Post images={post.content.images} desc={post.content.desc} user={post.user} time={post.content.dateTime} />
      ))}
    </Container>
  );
}

export default PostSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
`;
