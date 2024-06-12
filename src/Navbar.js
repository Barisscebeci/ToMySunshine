// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="link">
        Kalbim
      </Link>
      <Link to="/" className="link">
        &
      </Link>
      <Link to="/path-to-heart" className="link">
        Kalbime Giden Yol
      </Link>
    </div>
  );
};

export default Navbar;
