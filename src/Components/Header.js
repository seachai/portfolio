import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobileMenu: false
    };
  }
  toggle = () => {
    this.setState(
      {
        mobileMenu: !this.state.mobileMenu
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">Chai Lee</Link>
        </div>

        <nav className="menu">
          <Link to="/">Home</Link>
          <a href="#services">Skills</a>
          <a href="#portfolio">Projects</a>
          <a href="#blog">Blog</a>
        </nav>

        <nav className={`mobile-menu ${this.state.mobileMenu ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <a href="#services">Skills</a>
          <a href="#portfolio">Projects</a>
          <a href="#blog">Blog</a>
        </nav>

        <div className="menu-btn" onClick={this.toggle}>
          <i className="fas fa-bars" />
        </div>
      </header>
    );
  }
}

export default Header;