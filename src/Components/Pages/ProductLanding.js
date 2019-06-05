import React, { Component } from "react";

class ProductLanding extends Component {
  render() {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="tech">
            <h3>Technologies</h3>
            <div className="icons">
              <i className="fab fa-html5" />
              <i className="fab fa-css3-alt" />
              <i className="fab fa-sass" />
              <i className="fab fa-js-square" />
              <i className="fab fa-react" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductLanding;
