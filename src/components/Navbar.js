import React from "react";
import "./Navbar.css";
import logo from "../images/book.png";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-content">
          <div className="nav-left">
            <img className="nav-logo" src={logo} alt="logo" />
            <h2 className="nav-title">raçine caree blog</h2>
            <input
              className="nav-search-input"
              type="text"
              placeholder="Search post..."
            />
            <button className="nav-btn">Search</button>
          </div>
          <div className="nav-right">
            <ul className="nav-list">
              <li className="nav-list-item">
                <i className="icon fa fa-home"></i>
                <a href="#">Home</a>
              </li>
              <li className="nav-list-item">
                <i className="icon fa fa-home fa-columns"></i>
                <a href="#">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
