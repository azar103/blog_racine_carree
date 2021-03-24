import React from "react";
import "./Navbar.css";
import logo from "../images/book.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-content">
          <div className="nav-left">
            <img className="nav-logo" src={logo} alt="logo" />
            <Link to="/">
              <h2 className="nav-title">bookStore</h2>
            </Link>

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
                <i className="icon fa fa-home fa-columns"></i>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
