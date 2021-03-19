import React from "react";
import PostsSlide from "../components/PostsSlide";
import Posts from "./Posts";
const Home = ({ posts }) => {
  return (
    <div className="home">
      <PostsSlide />
      <Posts posts={posts} />
    </div>
  );
};

export default Home;
