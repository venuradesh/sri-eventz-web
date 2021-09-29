import React, { useMemo, useRef, useEffect } from "react";
import styled from "styled-components";
import PackageDetails from "./PackageDetails";
import gsap from "gsap";

export default function Packages(props) {
  const packageContainer = useRef();

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  }, []);

  const callBack = (entries) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        gsap.fromTo(packageContainer.current, { opacity: 0 }, { opacity: 1, duration: 1.2 });
      } else {
        gsap.fromTo(packageContainer.current, { opacity: 1 }, { opacity: 0 });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);

    observer.observe(packageContainer.current);
  }, []);

  return (
    <Container ref={packageContainer}>
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
