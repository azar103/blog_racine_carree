import React from "react";
import PostItem from "./PostItem";
import "./ListPosts.css";
import Pagination from './Pagination';
const ListPosts = ({ posts }) => {
  return (
    <div className="posts pd-y" id="latest-books">
      <div className="container">
        <h2 className="section-title">Latest Books</h2>
        <div className="posts-content">
        {posts.map((post) => (
          <PostItem url={post.urlImg} title={post.title}
          author={post.author}
          price={post.price}
           />
        ))}
        </div>
      </div>
    </div>
  );
};

export default ListPosts;
