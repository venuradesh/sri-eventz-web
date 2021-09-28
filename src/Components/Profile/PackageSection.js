import React from "react";
import styled from "styled-components";
import Packages from "./Packages";

function PackageSection(props) {
  return (
    <Container>
      <Packages packages={props.packages} />
    </Container>
  );
}

export default PackageSection;

const Container = styled.div`
  height: 70%;
  // width: 100vw;
`;
