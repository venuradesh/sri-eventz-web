import React from "react";
import styled from "styled-components";
import Post from "./Post";
import PostContent from "../Data/PostContent";

function PostSection() {
  console.log(PostContent);

  return (
    <Container>
      {PostContent.map((post) => (
        <Post images={post.images} desc={post.desc} user={post.user} time={post.dateTime} loc={post.location} />
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
