import React, {useState} from "react";
import PostsSlide from "../components/PostsSlide";
import ListPosts from "./ListPosts";
import Pagination from './Pagination';
import Navbar from "./Navbar";
import { v4 as uuidv4 } from "uuid";
const Home = () => {
    const data = [
    {
      id: uuidv4(),
      title: "smart thinking:skills for critical understanding and writing",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1955/9780195517330.jpg",
      author: 'Mathew Allen' ,
      price: 15.8 
    },
    {
      id: uuidv4(),
      title: "the art of creative thinking: how to be innovative and develop create ideas",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4447/9781444794496.jpg",
      author:"John Adam" ,
      price: 14.9 
    },
    {
      id: uuidv4(),
      title: "Introduction to Coding Theory",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5218/9780521845045.jpg",
      author:"Rom M.Roth" ,
      price: 115
    },
     {
      id: uuidv4(),
      title: "smart thinking:skills for critical understanding and writing",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1955/9780195517330.jpg",
      author: 'Mathew Allen' ,
      price: 15.8 
    },
    {
      id: uuidv4(),
      title: "the art of creative thinking: how to be innovative and develop create ideas",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4447/9781444794496.jpg",
      author:"John Adam" ,
      price: 14.9 
    },
    {
      id: uuidv4(),
      title: "Introduction to Coding Theory",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5218/9780521845045.jpg",
      author:"Rom M.Roth" ,
      price: 115
    },
     {
      id: uuidv4(),
      title: "smart thinking:skills for critical understanding and writing",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1955/9780195517330.jpg",
      author: 'Mathew Allen' ,
      price: 15.8 
    },
    {
      id: uuidv4(),
      title: "the art of creative thinking: how to be innovative and develop create ideas",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4447/9781444794496.jpg",
      author:"John Adam" ,
      price: 14.9 
    },
    {
      id: uuidv4(),
      title: "Introduction to Coding Theory",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5218/9780521845045.jpg",
      author:"Rom M.Roth" ,
      price: 115
    },
     {
      id: uuidv4(),
      title: "smart thinking:skills for critical understanding and writing",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1955/9780195517330.jpg",
      author: 'Mathew Allen' ,
      price: 15.8 
    },
    {
      id: uuidv4(),
      title: "the art of creative thinking: how to be innovative and develop create ideas",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4447/9781444794496.jpg",
      author:"John Adam" ,
      price: 14.9 
    },
    {
      id: uuidv4(),
      title: "Introduction to Coding Theory",
      urlImg:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5218/9780521845045.jpg",
      author:"Rom M.Roth" ,
      price: 115
    },
  ];
  const [posts] = useState(data);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [currentPage, setCurrentPage]= useState(1);
  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts= posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (i) => {
    setCurrentPage(i);
  }
  return (
    <div className="home">
      <PostsSlide />
      <ListPosts posts={currentPosts} />
      <Pagination
         totalBooks={posts.length}
         booksPerPage={postsPerPage}
         paginate={paginate}
       />
    </div>
  );
};

export default Home;
