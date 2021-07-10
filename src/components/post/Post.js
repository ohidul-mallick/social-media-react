import React from "react";
import "./Post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__topLeft">
            <img
              src="/assets/person/1.jpeg"
              className="post__profileImg"
              alt=""
            />
            <span className="post__userName">Ohidul</span>
            <span className="post__date">5 mins ago</span>
          </div>
          <div className="post__topRight">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">Hey ! it's My first Post</span>
          <img src="assets/post/1.jpeg" className="post__img" alt="" />
        </div>
        <div className="post__bottom">
          <div className="post__bottomLeft">
            <img src="assets/like.png" className="like__icon" alt="" />
            <img src="assets/heart.png" className="like__icon" alt="" />
            <span className="liked__counter">32 people liked this</span>
          </div>
          <div className="post__bottomRight">
            <span className="post__commentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
