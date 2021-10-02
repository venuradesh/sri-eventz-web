import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Post from "./Post";
import db from "../firebase";

function PostSection() {
  const [postsContents, setPostsContents] = useState([]);
  const postsDB = db.collection("posts");
  const userDB = db.collection("user");
  const [rated, setRated] = useState(false);
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

  const FilterByStars = () => {
    const SeeRating = (userId) => {
      const user = userDB
        .doc(userId)
        .get()
        .then((docs) => {
          if (docs.data().level.rating < stars) {
            setRated(true);
            const result = docs.data();
            return result;
          }
        });
      return user;
    };

    postsDB.onSnapshot((snap) => {
      snap.docs.map((doc) => {
        const userId = doc.data().user.id;
        const user = SeeRating(userId);
        user.then((res) => {
          if (res) {
            console.log("within");
            setPostsContents((old) => [...old, { id: doc.id, content: doc.data(), user: res }]);
            console.log(postsContents);
          }
        });
      });
      postsContents.sort(compareByLevel);
    });
  };

  useEffect(() => {
    if (postsContents.length > 0) {
      setPostsContents([]);
    }
    if (!keyword && stars === 1) {
      postsDB
        .where("event", "==", event)
        .orderBy("dateTime", "desc")
        .onSnapshot((snap) => {
          snap.docs.map((doc) => {
            console.log(doc.data());
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
    if (document.getElementById("filter-window").classList.contains("active") && stars > 1) {
      setPostsContents([]);
      FilterByStars();
    }
  }, [keyword, event, stars]);

  return (
    <Container>
      {postsContents.map((post) => (
        <Post ref={searchPost} postid={post.id} id={post.content.user.id} images={post.content.images} desc={post.content.desc} user={post.user} time={post.content.dateTime} />
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
