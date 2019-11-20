import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="title">
        <div className="square" />
        <h1>Projects</h1>
      </div>
      <div className="portfolio-container">
        <Link to="/real-estate" className="box image-1">
          <div className="image">
            <span className="image-btn">Tiny Real Estate</span>
          </div>
        </Link>
        <Link to="/poke-restaurant" className="box image-2">
          <div className="image">
            <span className="image-btn">Poke Poke Restaurant</span>
          </div>
        </Link>
        <Link to="/product-landing" className="box image-3">
          <div className="image">
            <span className="image-btn">X9 Landing Page</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
