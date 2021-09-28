import React from "react";
import styled from "styled-components";
import PackageDetails from "./PackageDetails";

export default function Packages(props) {
  console.log(props.packages);
  Object.entries(props.packages).map((pack) => {
    console.log(pack[1].cover);
  });

  return (
    <Container>
      {!props.packages ? (
        ""
      ) : (
        <>
          <div className="section-heading">Choose Your Package</div>
          <div className="horizental">
            <div className="card-container">
              {Object.entries(props.packages).map((pack) => (
                <>
                  <PackageDetails cover={pack[1].cover} desc={pack[1].desc} name={pack[1].name} price={pack[1].price} subTitle={pack[1].subTitle} />
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
const Container = styled.div`
  flex-direction: column;
  padding: 20px;
  padding-left: 80px;

  .section-heading {
    font-size: 2.3rem;
    color: #412542;
    text-transform: uppercase;
    font-weight: 700;
  }

  .horizental {
    display: block;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .card-container {
      display: flex;
      width: 100%;
      padding-bottom: 20px;
    }
  }

  @media only screen and (max-width: 980px) {
    padding-left: 20px;

    .section-heading {
      display: flex;
      justify-content: center;
      font-size: 1.8rem;
    }
  }
`;
