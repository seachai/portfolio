import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="title">
        <div className="square" />
        <h1>Projects</h1>
      </div>
      <div className="portfolio-container">
        <Link to="/product-landing" className="box image-1">
          <div className="image">
            <span className="image-btn">Real Estate</span>
          </div>
        </Link>
        <Link to="/poke-restaurant" className="box image-2">
          <div className="image">
            <span className="image-btn">Restaraunt</span>
          </div>
        </Link>
        <Link to="/product-landing" className="box image-3">
          <div className="image">
            <span className="image-btn">Product Landing</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
