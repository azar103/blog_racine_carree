import React from "react";
import PostItem from "./PostItem";
import "./Posts.css";
const Posts = ({ posts }) => {
  return (
    <div className="posts pd-y">
      <div className="container">
        <h2 className="section-title">Latest Posts</h2>
        {posts.map((post) => (
          <PostItem url={post.urlImg} title={post.title} />
        ))}
        <div className="clear-fix"></div>
      </div>
    </div>
  );
};

export default Posts;
