import React from "react";
import "./PostItem.css";
const PostItem = ({ url, title }) => {
  return (
    <div className="post-item">
      <img className="post-item-img" src={url} />
      <div className="post-item-desc">
        <span className="post-item-title">{title}</span>
      </div>
    </div>
  );
};

export default PostItem;
