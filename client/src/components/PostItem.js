import React from "react";
import "./PostItem.css";
const PostItem = ({ url, title, author, price }) => {
  return (
    <div className="post-item">
      <div className="post-item-img">
        <img src={url} alt="" />
      </div>
      <div className="post-item-desc">
        <span className="post-item-title">{title}</span>
        <span className="post-item-author">{author}</span>
        <span className="post-item-price">{price}&euro;</span>
      </div>
    </div>
  );
};

export default PostItem;
