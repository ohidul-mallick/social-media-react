import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__wrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
