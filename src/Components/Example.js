import React from "react";
import styled from "styled-components";

const Example = () => {
  return (
    <Container>
      <div className="example"></div>
    </Container>
  );
};

export default Example;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .exaple {
    position: absolute;
  }
`;
