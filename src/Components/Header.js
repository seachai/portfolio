import React, { Component } from "react";

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
          <a href="#home">Chai Lee</a>
        </div>

        <nav className="menu">
          <a href="#home">Home</a>
          <a href="#services">Skills</a>
          <a href="#portfolio">Projects</a>
          <a href="#blog">Blog</a>
        </nav>

        <nav className={`mobile-menu ${this.state.mobileMenu ? "active" : ""}`}>
          <a href="#home">Home</a>
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
