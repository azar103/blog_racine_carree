import React from "react";
import "./PostsSlide.css";
import slideImg from "../images/photo_slide.jpg";
const PostsSlide = () => {
  return (
    <div className="slide">
      <div className="container">
        <h2 className="section-title">Top Posts</h2>
        <div className="slide-container">
          <span className="post-slide-title">
            Incididunt exercitation cillum do velit qui
          </span>
          <img src={slideImg} alt="slideimg" className="post-slide-img" />
          <ul className="slide-bollets">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostsSlide;
