import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Post from "./Post";
import db from "../firebase";
import gsap from "gsap";

function PostSection() {
  const [postsContents, setPostsContents] = useState([]);
  const postsDB = db.collection("posts");
  const userDB = db.collection("user");
  const searchPost = useRef();
  const keyword = useSelector((state) => state.keyword.keyword);
  const event = useSelector((state) => state.event.eventActive);
  const stars = useSelector((state) => state.filter.starRating);

  const compareByLevel = (a, b) => {
    if (a.user.level.rating < b.user.level.rating) {
      return 1;
    } else if (a.user.level.rating > b.user.level.rating) {
      return -1;
    }
    return 0;
  };

  const FilterByKeyWord = () => {
    if (keyword) {
      if (postsContents.length > 0) {
        setPostsContents([]);
      }
      postsDB
        .where("keywords", "array-contains", keyword)
        .orderBy("dateTime", "desc")
        .onSnapshot((snap) => {
          console.log("within");
          snap.docs.map((doc) => {
            let userId = doc.data().user.id;
            userDB.doc(userId).onSnapshot((userSnap) => {
              const userDetails = userSnap.data();
              setPostsContents((old) => [...old, { id: doc.id, content: doc.data(), user: userDetails }]);
            });
          });
          postsContents.sort(compareByLevel);
        });
    }
  };

  useEffect(() => {
    if (postsContents.length > 0) {
      setPostsContents([]);
    }
    if (!keyword) {
      postsDB
        .where("event", "==", event)
        .orderBy("dateTime", "desc")
        .onSnapshot((snap) => {
          snap.docs.map((doc) => {
            let userId = doc.data().user.id;
            userDB.doc(userId).onSnapshot((userSnap) => {
              const userDetails = userSnap.data();
              setPostsContents((old) => [...old, { id: doc.id, content: doc.data(), user: userDetails }]);
            });
          });
          postsContents.sort(compareByLevel);
        });
    } else {
      FilterByKeyWord();
    }
  }, [keyword, event, stars]);

  return (
    <Container>
      {postsContents.map((post) => (
        <Post ref={searchPost} images={post.content.images} desc={post.content.desc} user={post.user} time={post.content.dateTime} />
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
