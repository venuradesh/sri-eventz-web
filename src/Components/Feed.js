import React, { useRef, useMemo, useEffect, useState } from "react";
import EventsSideBar from "./EventsSideBar";
import Navigation from "./Navigation";
import PostSection from "./PostSection";
import gsap from "gsap";

function Feed() {
  const feed = useRef();
  const event = useRef();

  useEffect(() => {
    gsap.fromTo(feed.current, { opacity: 0, y: "100px" }, { opacity: 1, y: "0px", duration: 1.2, delay: 2.4 });
  }, [feed.current]);

  return (
    <div className="feed-section" ref={feed}>
      <Navigation />
      <PostSection />
      <EventsSideBar reference={event} />
    </div>
  );
}

export default Feed;
