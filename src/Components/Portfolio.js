import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="title">
        <div className="square">
          <h1>Portfolio</h1>
        </div>
      </div>
      <div className="portfolio-container">
        <a href="#home" className="box image-1" />
        <a href="#home" className="box image-2" />
        <a href="#home" className="box image-3" />
        <a href="#home" className="box image-4" />
        <a href="#home" className="box image-5" />
        <a href="#home" className="box image-6" />
        <a href="#home" className="box image-7" />
      </div>
    </section>
  );
}
