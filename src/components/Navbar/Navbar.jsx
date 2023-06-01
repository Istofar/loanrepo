import React from "react";
import "./navbar.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src="" alt="" />
        CASH <br />
        FLOW <br />
        EXPRESS
      </div>
      <div className="app__navbar-links">
        <ul>
          <li>
          <a href="#home"> Home </a>
          </li>
          <li>
          <a href="#Loans">Find Loans </a>
          </li>
          <li>
          <a href="#aboutus">About Us </a>
          </li>
          <li>
          <a href="#contact">Contact</a>
          </li>
        <SearchOutlinedIcon />
        <button className="apply">
          <a href="#applynow">Apply Now</a>
        </button>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
