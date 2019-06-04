import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <Router>
      <section id="portfolio">
        <div className="title">
          <div className="square" />
          <h1>Projects</h1>
        </div>
        <div className="portfolio-container">
          <Link to="/project-info/" className="box image-1">
            <div className="image">
              <span className="image-btn">Web Development</span>
            </div>
          </Link>
          <Link to="/project-info/" className="box image-2">
            <div className="image">
              <span className="image-btn">Landing Page</span>
            </div>
          </Link>
          <a href="#home" className="box image-3">
            <div className="image">
              <span className="image-btn">Web Development</span>
            </div>
          </a>
          {/* <a href="#home" className="box image-4">
            <div className="image">
              <span className="image-btn">Web Development</span>
            </div>
          </a>
          <a href="#home" className="box image-5">
            <div className="image">
              <span className="image-btn">Web Development</span>
            </div>
          </a>
          <a href="#home" className="box image-6">
            <div className="image">
              <span className="image-btn">Web Development</span>
            </div>
          </a> */}
        </div>
      </section>
    </Router>
  );
}
