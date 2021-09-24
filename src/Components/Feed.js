import React, { useRef, useMemo, useEffect, useState } from "react";
import EventsSideBar from "./EventsSideBar";
import Navigation from "./Navigation";
import PostSection from "./PostSection";
import gsap from "gsap";

function Feed() {
  const feed = useRef();
  const event = useRef();
  const [visible, setVisible] = useState(false);

  // const Fade = () => {
  //   gsap.fromTo(feed.current, { opacity: 0, y: "100px" }, { opacity: 1, y: "0px", duration: 1 });
  // };

  // const FadeOut = () => {
  //   gsap.fromTo(feed.current, { opacity: 0, y: "100px" }, {});
  // };

  // const callBack = (entries) => {
  //   if (entries[0].isIntersecting && entries[0].intersectionRatio > 0.27) {
  //     setVisible(entries[0].isIntersecting);
  //   } else {
  //     FadeOut();
  //     setVisible(entries[0].isIntersecting);
  //   }
  // };

  // useMemo(() => {
  //   if (visible) {
  //     Fade();
  //   }
  // }, [visible]);

  // const options = useMemo(() => {
  //   return {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: [0.27],
  //   };
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callBack, options);
  //   if (event.current) {
  //     observer.observe(event.current);
  //   }

  //   return () => {
  //     if (event.current) observer.unobserve(event.current);
  //   };
  // }, [event.current]);

  return (
    <div className="feed-section" ref={feed}>
      <Navigation />
      <PostSection />
      <EventsSideBar reference={event} />
    </div>
  );
}

export default Feed;
