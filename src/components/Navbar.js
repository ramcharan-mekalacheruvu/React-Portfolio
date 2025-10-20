import React from "react";
import { Link } from "react-scroll";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Portfolio</h1>
        <ul className="nav-links">
          <li><Link to="home" smooth duration={500}>Home</Link></li>
          <li><Link to="resume" smooth duration={500}>Resume</Link></li>
          <li><Link to="projects" smooth duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth duration={500}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
