import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggle = () => {
    return setMobileMenu(!mobileMenu);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">Chai Lee</Link>
      </div>

      <nav className="menu">
        <Link to="/">Home</Link>
        <a href="/#skills">Skills</a>
        <a href="/#portfolio">Projects</a>
        {/* <a href="/#blog">Blog</a> */}
        <a
          href="mailto:imchai@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hire"
        >
          Contact
        </a>
      </nav>

      <nav className={`mobile-menu ${mobileMenu ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <a href="/#skills">Skills</a>
        <a href="/#portfolio">Projects</a>
        {/* <a href="/#blog">Blog</a> */}
        <a
          href="mailto:imchai@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hire"
        >
          Contact
        </a>
      </nav>

      <div className="menu-btn" onClick={toggle}>
        <i className="fas fa-bars" />
      </div>
    </header>
  );
};

export default Header;
