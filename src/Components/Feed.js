import React from "react";
import EventsSideBar from "./EventsSideBar";
import Navigation from "./Navigation";
import PostSection from "./PostSection";

function Feed() {
  return (
    <div className="feed-section">
      <Navigation className="nav" />
      <PostSection />
      <EventsSideBar />
    </div>
  );
}

export default Feed;
