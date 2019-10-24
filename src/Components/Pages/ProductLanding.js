import React from "react";

const ProductLanding = () => {
  return (
    <section className="productlanding">
      <div className="container">
        <div className="project-image" />
        <h1>X9 Product Landing</h1>
        <div className="info">
          <div className="buttons">
            <a
              href="https://pedantic-blackwell-c886c4.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-desktop" /> View Project
            </a>
            <a
              href="https://github.com/seachai/x9-product-landing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code" /> View Code
            </a>
          </div>
          <p>
            A product landing page inspired by Apple iPhone XS and Xiaomi Mi 9.
            <br />
            Built with love using HTML5, CSS and JavaScript.
          </p>
          <div className="challenges">
            <h3>Challenges</h3>
            <div className="list-shift">
              <ul>
                <li>Grid Box</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tech">
          <h3>Technologies</h3>
          <div className="icons">
            <i className="fab fa-html5" />
            <i className="fab fa-css3-alt" />
            <i className="fab fa-js-square" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductLanding;
